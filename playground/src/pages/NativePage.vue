<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-menu-button></ion-menu-button></ion-buttons
        ><ion-title>Interacción Capa Nativa (Sensores)</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-label>Estado: {{ estado }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Presión: {{ presion }}</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Luz: {{ luz }}</ion-label>
        </ion-item>
        <ion-item lines="none">
          <ion-button slot="start" @click="initSensors">Inicializar</ion-button>
          <ion-button slot="start" @click="getLight">Luz</ion-button>
          <ion-button slot="end" @click="getPressure">Presión</ion-button>
        </ion-item>
        <ion-item lines="none">
          <ion-button slot="start" @click="startTracking" size="small">Seguimiento</ion-button>
          <ion-button slot="end"  @click="stopTracking" size="small">parar seguimiento</ion-button>
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

import { Sensores } from "sensores";

export default defineComponent({
  name: "NativePage",
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
      luz: 0,
      presion: 0,
      estado: '-',
      intervalo: null as any,
    }
  },
  methods:{
    async initSensors(){
      const respuesta = await Sensores.initSensors();
      console.log(respuesta)
      this.estado = respuesta.result
    },
    async getLight(){
      const respuesta = await Sensores.getLight();
      console.log(respuesta)
      this.luz = respuesta.value
    },
    async getPressure(){
      const respuesta = await Sensores.getPressure();
      console.log(respuesta)
      this.presion = respuesta.value
    },
    startTracking(){
      clearInterval(this.intervalo)
      this.intervalo = setInterval(() => {
       this.getPressure()
       this.getLight()
      }, 300);
    },
    stopTracking(){
      clearInterval(this.intervalo)
    }
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
