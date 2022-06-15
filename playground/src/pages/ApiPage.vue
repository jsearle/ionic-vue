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
      <ion-card>
        <ion-card-content>
          <p>Información del Composable useAPI: {{ API.usersData }}</p>
          <p>Cargando: {{ API.isLoadingData }}</p>
          <ion-button @click="loadAPIUsers">Cargar via useAPI</ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-label>Email:</ion-label>
            <ion-input type="email" v-model="userEmail"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Password:</ion-label>
            <ion-input type="password" v-model="userPassword"></ion-input>
          </ion-item>

          <p>User token: {{ API.userToken }}</p>
          <ion-button @click="login">Acceder</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useAPI } from "../composables/api";
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
  IonLabel, IonCardContent, IonCard,
  IonInput
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
    IonLabel, IonCardContent, IonCard,
    IonInput
  },
  data() {
    return {
      users: [] as any[],
      userPassword:'',
      userEmail: 'eve.holt@reqres.in'
    };
  },
  methods: {
    async getUsers() {
      // https://reqres.in/api/users
      const results = await fetch("https://reqres.in/api/users").then(
        (response) => {
          try{
            const res = response.json()
            return res
          }catch(e){
            console.log(e)
            return []
          }
        }
      ).catch((error) => {
        console.error(error);
        return []
      });
      //console.log(results);
      this.users = results.data;
    },
    loadAPIUsers(){
      this.API.fetchUsers()
    },
    login(){
      this.API.doLogin(this.userEmail, this.userPassword)
    }
  },
  watch:{
    'API.usersData.users': {
      handler(newValue){
        this.users = newValue
      }
    }
  },
  setup(){
    const API = useAPI()
    return {
      API
    }
  }
});
</script>
