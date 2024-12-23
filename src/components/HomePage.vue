<script setup lang="ts">
import { computed, ref } from 'vue';

    const firstName = ref("Tôi là")
    const lastName = ref("ai")

    const fullName = computed({
        get(){
            return firstName.value + ' ' + lastName.value
        },
        set(newValue){
            [firstName.value, lastName.value] = newValue.split(',')
        }
    });

    const changeFullName = () => {
        fullName.value = "Nguyễn Văn, A"
    }
</script>

<template>
    <p>fullName: {{ fullName }}</p>
    <p>firstName: {{ firstName }}</p>
    <p>lastName: {{ lastName }}</p>
    <button @click="changeFullName">Click</button>
</template>