<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-menu-button></ion-menu-button></ion-buttons
        ><ion-title>Capacitor</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Platform: {{ platform }}</ion-label>
          <p v-if="platform == 'android'">Estás en Android</p>
        </ion-item>
        <ion-item>
          <ion-label>Native: {{ native }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonLabel,
  IonList,
  IonItem,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Capacitor } from "@capacitor/core";

export default defineComponent({
  name: "CapacitorPage",
  components: {
    IonPage,
    IonLabel,
    IonList,
    IonItem,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton
  },
  setup() {
    console.log("setup");
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    return {
      platform,
      native,
    };
  },
});
</script>
