// 全局指令
import globalDirective from '@/directive'
// require 获取compoents下面的vue文件
const importFn = require.context('./components', true, /\.vue$/)
export default {
  install (app) {
    // app.components()
    importFn.keys().forEach(item => {
      // 导入组件 component组件
      const component = importFn(item).default
      // 注册全局组件
      app.component(component.name, component)
    })
    // 定义全局指令
    globalDirective.lazyImg(app)
  }
}
