<script lang="ts">
import Vue from "vue";
import { Pages } from "@/store/interfaces";
export default Vue.extend({
  data() {
    return {};
  },
  methods: {
    logar() {
      console.log("LOGIN");
      this.$store.commit("LOGIN", "idjsaoojsfçkopaifjasdojfisaofijsdo");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Main);
    },
    registerPage() {
      console.log("REGISTER");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Register);
    }
  }
});
</script>

<template>
  <ion-grid>
    <ion-row justify-content-center>
      <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
        <div text-center>
          <h4>Login</h4>
        </div>
        <div padding>
          <ion-item>
            <ion-input type="email" placeholder="Email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="password" placeholder="Senha"></ion-input>
          </ion-item>
        </div>

        <div padding>
          <ion-button size="large" @click="logar()" expand="block">Entrar</ion-button>
        </div>

        <div padding>
          <a @click="registerPage()">Registrar</a>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>