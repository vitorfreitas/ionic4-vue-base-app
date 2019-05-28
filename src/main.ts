import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Vuex from "vuex";

// ionic imports
import IonicVue from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(IonicVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
