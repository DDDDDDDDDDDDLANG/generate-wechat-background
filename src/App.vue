<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import ChatView from '@/pages/ChatView.vue'
</script>

<template>
  <NConfigProvider :theme-overrides="{ common: { fontWeightStrong: '600' } }" class="h-full">
    <ChatView />
  </NConfigProvider>
</template>

<style>
#app {
  height: 100vh;
  background: #010409;
}
</style>
