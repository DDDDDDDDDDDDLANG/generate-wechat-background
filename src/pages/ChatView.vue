<script setup lang="ts">
import { ref } from 'vue'
import { NButton, NIcon, NInput } from 'naive-ui'
import { SendSharp } from '@vicons/ionicons5'
import user from '@/assets/user.svg?url'
import robot from '@/assets/robot.svg?url'

const chatData = ref([
  { role: 'user', content: '你好，我是张三' },
  { role: 'user', content: '你好，我是张三' },
  { role: 'assistant', content: '张三,你好，请问我能帮你做什么呢' },
  { role: 'user', content: '你好，我是张三' },
  { role: 'user', content: '你好，我是张三' },
])
const inputValue = ref('')
const roleMap: Record<string, any> = {
  user: {
    name: '法外狂徒',
    avatar: user,
  },
  assistant: {
    name: 'chatGPT',
    avatar: robot,
  },
}
function handleRole(role: string) {
  return roleMap[role] ?? ''
}
</script>

<template>
  <div class="h-100 w-100">
    <div class="w-800px chat-container">
      <div
        v-for="(item, index) in chatData" :key="index" class="chat-message"
        :style="{ flexDirection: item.role === 'user' ? 'row-reverse' : 'row' }"
      >
        <div class="avatar">
          <img :src="handleRole(item.role).avatar">
        </div>
        <div class="message-info flex flex-col">
          <div class="flex font-[13px]" :style="{ justifyContent: item.role === 'user' ? 'flex-end' : 'flex-start' }">
            {{ handleRole(item.role).name }}
          </div>
          <p class="bubble" :style="{ background: item.role === 'user' ? '#9CE553' : '#fff' }">
            {{ item.content }}
          </p>
        </div>
      </div>
      <NInput
        v-model:value="inputValue"
        type="text"
        placeholder="请输入问题..."
      >
        <template #suffix>
          <NButton text>
            <template #icon>
              <NIcon size="20" :component="SendSharp" />
            </template>
          </NButton>
        </template>
      </NInput>
    </div>
  </div>
</template>

<style scoped lang="less">
.chat-container {
  box-shadow: rgba(31, 36, 39, 0.2) 0px 10px 15px -5px;
  min-height: 500px;
  background-color: #1f2427;
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
    background-color: rgb(24, 26, 27);
    border-color: rgb(48, 52, 54);
    color: rgb(232, 230, 227);
    width: fit-content;
    background: #fff;
    border-color: #fff;
    font-size: 14px;
    line-height: 1.5;
    color: #000;
    padding: 0.6em 1em;
    text-align: left;
    margin: 5px 0 0;
    border-radius: 6px;
    direction: ltr;
  }
}
</style>
