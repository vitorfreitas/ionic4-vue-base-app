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
    <div style="color: #ccc">
      Icons made by
      <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
      <br>from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      is licensed by
      <br>
      <a
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
      >CC 3.0 BY</a>
    </div>
  </ion-app>
</template>
