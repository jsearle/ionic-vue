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
          <ion-label>Presión: {{ press }}</ion-label>
          <ion-label>Lux: {{ light }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-button @click="init">Init</ion-button>
          <ion-button @click="getPressure">Presión</ion-button>
          <ion-button @click="getLight">Luz</ion-button>
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
import { DemoPlugin } from "demo-plugin";

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
  data(){
    return {
      press:0,
      light:0
    }
  }, 
  methods:{
    async getPressure(){
      const res = await DemoPlugin.getPressure();
      console.log(res)
      this.press = res.pressure;
      return res
    },
    async getLight(){
      const res = await DemoPlugin.getLight();
      console.log(res)
      this.light = res.light;
      return res
    },
    async init(){
      await DemoPlugin.initPlugin();
    },
  }, 
  setup() {
    console.log("setup");
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    return {
      platform,
      native
    };
  },
});
</script>
