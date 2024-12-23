<script setup lang="ts">
import { ref } from 'vue';
    const isLoggedIn = ref(true)

    const toggleLogin = () => {
        isLoggedIn.value = !isLoggedIn.value
    }

    // v-if v-else: Loại bỏ/xóa phần tử ra khỏi DOM => Không render trong DOM nên tối ưu DOM nhưng chậm
    // v-show: Nhanh hơn, phù hợp cho việc ẩn/hiện nội dung, Chỉ là ẩn hiện phần tử (ví dụ như display: none) => Có thể bị chiếm diện tích không cần thiết trong DOM
</script>

<template>
    <h1 v-if="isLoggedIn">Chào mừng người dùng đã đăng nhập</h1>
    <h1 v-else>Chào mừng khách</h1>

    <button @click="toggleLogin">{{ !isLoggedIn ? 'Login' : 'Logout' }}</button>
</template>

<style>
</style>