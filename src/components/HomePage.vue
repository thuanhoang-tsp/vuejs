<script setup lang="ts">
import { computed, reactive } from 'vue';

    const book = reactive({
        name: "book 1",
        chapters: [] as number[],
    })

    const addChapter = () => {
        const nextNumber = book.chapters.length
        book.chapters.push(nextNumber);
    }

    const isPublished = computed(() => book.chapters.length > 0 ? "Có" : "Không")

    const totalNumbers = computed(() => book.chapters.reduce((total, item) => item + total, 0))
</script>

<template>
    <p id="count">Bookname : {{ book.name }}</p>
    <p id="count">Đã xuất bản : {{ isPublished }}</p>
    <p>{{ book.chapters }}</p>
    <p>Total: {{ totalNumbers }}</p>
    <button @click="addChapter">Add Chapter</button>
</template>