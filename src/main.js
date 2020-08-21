import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/config/rem'

// 是否显示生产环境浏览器端的提示文字
Vue.config.productionTip = false
// 如果是开发环境，就导入模拟数据
// if(process.env.NODE_ENV == 'development') require('@/api/mock')
require('@/api/mock')

//1/测试/开发环境下导入
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

//2/按需导入

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
