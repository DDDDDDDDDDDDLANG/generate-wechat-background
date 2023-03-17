<script setup lang="ts">
import ChatView from '@/pages/ChatView.vue'
</script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <ChatView />
  </n-config-provider>
</template>

<style scoped>

</style>
