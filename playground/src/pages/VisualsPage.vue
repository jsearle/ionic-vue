<template>
  <ion-page>
    <HeaderComponent title="Elementos visuales" mainColor="primary" type="back" />
    <ion-content :fullscreen="true">
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
        <ion-item class="custom-item">
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
        <ion-item >
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
      
      <ion-button @click="visible = !visible">Cambiar</ion-button>
      <transition name="card">
        <ion-card class="ion-padding" v-if="visible">
          <div class="caja">
            Hola mundo
          </div>
        </ion-card>
      </transition>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
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
  IonModal,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonCard
} from "@ionic/vue";
import HeaderComponent from '../components/HeaderComponent.vue'

export default defineComponent({
  name: "VisualesPage",
  components: {
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
    IonModal,
    HeaderComponent,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonCard
  },
  data() {
    return {
      cargando: false,
      modalAbierta: false,
      visible: true
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
    },
    borrar(){
      this.visible = false
    }
  },
});
</script>
<style scoped>
.caja{
  height: 200px;
  background: var(--ion-color-primary);
  padding: 20px;
  color: var(--ion-color-light);
}
.custom-item{
  --background: #99aaaa;
  --padding-start: 4em;
}

.card-enter-from{
  opacity: 0;
  transform: translate(100px, 0);
}
.card-enter-to{
  opacity: 1;
  transform: translate(0, 0);
}
.card-enter-active{
  transition:1.4s ease-in-out;
}

.card-leave-from{
  opacity: 1;
  transform: translate(0, 0);
}
.card-leave-to{
  opacity: 0;
  transform: translate(-100px,0);
}
.card-leave-active{
  transition:0.4s ease-in-out;
}

</style>