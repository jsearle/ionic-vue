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
      <ion-card class="ion-padding" v-show="mapComp.isLoaded.value">
        <h2>Mapa reactivo</h2>
        <ion-button @click="() => createMarker({lat: 40.352784 + Math.random()*0.05, lng: -3.70061 + Math.random()*0.05})">Crear marcador</ion-button>
        <ion-button @click="() => goToLeganes()">Leganés</ion-button>
        <div ref="reactiveMap" id="map"></div>
      </ion-card>
      <ion-card class="ion-padding">
        <h2>Mapa incrustado por iFrame</h2>
        <iframe src="../assets/map.html" width="100%" height="300px" style="border:none;"></iframe>
      </ion-card>
      {{mapComp.map}}
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
  IonMenuButton,
  IonButton,
  IonCard
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Capacitor } from "@capacitor/core";
import { useMaps } from "../composables/map";
import { useGeo } from "../composables/geo";

export default defineComponent({
  name: "MapsPage",
  components: {
    IonPage,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonCard
  },
  data(){
    return {
      markers: [] as any[]
    }
  },
  watch:{
    'mapComp.isLoaded.value'(newVal: any, oldVal: any){
      console.log("Creando mapa...");
      if (newVal == true){
        this.mapComp.createMap( this.$refs.reactiveMap, {lat: 40.36, lng: -3.70}, 12 )
      }
    },
    'geo.locationData.pos.coords'(newVal: any, oldVal: any){
        this.createMyMarker()
    }
  },
  methods:{
    createMarker(position:any){
      this.mapComp.createMarker(position)
    },
    goToLeganes(){
      this.mapComp.mapCenter.coords = {lat: 40.31, lng: -3.75};
      this.mapComp.mapCenter.zoom = 13;
    },
    setMyPos(position:any){
      this.mapComp.myPosition(position)
    },
    createMyMarker(){
      if (this.mapComp.isLoaded){
        const newVal = this.geo.locationData.pos.coords
        const newPos = {lat: newVal.latitude, lng:newVal.longitude}
        this.setMyPos(newPos)
        this.mapComp.mapCenter.coords = newPos;
      } else {
        setTimeout(this.createMyMarker, 1000)
      }
    }
  },
  mounted(){
    this.geo.getPosition()
  },
  setup() {
    const platform = Capacitor.getPlatform();
    const native = Capacitor.isNativePlatform();
    const mapComp = useMaps()
    const geo = useGeo();
    return {
      platform,
      native,
      mapComp,
      geo
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
