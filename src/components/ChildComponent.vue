<script lang="ts" setup>
import { watchEffect, type PropType } from 'vue';

const props = defineProps({
    count: Number,
    handleClick: {
      type: Function as PropType<() => void>,
      required: true,
    },
})


</script>

<template>
    <div>
        <p>Count in child component: {{ count }}</p>
        <button @click="props.handleClick">Increase</button>
    </div>
</template>