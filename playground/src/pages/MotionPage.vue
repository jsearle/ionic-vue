<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-menu-button></ion-menu-button></ion-buttons
        ><ion-title>Motion API</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-button @click="motion.startTracking" color="success" slot="start">Iniciar </ion-button>
          <ion-button @click="motion.stopTracking" color="danger" slot="end">Detener </ion-button>
        </ion-item>
        <ion-list-header><h2>Orientación</h2></ion-list-header>
        <ion-item>
          <ion-label>alpha: {{ (motion.data && motion.data.orientation)?motion.data.orientation.alpha : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>beta: {{ (motion.data && motion.data.orientation)?motion.data.orientation.beta : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>gamma: {{ (motion.data && motion.data.orientation)?motion.data.orientation.gamma : ''  }}</ion-label>
        </ion-item>
        <ion-list-header><h2>Aceleración</h2></ion-list-header>
        <ion-item>
          <ion-label>x: {{ (motion.data && motion.data.accel)?motion.data.accel.x : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>y: {{ (motion.data && motion.data.accel)?motion.data.accel.y : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>z: {{ (motion.data && motion.data.accel)?motion.data.accel.z : ''  }}</ion-label>
        </ion-item>
        <ion-list-header><h2>Gravedad</h2></ion-list-header>
        <ion-item>
          <ion-label>x: {{ (motion.data && motion.data.gravity)?motion.data.gravity.x : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>y: {{ (motion.data && motion.data.gravity)?motion.data.gravity.y : ''  }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>z: {{ (motion.data && motion.data.gravity)?motion.data.gravity.z : ''  }}</ion-label>
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
  IonListHeader,
  IonButton
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Capacitor } from "@capacitor/core";
import { useMotion } from "../composables/motion";

export default defineComponent({
  name: "MotionPage",
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
    IonListHeader,
    IonButton
  },
  methods:{
  },
  setup() {
    console.log("setup");
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    const motion = useMotion();
    return {
      platform,
      native,
      motion
    };
  },
});
</script>
