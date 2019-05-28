<script lang="ts">
import Vue from "vue";
import Main from "@/views/Main.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import MainVue from "@/views/Main.vue";
import { Pages } from "./store/interfaces";

export default Vue.extend({
  components: {
    Main,
    Login,
    Register
  },
  data() {
    return {};
  },
  computed: {
    user(): any {
      return this.$store.state.User;
    },
    currentPage(): string {
      return this.$store.state.CurrentPage;
    },
    token(): string {
      return this.$store.state.Token;
    }
  },
  beforeMount() {
    if (this.hasToken()) {
      this.getUser();
      this.goToMainPage();
    }
  },
  methods: {
    hasToken: () =>
      localStorage.getItem("AppTabToken") != null ? true : false,
    getUser() {
      // get user from server, sending token
      const User = {
        name: "Wesley Paulo",
        email: "wesley@email.com"
      };

      localStorage.setItem("AppTabUser", JSON.stringify(User));
    },
    goToRegisterPage() {
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Register);
    },
    goToMainPage() {
      this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Main);
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
        <ion-title>Gamarra Base APP</ion-title>
      </ion-toolbar>
    </div>
    <Login v-if="currentPage==='login'"></Login>
    <Register v-else-if="currentPage==='register'"></Register>
    <Main v-else></Main>
  </ion-app>
</template>
