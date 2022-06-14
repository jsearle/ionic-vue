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
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        Prueba...
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonBackButton, IonIcon } from '@ionic/vue';
import { alertCircle } from 'ionicons/icons';


export default defineComponent({
  name: 'Tab3Page',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonFooter, IonButtons, IonBackButton, IonIcon },
  setup(){
    return {
      alertCircle
    }
  }
});
</script>
