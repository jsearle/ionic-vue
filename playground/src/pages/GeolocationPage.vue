<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-menu-button></ion-menu-button></ion-buttons
        ><ion-title>Geolocalización</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Latitud: {{ (geo.locationData.pos)?geo.locationData.pos.coords.latitude : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Longitud: {{ (geo.locationData.pos)?geo.locationData.pos.coords.longitude : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Rumbo: {{ (geo.locationData.pos)?geo.locationData.pos.coords.heading : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Altitud: {{ (geo.locationData.pos)?geo.locationData.pos.coords.altitude : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-button @click="geo.getPosition">Obtener posición</ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="geo.startTracking">Iniciar seguimiento</ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="geo.stopTracking">Detener seguimiento</ion-button>
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
import { useGeo } from "../composables/geo";

export default defineComponent({
  name: "GeolocationPage",
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
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    const geo = useGeo();
    return {
      platform,
      native,
      geo
    };
  },
});
</script>
