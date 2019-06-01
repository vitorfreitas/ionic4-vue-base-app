<script lang="ts">
import Vue from "vue";
import { Pages } from "./../store/interfaces";
export default Vue.extend({
  name: "register",
  methods: {
    loginPage() {
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Login);
      this.$router.back();
    },
    register() {
      this.$store.commit("LOGIN", "iudhsadjsaijdijoijq2u1309dsadjaios");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Main);
      this.$router.push({
        name: "home"
      });
    }
  }
});
</script>

<template>
  <div class="signup">
    <img src="../assets/logo.png" alt="Logo do app" class="signup__logo">

    <form class="signup__form" padding @submit="register">
      <ion-item>
        <ion-label position="floating">Nome completo</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Endereço de email</ion-label>
        <ion-input type="email"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Senha</ion-label>
        <ion-input type="password"></ion-input>
      </ion-item>

      <ion-button type="submit" margin-top expand="full">Criar minha conta</ion-button>
      <ion-button type="button" @click="loginPage" expand="full" fill="clear">Já tenho uma conta</ion-button>
    </form>
  </div>
</template>

<style scoped>
.signup {
  padding: 20vw 0;
}

.signup__logo {
  width: 8rem;
  margin: 0 auto;
  display: block;
}
</style>
