import { createApp } from 'vue'
// 根组件
import App from './App.vue'
// 路由
import router from './router'
// 全局数据状态管理
import store from './store'
// 全局插件,注册组件懒加载 图片懒加载
import UI from './library/index'

// 阿里巴巴字体图标
import './assets/styles/iconfont.scss'
// 初始化样式
import 'normalize.css'
// 公用样式
import './assets/styles/common.scss'
// 全局动画
import './assets/styles/animated.scss'
createApp(App).use(store).use(router).use(UI).mount('#app')
