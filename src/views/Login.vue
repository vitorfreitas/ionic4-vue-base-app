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
  <div class="login">
    <img src="../assets/logo.png" alt="Logo do app" class="login__logo">

    <form class="login__form" padding @submit="presentLoading">
      <ion-item>
        <ion-label position="floating">Endereço de email</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>

      <ion-button type="submit" margin-top expand="full">Entrar</ion-button>
      <ion-button type="button" @click="registerPage" expand="full" fill="clear">Não tenho conta</ion-button>
    </form>
  </div>
</template>

<style scoped>
.login {
  padding: 25vw 0;
}

.login__logo {
  width: 8rem;
  margin: 0 auto;
  display: block;
}
</style>
