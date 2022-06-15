<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Storage</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Storage</ion-title>
        </ion-toolbar>
      </ion-header>
      <div v-if="uiBlock">
        <ion-spinner></ion-spinner>
      </div>
      <div v-else>
        <ion-list>
          <ion-item>
            <ion-label>Datos a guardar</ion-label>
            <ion-input type="text" v-model="dato1"></ion-input>
          </ion-item>
          <ion-item>
            <ion-button @click="saveToStorage" color="danger"
              >Guardar en el storage</ion-button
            >
          </ion-item>
          <ion-item>
            <ion-button @click="obtenerDatosStorage" color="success"
              >Recibir datos del storage</ion-button
            >
          </ion-item>
        </ion-list>
        <ion-card>
          <ion-card-content>
            <p>Datos en la variable de estado: {{ dato1 }}</p>
            <p>Datos en la key de storage: {{ datoRecibido }}</p>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-content>
            <ion-button @click="datosGlobales">Cargar datos globales</ion-button>
            <p>Información del Composable useStorage: {{ storage }}</p>


            <ion-button @click="guardarGlobales">Almacenar datos globales</ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Storage } from "@capacitor/storage";
import { useStorage } from '../composables/storage';

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonButton,
  IonInput,
  IonCard,
  IonCardContent,
  IonSpinner,
} from "@ionic/vue";

export default defineComponent({
  name: "StoragePage",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonButton,
    IonInput,
    IonCard,
    IonCardContent,
    IonSpinner,
  },
  data() {
    return {
      dato1: "",
      datoRecibido: "",
      uiBlock: false,
    };
  },
  methods: {
    saveToStorage() {
      Storage.set({ key: "datos1", value: this.dato1 });
    },
    async obtenerDatosStorage() {
      this.uiBlock = true;
      const resultado = await Storage.get({ key: "datos1" });
      setTimeout(()=>{
        this.datoRecibido = resultado.value as string;
        this.uiBlock = false;
      }, 1000)
    },
    datosGlobales(){
      this.storage.getDatos()
    },
    guardarGlobales(){
      this.storage.setDatos(this.dato1, 'texto 2')
    }
  },
  mounted() {
    this.obtenerDatosStorage();
    this.datosGlobales();
  },
  setup(){
    const storage = useStorage();
    return {
      storage
    }
  }
});
</script>
