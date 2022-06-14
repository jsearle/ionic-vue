<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"><ion-back-button default-href="/home"></ion-back-button></ion-buttons>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-avatar slot="start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg"
              alt=""
            />
          </ion-avatar>
          <ion-label>Nombre </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg"
              alt=""
            />
          </ion-thumbnail>
          <ion-label>Nombre </ion-label>
        </ion-item>
        <ion-item>
          <ion-thumbnail slot="start">
            <ion-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg"
              alt=""
            />
          </ion-thumbnail>
          <ion-label>Nombre </ion-label>
        </ion-item>
        <ion-item>
          <ion-button @click="iniciarCarga" expand="block"
            >Inicar carga</ion-button
          >
          <ion-loading
            :is-open="cargando"
            message="Cargando elementos..."
            :backdrop-dismiss="true"
            @didDismiss="cargando = false"
          ></ion-loading>
        </ion-item>
        <ion-item>
          <ion-progress-bar :value="0.4" :buffer="0.8"></ion-progress-bar>
        </ion-item>
        <ion-item>
          <ion-progress-bar :value="0.9" color="danger"></ion-progress-bar>
        </ion-item>
        <ion-item>
          <ion-spinner name="crescent"></ion-spinner>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonThumbnail,
  IonImg,
  IonButton,
  IonLoading,
  IonProgressBar,
  IonSpinner,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";

export default defineComponent({
  name: "Tab2Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonThumbnail,
    IonImg,
    IonButton,
    IonLoading,
    IonProgressBar,
    IonSpinner,
    IonButtons,
    IonBackButton,
  },
  data() {
    return {
      cargando: false,
    };
  },
  methods: {
    iniciarCarga() {
      this.cargando = true;
      setTimeout(() => {
        this.cargando = false;
      }, 3000);
    },
  },
});
</script>
