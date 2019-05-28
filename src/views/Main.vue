<template>
  <ion-content>
    <router-view></router-view>
    <ion-fab v-if="AddButtonAppear" vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="goToNote">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-content>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "main_page",
  computed: {
    AddButtonAppear(): boolean {
      return !["note"].includes(this.$route.name as string);
    }
  },
  methods: {
    goToNote() {
      this.$router.push({
        name: "note"
      });
    }
  }
});
</script>
