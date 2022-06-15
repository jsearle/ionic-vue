<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>APIs</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-button @click="getUsers">Llamar a la API</ion-button>
        </ion-item>
        <ion-item v-for="user in users" :key="user.id">
          <ion-avatar slot="start">
            <ion-img :src="user.avatar" />
          </ion-avatar>
          <ion-label>
            <h2>{{ user.first_name }} {{ user.last_name }}</h2>
            <h3>{{ user.email }}</h3>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonList,
  IonItem,
  IonImg,
  IonAvatar,
  IonLabel
} from "@ionic/vue";

export default defineComponent({
  name: "ApisPage",
  components: {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonList,
    IonItem,
    IonImg,
    IonAvatar,
    IonLabel
  },
  data() {
    return {
      users: [] as any[],
    };
  },
  methods: {
    async getUsers() {
      // https://reqres.in/api/users
      const results = await fetch("https://reqres.in/api/users").then(
        (response) => response.json()
      );
      //console.log(results);
      this.users = results.data;
    },
  },
});
</script>
