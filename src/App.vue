<script setup lang="ts">
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

type User = {
  name: string;
  age: number;
  status: 'active' | 'deactive';
  loading: boolean
};

const user = ref<User>({
  name: 'John',
  age: 20,
  status: 'active',
  loading: false
});

const handleChangeStatus = (status: 'active' | 'deactive') => {
  user.value.loading = true

  setTimeout(() => {
    user.value.status = status;
    user.value.loading = false
  }, 1500);
};
</script>

<template>
  <ChildComponent :user="user" :handleChangeStatus="handleChangeStatus" />
</template>