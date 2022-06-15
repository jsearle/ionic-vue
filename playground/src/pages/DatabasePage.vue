<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>SQLite</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>
          <ion-button @click="getDatabaseUsers" size="default">Llamar a la Base de datos</ion-button>
        </ion-item>
        <ion-item>
          <ion-button @click="resetDatabse" color="danger" size="small">Resetear DB</ion-button>
        </ion-item>
        <ion-item v-for="user in users" :key="user.id">
          <ion-label>
            <h2>{{ user.name }}</h2>
            <h3>{{ user.age }}</h3>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-card>
        <ion-card-content>
          <ion-item>
            <ion-label>Nombre:</ion-label>
            <ion-input type="text" v-model="userName"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Edad:</ion-label>
            <ion-input type="text" v-model="userAge"></ion-input>
          </ion-item>
          <ion-button @click="insert" color="secondary" expand="block">Crear nuevo usuario</ion-button>
        </ion-card-content>
      </ion-card>
     <ion-toast
        :is-open="showToast"
        color="danger"
        position="bottom"
        :message="'Usuario creado. '+ database.lastMessage.value"
        :duration="5000"
     ></ion-toast>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useDatabase } from "../composables/database";
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
  
  IonLabel,
  IonInput,
  IonCardContent, 
  IonCard, IonToast
} from "@ionic/vue";

export default defineComponent({
  name: "DatabasePage",
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
    
    IonLabel,
    IonInput,
    IonCardContent, 
    IonCard, IonToast
  },
  data() {
    return {
      users: [] as any[],
      userName: '',
      userAge: '',
      showToast: false
    };
  },
  methods: {
    async getDatabaseUsers() {
      const users = await this.database.getDbUsers()
      console.log(users)
      this.users = users;
    },
    async resetDatabse() {
      this.database.initDb()
      //this.users = results.data;
    },

    async insert() {
      if (isNaN(+this.userAge)){
        alert("Inserta una edad correcta")
        return
      }
      await this.database.insertDbUser(this.userName, +this.userAge)
      this.userName = ''
      this.userAge = ''
      this.showToast = true
      this.getDatabaseUsers()
      //this.users = results.data;
    }
  },
  setup(){
    const database = useDatabase()
    return {
      database
    }
  }
});
</script>
