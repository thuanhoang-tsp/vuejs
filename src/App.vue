<script setup lang="ts">
  import { ref, watch } from 'vue';
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
</script>

<template>
  <div>{{ count }}</div>
  <button @click="handleClick">Increase</button>
  <div>{{ check ? valueInput : '' }}</div>
  <input type="text" v-model="valueInput">
  <button @click="handleOnchageCheck">Show value</button>
</template>