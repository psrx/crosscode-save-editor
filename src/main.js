import { createApp } from 'vue'
import {
  Button,
  Upload,
  Tooltip,
  Select,
  Tabs,
  Card,
  InputNumber,
  message,
  Input,
  Empty,
  Switch,
  Radio,
  Table,
  Dropdown,
  Menu,
} from 'ant-design-vue'

import App from './App.vue'
import 'minireset.css'

const app = createApp(App)
// 全局挂载提醒函数
app.config.globalProperties.message = message

// 注册组件
app
  .use(Button)
  .use(Upload)
  .use(Table)
  .use(Tooltip)
  .use(Radio)
  .use(Select)
  .use(Tabs)
  .use(Card)
  .use(Input)
  .use(Empty)
  .use(Switch)
  .use(InputNumber)
  .use(Dropdown)
  .use(Menu)

app.mount('#app')
