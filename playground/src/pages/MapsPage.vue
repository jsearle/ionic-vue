<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-menu-button></ion-menu-button></ion-buttons
        ><ion-title>Mapa iframe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <iframe src="../assets/map.html" width="100%" height="500px" style="border:none;"></iframe>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
/*
IonLabel,
  IonList,
  IonItem,
  */
import {
  IonPage,
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
