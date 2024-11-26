<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import type { User } from '@/type/User';
import { CheckSquareOutlined, MinusSquareOutlined } from '@ant-design/icons-vue';
import type { Todo } from '@/type/Todo';
import { Button } from 'ant-design-vue';

const listUsers = ref<{ label: string; value: number }[]>([]);
const userId = ref<number | null>(null)
const todoOfUser = ref([]);
const isLoading = ref<boolean>(false)

const handleChange = (id: number) => {
    userId.value = id
}

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        listUsers.value = data?.map((item: User) => {
            return {
                label: item.name,
                value: item.id
            }
        })
    } catch (err) {
        console.log(err);
    }
})

onMounted(async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId.value}/todos`)
        const data = await response.json()
        todoOfUser.value = data
    } catch (err) {
        console.log(err);
    }
})

watch(userId, async (newUserId) => {
    if (newUserId !== null) {
        try {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/users/${newUserId}/todos`
            );
            const data = await response.json();
            todoOfUser.value = data.sort((a: Todo, b: Todo) => Number(a.completed) - Number(b.completed));
            //   console.log("todoOfUser.value", toRaw(todoOfUser.value)); => lấy data gốc
        } catch (err) {
            console.error(err);
        }
    }
});

const handleUpdateChange = async (id: number) => {
    isLoading.value = true
    try {
        await fetch(
            `https://jsonplaceholder.typicode.com/todos/${id}`
        );
    }
    catch (err) {
        console.error(err);
    }finally{
        isLoading.value = false
    }
}

</script>

<template>
    <div>
        <a-divider orientation="left" orientation-margin="0px">User</a-divider>
        <a-select @change="handleChange" allowClear :options="listUsers" placeholder="Select user"
            style="width: 200px;"></a-select>
        <a-divider orientation="left" orientation-margin="0px">Tasks</a-divider>
        <a-list size="large" bordered :data-source="todoOfUser">
            <template #renderItem="{ item }">
                <a-list-item>
                    <div>
                        <span v-if="item.completed">
                            <CheckSquareOutlined style="color: green" />
                        </span>
                        <span v-else>
                            <MinusSquareOutlined style="color: orange" />
                        </span>
                        {{ item.title }}
                    </div>
                    <a-button loading="isLoading.value" size="small" @click="() => handleUpdateChange(item.id)">Mark done</a-button>
                </a-list-item>
            </template>
        </a-list>
        <div style="margin-top: 12px;">
            Done {{ todoOfUser.filter((item: Todo) => item.completed).length }}/{{ todoOfUser.length }} tasks
        </div>
    </div>
</template>