<script lang="ts">
import Vue from "vue";
import { Pages } from "./../store/interfaces";
export default Vue.extend({
  name: "register",
  methods: {
    loginPage() {
      console.log("REGISTER");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Login);
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
  <ion-grid style="display: flex; justify-content: center;height: 100%;">
    <ion-row>
      <ion-col align-self-center size-xs="12">
        <div text-center>
          <h4>Registrar</h4>
        </div>
        <div padding>
          <ion-item>
            <ion-input type="text" placeholder="Name"></ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="email" placeholder="Email"></ion-input>
          </ion-item>

          <ion-item>
            <ion-input type="password" placeholder="Senha"></ion-input>
          </ion-item>
        </div>

        <div padding>
          <ion-button @click="register" expand="full">Registrar</ion-button>
        </div>

        <div padding>
          <a @click="loginPage">Já tenho uma conta.</a>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>