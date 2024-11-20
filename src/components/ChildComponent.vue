<script lang="ts" setup>
import { ref } from 'vue';

const tasks = ref([
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' },
    { id: 4, name: 'Task 4' },
    { id: 5, name: 'Task 5' },
])

</script>

<template>
    <div v-for="(task, index) in tasks" :key="index">
        {{ task.name }}
    </div>
</template>