<script setup lang="ts">
import { ref } from 'vue'
import user from './assets/user.svg'

const chatData = ref(
  [{ role: 'user', content: 'Hello!' }],
)

function handleRoleName(role: string) {
  const roleMap: Record<string, any> = {
    user: {
      name: '我',
      avatar: user,
    },
    assistant: {
      name: 'chatGPT',
      avatar: user,
    },
  }
  return roleMap[role] ?? ''
}
</script>

<template>
  <div height="100vh" width="100%">
    <div class="w-800px   chat-container">
      <div v-for="(item, index) in chatData" :key="index" class="chat-message flex-row-reverse">
        <div class="avatar">
          123
        </div>
        <div class="bubble">
          <div class="flex justify-between">
            <div>{{ handleRoleName(item.role) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.chat-container {
  box-shadow: rgba(31, 36, 39, 0.2) 0px 10px 15px -5px;
  min-height: 500px;
  background-color: #1F2427;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.chat-message {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  line-height: 1.7;
  font-size: medium;

  .avatar {
    margin: 0 0 0 10px;
    width: 36px;
    height: 36px;
    min-width: 36px;
    margin: 0 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 50%;

  }

  .bubble {
    color: rgb(232, 230, 227);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px -5px;
    background: #40497f;
    max-width: 680px;
    padding: 15px;
    border-radius: 15px;
  }
}
</style>
