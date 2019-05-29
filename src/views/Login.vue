<script lang="ts">
import Vue from "vue";
import { Pages } from "@/store/interfaces";
export default Vue.extend({
  data() {
    return {
      timeout: 1000
    };
  },
  methods: {
    logar() {
      console.log("LOGIN");
      this.$store.commit("LOGIN", "idjsaoojsfçkopaifjasdojfisaofijsdo");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Main);
      this.$router.push({
        name: "home"
      });
    },
    registerPage() {
      console.log("REGISTER");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Register);
      this.$router.push({
        name: "register"
      });
    },

    // Loading de Autenticação
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
  <ion-grid style="display: flex; justify-content: center;height: 100%;">
    <ion-row>
      <ion-col align-self-center size="12">
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
          <a @click="registerPage">Registrar</a>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>