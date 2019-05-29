<script lang="ts">
import Vue from "vue";
import { Pages } from "./store/interfaces";

export default Vue.extend({
  computed: {
    currentPage(): any {
      return this.$store.state.CurrentPage;
    }
  }
});
</script>

<template>
  <ion-app>
    <div id="nav" v-if="currentPage==='main'">
      <ion-toolbar color="primary">
        <ion-buttons slot="secondary">
          <ion-button>
            <ion-icon slot="icon-only" name="logo-ionic"></ion-icon>
          </ion-button>
        </ion-buttons>
        <ion-title>Base App</ion-title>
      </ion-toolbar>
    </div>
    <ion-content>
      <router-view></router-view>
    </ion-content>
  </ion-app>
</template>
