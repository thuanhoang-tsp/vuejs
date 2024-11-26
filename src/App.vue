<script setup lang="ts">
import MyNavbar from './components/MyNavbar.vue';

</script>

<template>
  <div id="app">
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <MyNavbar />
    </a-layout-header>
    <a-layout-content class="layout-content">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
  </div>
</template>

<style scoped>
  .layout-content {
  padding: 20px 40px;
  margin-top: 64px;
}
</style>