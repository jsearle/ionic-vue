<template>
    <ion-header>
      <ion-toolbar :color="mainColor">
        <ion-buttons slot="start">
          <ion-back-button v-if="type=='back'" default-href="/home"></ion-back-button>
          <ion-menu-button v-else></ion-menu-button>
        </ion-buttons>
      <ion-title>{{title}}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonMenuButton } from '@ionic/vue'

export default defineComponent({
  name: 'HeaderComponent',
  components: {
     IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonMenuButton
  },
  props:{
    title: String,
    type: {
      type: String,
      default: 'menu'
    },
    mainColor:{
      type: String,
      default: 'primary'
    }
  },
})
</script>
