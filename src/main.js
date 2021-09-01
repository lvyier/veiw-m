import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局样式文件
import './styles/index.less'
// 动态加载设置REM基准值
import 'amfe-flexible'
// 引入vant相关文件
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
