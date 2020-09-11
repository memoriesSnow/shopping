import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import zimoBtn from 'god-zimo-ui';
import 'god-zimo-ui/dist/god-zimo-ui.css';


import { 
  NavBar,
  Tabbar,
  TabbarItem,
  PullRefresh,
  Sticky,
  Card,
  Checkbox,
  CheckboxGroup,
  Button,
  Stepper,
  SubmitBar 
} from 'vant';

Vue.config.productionTip = false


Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(PullRefresh)
Vue.use(Sticky)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Button)
Vue.use(Stepper)
Vue.use(SubmitBar)
Vue.use(zimoBtn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
