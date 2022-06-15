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
        <ion-item>
          <ion-button @click="abrirModal">Abrir modal</ion-button>
        </ion-item>
      </ion-list>

      <ion-modal
        :is-open="modalAbierta"
        :breakpoints="[0.3, 1]"
        :initialBreakpoint="0.3"
        :can-dismiss="true"
        :show-backdrop="true"
      >
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="end">
              <ion-button @click="cerrarModal">Cerrar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-item>
            <ion-label>Este es el contenido de la modal</ion-label>
          </ion-item>
        </ion-content>
      </ion-modal>


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
  IonModal
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
    IonModal
  },
  data() {
    return {
      cargando: false,
      modalAbierta: false
    };
  },
  methods: {
    iniciarCarga() {
      this.cargando = true;
      setTimeout(() => {
        this.cargando = false;
      }, 3000);
    },
    abrirModal(){
      this.modalAbierta = true;
    },
    cerrarModal(){
      this.modalAbierta = false;
    }
  },
});
</script>
