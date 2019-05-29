<template>
  <div>OMAE WA</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Pages } from "@/store/interfaces";

export default Vue.extend({
  beforeMount() {
    this.$store.commit("CHANGE_CURRENT_PAGE", Pages.Main);
  }
});
</script>

