<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab1"></ion-back-button>
        </ion-buttons>
        <ion-title>Tercera tab</ion-title>
        <ion-buttons slot="end">
          <ion-icon :icon="alertCircle"></ion-icon>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-button id="popover">Abrir popover</ion-button>
          <ion-popover trigger="popover" dismiss-on-select>
            <ion-content>
              <ion-list>
                <ion-item>
                  <ion-label>Opción 1</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label>Opción 2</ion-label>
                </ion-item>
                <ion-item @click="abrirAlerta">
                  <ion-label>Opción 3</ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-popover>
        </ion-item>
        <ion-action-sheet
          :is-open="alertaAbierta"
          header="Cabecera del action sheet"
          :buttons="buttons"
        >
        </ion-action-sheet>
        <ion-button @click="openIonAlert" expand="block"
          >Abrir alerta</ion-button
        >
      </ion-list>

      <ion-toast
        :is-open="avisoAbierto"
        message="Notificación recibida!"
        :position="miPosicion"
        :duration="2000"
        @didDismiss="avisoAbierto = false"
      >
      </ion-toast>
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
  IonButtons,
  IonBackButton,
  IonIcon,
  IonList,
  IonItem,
  IonPopover,
  IonButton,
  IonLabel,
  IonActionSheet,
  alertController,
  IonToast
} from "@ionic/vue";
import { alertCircle } from "ionicons/icons";

export default defineComponent({
  name: "Tab3Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonList,
    IonItem,
    IonPopover,
    IonButton,
    IonLabel,
    IonActionSheet,
    IonToast
  },
  data() {
    return {
      alertaAbierta: false,
      avisoAbierto: false,
      miPosicion: 'top',
      buttons: [
        { text: "Opción 1", role: "destructive" },
        { text: "Opción 2" },
        {
          text: "Opción 3",
          handler: () => {
            console.log("33333");
          },
        },
        { text: "Cancelar", role: "cancel" },
      ],
      buttonsAlerta: [
        {
          text: "Borrar",
          role: "destructive",
          handler: ()=> {this.activarToast()}
        },
        { text: "Cancelar", role: "cancel" },
      ],
    };
  },
  methods: {
    abrirAlerta() {
      this.alertaAbierta = true;
    },
    async openIonAlert() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Alert",
        subHeader: "Subtitle",
        message: "This is an alert message.",
        buttons: this.buttonsAlerta,
      });
      await alert.present();
    },
    activarToast() {
      console.log("Abriendo toast...")
      this.avisoAbierto = true;
    },
  },
  setup() {
    return {
      alertCircle,
    };
  },
});
</script>
