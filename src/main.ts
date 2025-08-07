import { createApp, Plugin } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import * as Cesium from 'cesium'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'


//createApp(App).use(router).use(ArcoVue).use(cesium).mount("#app");
// vue warning 错误是因为 Cesium 不是一个标准的 Vue 插件。Vue 的 .use() 方法需要一个符合 Plugin 接口的对象，而直接使用 Cesium 是不正确的。
// 将 Cesium 添加到全局属性中
// app.config.globalProperties.$cesium = Cesium;
// 但这种太麻烦
// SO创建 Cesium 插件
const cesium: Plugin = {
  install(app) {
    // 这里可以为空，因为我们只需要满足 Plugin 接口
    app.config.globalProperties.$cesium = Cesium
  }
}

createApp(App).use(router).use(ArcoVue).use(cesium).mount('#app')
