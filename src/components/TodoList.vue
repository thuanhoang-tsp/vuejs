<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import { useTodos } from '@/hooks/useTodoUser';
import { fetchUsers } from '@/apis/user';
import type { User } from '@/type/User/User';
import type { Todo } from '@/type/User/Todo';

const listUsers = ref<{ label: string; value: number }[]>([]);
const userId = ref<number | null>(null);

const { todoOfUser, isLoading, loadTodos, updateTodo } = useTodos();

const handleChange = (id: number) => {
    userId.value = id;
};

onMounted(async () => {
    try {
        const users = await fetchUsers();
        listUsers.value = users.map((user: User) => ({ label: user.name, value: user.id }));
    } catch (err) {
        console.error(err);
    }
});

watch(userId, loadTodos);
</script>


<template>
    <div>
        <a-divider orientation="left" orientation-margin="0px">User</a-divider>
        <a-select @change="handleChange" allowClear :options="listUsers" placeholder="Select user"
            style="width: 200px;"></a-select>
        <a-divider orientation="left" orientation-margin="0px">Tasks</a-divider>
        <a-list :loading="isLoading" size="large" bordered :data-source="todoOfUser">
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
                    <a-button :disabled="item.completed" size="small" @click="updateTodo(item.id)">Mark done</a-button>
                </a-list-item>
            </template>
        </a-list>
        <div style="margin-top: 12px;">
            Done {{ todoOfUser.filter((item: Todo) => item.completed).length }}/{{ todoOfUser.length }} tasks
        </div>
    </div>
</template>