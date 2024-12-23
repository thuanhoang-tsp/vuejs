<template>
  <div>
    <a-menu
      mode="horizontal"
      theme="dark"
      style="font-weight: 500;"
      :selected-keys="[activeKey]"
    >
      <a-menu-item key="home">
        <router-link to="/">Trang Chủ</router-link>
      </a-menu-item>
      <a-menu-item key="todolist">
        <router-link to="/todolist">TodoList</router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts" setup>
import { routeKeyMap } from '@/router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const activeKey = computed(() => routeKeyMap[route.path] || '');
</script>