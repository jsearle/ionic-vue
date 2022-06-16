<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"
          ><ion-menu-button></ion-menu-button></ion-buttons
        ><ion-title>Mapa iframe + nativo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="ion-padding" v-show="map.isLoaded.value">
        <h2>Mapa reactivo</h2>
        <div ref="reactiveMap" id="map"></div>
      </ion-card>
      <ion-card class="ion-padding">
        <h2>Mapa incrustado por iFrame</h2>
        <iframe src="../assets/map.html" width="100%" height="300px" style="border:none;"></iframe>
      </ion-card>
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
import { useMaps } from "../composables/map";

export default defineComponent({
  name: "MapsPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton
  },
  mounted(){
    console.log("Creando mapa...");
  },
  watch:{
    'map.isLoaded.value'(newVal: any, oldVal: any){
      console.log("Mapa cargado!", newVal);
      this.map.createMap( this.$refs.reactiveMap )
    }
  },
  setup() {
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    const map = useMaps()
    return {
      platform,
      native,
      map
    };
  },
});
</script>
<style scoped>
#map {
  height: 400px;
  width: 100%;
}
</style>
