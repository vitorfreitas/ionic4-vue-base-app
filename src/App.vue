<script lang="ts">
import Vue from "vue";
import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import { Pages } from "./store/interfaces";

export default Vue.extend({
  components: {
    Main
  },
  methods: {
    goToHome(): void {
      this.$router.push({ name: "home" });
    }
  }
});
</script>


<template>
  <ion-app>
    <div id="nav">
      <ion-toolbar color="primary">
        <ion-buttons slot="secondary">
          <ion-button @click="goToHome">
            <ion-icon slot="icon-only" name="book"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>WPNote App</ion-title>
      </ion-toolbar>
    </div>
    <Main></Main>
  </ion-app>
</template>
