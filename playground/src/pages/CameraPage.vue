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
      <ion-card v-if="photoUrl != ''">
        <img :src="photoUrl" alt="">
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
      }
    }
  },
  setup() {
    const cam = useCamera()
    return {
      cam
    };
  },
});
</script>
