<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Blank</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <div id="container">
        <ion-card>
          <ion-card-header>
            <ion-card-title> Buttons </ion-card-title>
            <ion-card-subtitle> Tipos de botones </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <p>
              <ion-button @click="alerta" size="small" color=""
                >Pulsa aquí</ion-button
              >
              <ion-button @click="alerta">Pulsa aquí</ion-button>
              <ion-button @click="alerta" size="large">Pulsa aquí</ion-button>
            </p>
            <p>
              <ion-button @click="alerta" expand="block" color="success"
                >Pulsa aquí</ion-button
              >
              <ion-button @click="alerta" expand="full" color="warning"
                >Pulsa aquí</ion-button
              >
            </p>
            <p>
              <ion-button @click="alerta" fill="clear" color="success"
                >Pulsa aquí</ion-button
              >
              <ion-button @click="alerta" fill="outline" color="warning"
                >Pulsa aquí</ion-button
              >
              <ion-button @click="alerta" fill="solid" color="primary"
                >Pulsa aquí</ion-button
              >
            </p>
          </ion-card-content>
        </ion-card>

        <hr />
        <ion-card>
          <ion-card-header>
            <ion-card-title> Grids </ion-card-title>
            <ion-card-subtitle> Maquetación responsive </ion-card-subtitle>
          </ion-card-header>
          <ion-card-content>
            <ion-grid class="ion-padding">
              <ion-row>
                <ion-col size-xs="12" size-md="6" size-lg="4"
                  >Columna 1</ion-col
                >
                <ion-col>Columna 2</ion-col>
                <ion-col>Columna 3</ion-col>
              </ion-row>
              <ion-row>
                <ion-col size="8">Columna 1</ion-col>
                <ion-col>Columna 2</ion-col>
              </ion-row>
              <ion-row>
                <ion-col>Columna 1</ion-col>
                <ion-col>Columna 2</ion-col>
                <ion-col>Columna 3</ion-col>
                <ion-col>Columna 4</ion-col>
              </ion-row>
              <ion-row v-for="(producto, index) in listaCompra" :key="index">
                <ion-col>{{producto}}</ion-col>
                <ion-col>Columna 2</ion-col>
                <ion-col>Columna 3</ion-col>
                <ion-col>Columna 4</ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-list>
          <ion-list-header>
            Lista de la compra
          </ion-list-header>
          <ion-item v-for="(producto, index) in listaCompra" :key="index">
            <ion-avatar slot="start">
              <img alt="Fruta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg" />
            </ion-avatar>
            <ion-label>
              <h2>{{producto}}</h2>
              <p>Estos son los detalles</p>
              </ion-label>
          </ion-item>
            <ion-item-sliding>
            <ion-item button @click="router.push({path:'/second'})" >
            
              <ion-avatar slot="start">
              <img alt="Fruta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg" />
            </ion-avatar>
            <ion-label>
              <h2>Producto con gesto</h2>
              <p>Estos son los detalles</p>
            </ion-label>
              <ion-item-options>
                <ion-item-option color="danger">

                  Borrar
                </ion-item-option>
              </ion-item-options>





          </ion-item>
            </ion-item-sliding>
          <ion-item>
            <ion-grid class="sin-borde">
              <ion-row>
                <ion-col size="3">
                  <ion-avatar>
                  <img alt="Fruta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg" />
                  </ion-avatar>
                </ion-col>
                <ion-col>
                  <h4>Otro producto</h4>
                  <p>Estos son los detalles</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-item>
        </ion-list>
        <ion-grid class="sin-borde">
          <ion-row>
            <ion-col size="3">
              <ion-avatar>
              <img alt="Fruta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg" />
              </ion-avatar>
            </ion-col>
            <ion-col>
              <h4>Otro producto</h4>
              <p>Estos son los detalles</p>
            </ion-col>
          </ion-row>
        </ion-grid>
        <div id="scroll">
          <ion-list>
            <ion-list-header>
              Lista con scroll
            </ion-list-header>
            <ion-item v-for="(producto, index) in listaCompra" :key="index">
              <ion-avatar slot="start">
                <img alt="Fruta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg" />
              </ion-avatar>
              <ion-label>
                <h2>{{producto}}</h2>
                <p>Estos son los detalles</p>
                </ion-label>
            </ion-item>
            <ion-item v-for="(producto, index) in listaCompra" :key="index">
              <ion-avatar slot="start">
                <img alt="Fruta" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Fruit_Stall_in_Barcelona_Market.jpg/360px-Fruit_Stall_in_Barcelona_Market.jpg" />
              </ion-avatar>
              <ion-label>
                <h2>{{producto}}</h2>
                <p>Estos son los detalles</p>
                </ion-label>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonAvatar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from "@ionic/vue";
import { defineComponent } from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonAvatar,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
  },
  data(){
    return {
      listaCompra:['Tomates', 'Aguacate', 'Aceite', 'Atún']
    }
  },
  methods: {
    alerta() {
      alert("Hola mundo");
    },
  },
  setup(){
    const router = useRouter();
    return {
      router
    }
  }
});
</script>

<style scoped>
#container {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
ion-col {
  border: 1px solid red;
}
.sin-borde ion-col {
  border: none;
  padding: 0;
}
ion-item ion-col h4{
  margin:6px 0;
}
#scroll{
  margin: 16px;
  border: 1px solid #888888;
  overflow: hidden;
  overflow-y: scroll;
  max-height: 400px;
}
</style>
