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
          <ion-label>resultado:</ion-label>
        </ion-item>
      </ion-list>
      <ion-button expand="block" @click="takePhoto">Toma una foto</ion-button>
      <ion-card v-if="photoUrl != ''" class="ion-padding">
        <img :src="photoUrl" alt="">
      </ion-card>
      <ion-card class="ion-padding">
        <img v-if="platform == 'android'" :src="cam.getWebUrl('file:///data/user/0/io.ionic.starter/files/mifoto.jpg')"/>
        <p v-else>La previsualización de archivos previos no se encuentra disponible</p>
      </ion-card>
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
  IonButton,
  IonCard
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Capacitor } from "@capacitor/core";
import { useCamera } from "../composables/camera";
import {  Photo  } from '@capacitor/camera';

export default defineComponent({
  name: "CameraPage",
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
    IonButton,
    IonCard
  },
  data(){
    return {
      photoUrl:''
    }
  },
  methods:{
    async takePhoto(){
      const result:Photo = await this.cam.takePhoto();
      console.log(result);
      if (result.webPath){
        this.photoUrl = result.webPath;
        const saveResult = await this.cam.saveToDisk(result)
        console.log("Guadada:", saveResult)
      }
    }
  },
  setup() {
    const platform = Capacitor.getPlatform();
    const cam = useCamera()
    return {
      cam,
      platform
    };
  },
});
</script>
