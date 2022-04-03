import Vue from 'vue'
import App from './App.vue'

// 关闭vue生产提示
Vue.config.productionTip = false

// 引入vuex仓库
import store from 'vuex'

new Vue({
  render: h => h(App),
}).$mount('#app')
