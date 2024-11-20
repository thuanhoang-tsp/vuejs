<script lang="ts" setup>

type User = {
    name: string;
    age: number;
    status: 'active' | 'deactive';
    loading: boolean
}

const props = defineProps<{
    user: User,
    handleChangeStatus: (status: 'active' | 'deactive') => void
}>()

</script>

<template>
    <div>
        <div v-if="props.user.loading">Loading .... </div>
        <div v-else>
            <div v-if="props.user.status === 'active'">
                <div>name: <span style="font-weight: bold;">{{ props.user.name }}</span></div>
                <div>age: <span style="font-weight: bold;">{{ props.user.age }}</span></div>
            </div>
            <div v-if="props.user.status === 'deactive'">
                User is blocked
            </div>
        </div>
    </div>

    <div>
        <button @click="handleChangeStatus('active')" :disabled="user.status === 'active'">Active</button>
        <button @click="handleChangeStatus('deactive')" :disabled="user.status === 'deactive'">Deactive</button>
    </div>
</template>