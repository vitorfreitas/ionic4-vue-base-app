<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "register"
});
</script>

<template>
  <ion-grid>
    <ion-row justify-content-center>
      <ion-col align-self-center size-md="6" size-lg="5" size-xs="12">
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
          <ion-button size="large" href="/touchid" expand="block">Registrar</ion-button>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>