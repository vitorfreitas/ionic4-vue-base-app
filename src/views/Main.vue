<template>
  <div class="main_page">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "main_page"
});
</script>
