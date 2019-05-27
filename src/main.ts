import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Vuex from "vuex";

// ionic imports
import IonicVUe from "@ionic/vue";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import "@angular/core";
import "@ionic-native/core";
import { Geolocation } from "@ionic-native/geolocation/ngx";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(IonicVUe);

new Vue({
  router,
  store,
  beforeMount() {
    new Geolocation()
      .getCurrentPosition()
      .then(resp => {
        console.log(
          `Localização: ${resp.coords.latitude}, ${resp.coords.longitude}`
        );
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  },
  render: h => h(App)
}).$mount("#app");
