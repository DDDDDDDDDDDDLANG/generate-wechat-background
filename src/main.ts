import { createApp } from 'vue'
import dayjs from 'dayjs'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

const app = createApp(App)
resolveNaiveAndTailwindConflict()
app.mount('#app')

function resolveNaiveAndTailwindConflict() {
  // We use tailwind reset as Unocss reset
  // But some of reset style will replaced some of naive-ui style
  // To following the docs, we need to do this.
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}
