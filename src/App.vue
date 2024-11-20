<script setup lang="ts">
  import { ref, watch, watchEffect } from 'vue';
  import ChildComponent from './components/ChildComponent.vue';

  const count = ref<number>(0)
  const valueInput = ref<string>('')
  const check = ref<boolean>(false)

  const handleClick = () => {
    count.value++
  }

  const handleOnchageCheck = () => {
    check.value = !check.value
  }

  watch(valueInput, (newValue) => {
    console.log("valueInput changed:", newValue);
  });

  watch(check, (newCheck) => {
    console.log("newCheck", newCheck);
  });

  watchEffect(() => {
    count.value = count.value * 2
    console.log(`Count: ${count.value}`)
})
</script>

<template>
  <div>{{ check ? valueInput : '' }}</div>
  <input type="text" v-model="valueInput">
  <button @click="handleOnchageCheck">Show value</button>

  <ChildComponent :count="count" :handleClick="handleClick" />
</template>