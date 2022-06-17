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
        <transition-group name="user">
          <ion-item v-for="(user, index) in users" :key="user.id" :style="{transitionDelay: (index/7)+'s'}">
            <ion-avatar slot="start">
              <ion-img :src="user.avatar" />
            </ion-avatar>
            <ion-label>
              <h2>{{ user.first_name }} {{ user.last_name }}</h2>
              <h3>{{ user.email }}</h3>
            </ion-label>
          </ion-item>
        </transition-group>
      </ion-list>
      <ion-card>
        <ion-card-content>
          <p><strong>Cargando:</strong> {{ API.isLoadingData }}</p>
          <p><strong>Información del Composable useAPI:</strong> {{ API.usersData }}</p>
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
          <ion-item>
            <ion-label>
              <ion-text color="medium">*La clave es: cityslicka</ion-text>
            </ion-label>
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
  IonLabel,
  IonCardContent,
  IonCard,
  IonText,
  IonInput,
} from "@ionic/vue";
import {useStorage} from '../composables/storage'

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
    IonLabel,
    IonCardContent,
    IonCard,
    IonText,
    IonInput,
  },
  data() {
    return {
      users: [] as any[],
      userPassword: "",
      userEmail: "eve.holt@reqres.in",
    };
  },
  methods: {
    async getUsers() {
      // https://reqres.in/api/users
      const results = await fetch("https://reqres.in/api/users")
        .then((response) => {
          try {
            const res = response.json();
            return res;
          } catch (e) {
            console.log(e);
            return [];
          }
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
      //console.log(results);
      this.users = results.data;
    },
    loadAPIUsers() {
      this.API.fetchUsers();
    },
    async login() {
      const token = await this.API.doLogin(this.userEmail, this.userPassword);
      this.storage.setToken(token);
    },
  },
  watch: {
    "API.usersData.users": {
      handler(newValue) {
        this.users = newValue;
      },
    },
  },
  setup() {

    const storage = useStorage()
    const API = useAPI();
    return {
      API,
      storage
    };
  },
});
</script>
<style scoped>

.user-enter-from{
  opacity: 0;
  transform: translate(100px, 0);
}
.user-enter-to{
  opacity: 1;
  transform: translate(0, 0);
}
.user-enter-active{
  transition:0.4s ease-in-out;
}

.user-leave-from{
  opacity: 1;
  transform: translate(0, 0);
}
.user-leave-to{
  opacity: 0;
  transform: translate(-100px,0);
}
.user-leave-active{
  transition:0.4s ease-in-out;
}
</style>