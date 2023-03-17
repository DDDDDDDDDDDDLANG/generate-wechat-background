<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { NIcon, NInput, NScrollbar } from 'naive-ui'
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
const isEmptyInput = computed(() => inputValue.value.trim() === '')
const scrollRef = ref()
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

function handleInput() {
  if (isEmptyInput.value)
    return
  chatData.value.push({ role: 'user', content: inputValue.value.trim() })
  inputValue.value = ''
  nextTick(() => {
    const distance = scrollRef.value.scrollbarInstRef.contentRef.clientHeight
    scrollRef.value.scrollTo({ top: distance })
  })
}
</script>

<template>
  <div class="h-full w-full flex justify-center items-center">
    <div class="w-800px h-4/5 chat-container flex">
      <div class="flex justify-center items-center h-[60px] bg-[#1A1E24] border-rd-[6px]">
        <span>Chat GPT</span>
      </div>
      <NScrollbar ref="scrollRef" class="chat-area p-[10px]">
        <div
          v-for="(item, index) in chatData"
          :key="index"
          class="chat-message"
          :style="{
            flexDirection: item.role === 'user' ? 'row-reverse' : 'row',
          }"
        >
          <div class="avatar">
            <img :src="handleRole(item.role).avatar">
          </div>
          <div class="message-info flex flex-col">
            <div
              class="flex font-[12px] text-[#535554]"
              :style="{
                justifyContent:
                  item.role === 'user' ? 'flex-end' : 'flex-start',
              }"
            >
              {{ handleRole(item.role).name }}
            </div>
            <p
              class="bubble"
              :style="{ background: item.role === 'user' ? '#9CE553' : '#fff' }"
            >
              {{ item.content }}
            </p>
          </div>
        </div>
      </NScrollbar>
      <div class="px-[20px] h-[80px] mb-[5px]">
        <NInput
          v-model:value="inputValue"
          type="text"
          placeholder="请输入问题..."
          clearable
          @keyup.enter="handleInput"
        >
          <template #prefix>
            <NIcon
              size="20"
              :component="SendSharp"
              :color="isEmptyInput ? '#eee' : '#72ff72'"
            />
          </template>
        </NInput>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.chat-container {
  box-shadow: rgba(31, 36, 39, 0.2) 0px 10px 15px -5px;
  min-height: 500px;
  background: #0d1117;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
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
    line-height: 1.5;
    color: #000;
    padding: 0.6em 1em;
    text-align: left;
    margin: 5px 0 0;
    border-radius: 6px;
    direction: ltr;
    font-size: 14px;
    word-break: break-all;
  }
}
.chat-area {
  max-height: calc(100%-80px);
}
</style>
