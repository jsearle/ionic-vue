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
        <ion-item>
          <ion-label>Permisos notificaciones</ion-label>
          <ion-button @click="push.registerNotifications">Permisos</ion-button>
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
  IonMenuButton,
  IonButton
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Capacitor } from "@capacitor/core";
import {usePushNotifications} from "../composables/push";

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
    IonMenuButton,
    IonButton
  },
  setup() {
    console.log("setup");
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    const push = usePushNotifications();
    return {
      platform,
      native,
      push
    };
  },
});
</script>
