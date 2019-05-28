<script lang="ts">
import Vue from "vue";
import { Pages } from "@/store/interfaces";
export default Vue.extend({
  data() {
    return {};
  },
  props: {
    timeout: { type: Number, default: 1000 }
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
    },

    //
    async presentLoading() {
      await this.$ionic.loadingController
        .create({
          message: "Autenticando Usuário...",
          duration: this.timeout
        })
        .then(async l => {
          setTimeout(() => {
            this.logar();
            l.dismiss();
          }, this.timeout);
          await l.present();
        });
    }
  }
});
</script>

<template>
  <ion-grid>
    <ion-row style="display: flex; justify-content: center;height: 100%;">
      <ion-col align-self-center size="15">
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
          <ion-button @click="presentLoading" expand="full">Entrar</ion-button>
        </div>

        <div padding>
          <a @click="registerPage()">Registrar</a>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>