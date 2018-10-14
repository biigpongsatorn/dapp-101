import Vue from 'vue'
import App from './App.vue'
import Web3 from 'web3'

// Initial web3.js
let web3 = {}
if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  const httpProvider = new Web3.providers.HttpProvider('https://mainnet.infura.io/iT7hWgNoY7XT2BXIVAhq')
  web3 = new Web3(httpProvider)
}

Vue.prototype.$web3 = web3
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
