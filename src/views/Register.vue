<script lang="ts">
import Vue from "vue";
import { Pages } from "./../store/interfaces";
export default Vue.extend({
  name: "register",
  methods: {
    loginPage() {
      console.log("REGISTER");
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Login);
    }
  }
});
</script>

<template>
  <ion-grid>
    <ion-row style="display: flex; justify-content: center;height: 100%;">
      <ion-col align-self-center size-xs="15">
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
          <ion-button expand="full">Registrar</ion-button>
        </div>

        <div padding>
          <a @click="loginPage()">Já tenho uma conta.</a>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>