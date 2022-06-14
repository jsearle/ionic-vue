<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Página 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="ion-padding">
        <h1>Este es el contenido de la otra página</h1>
        <ion-button expand="block" @click="router.push('/home')" >Volver</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {IonHeader, IonContent, IonPage, IonToolbar, IonTitle, IonButton, IonBackButton} from '@ionic/vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  name:'SecondPage',
  components:{
    IonHeader, IonContent, IonPage, IonToolbar, IonTitle, IonButton, IonBackButton
  },
  setup(){
    const router = useRouter();
    return {
      router
    }
  }
})
</script>
