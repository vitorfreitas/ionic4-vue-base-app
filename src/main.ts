import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Vuex from "vuex";

// ionic imports
import IonicVUe from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

// Necessário pra utilização de plugins do ionic
import "@angular/core";
import "@ionic-native/core";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(IonicVUe);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
