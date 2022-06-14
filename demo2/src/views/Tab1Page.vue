<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-label position="floating">Nombre </ion-label>
          <ion-input type="text" clear-input inputmode="url"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Apellidos</ion-label>
          <ion-input type="text" clear-input inputmode="url"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Teléfono </ion-label>
          <ion-input @ionChange="checkData" type="text" clear-input inputmode="url" v-model="telefono"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Observaciones </ion-label>
          <ion-textarea auto-grow></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-checkbox slot="start"></ion-checkbox>
          <ion-label>Desea recibir información</ion-label>
        </ion-item>
        <ion-item>
          <ion-label>Acepto las condiciones</ion-label>
          <ion-checkbox slot="start"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label>Selecciona medio de contacto</ion-label>
          <ion-select v-model="modoContacto" ok-text="Hecho!" cancel-text="Nope">
            <ion-select-option value="mail">Mail</ion-select-option>
            <ion-select-option value="phone">Teléfono</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-radio-group>
          <ion-item>
            <ion-label>Opción 1</ion-label>
            <ion-radio value="1" slot="end"></ion-radio>
          </ion-item>
          <ion-item>
            <ion-label>Opción 2</ion-label>
            <ion-radio value="2" slot="end"></ion-radio>
          </ion-item>
        </ion-radio-group>
      </ion-list>
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
  IonList,
  IonItem,
  IonInput,
  IonLabel,
  IonTextarea,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
    IonRadioGroup,
    IonRadio
} from "@ionic/vue";

export default defineComponent({
  name: "Tab1Page",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonList,
    IonItem,
    IonInput,
    IonLabel,
    IonTextarea,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonRadioGroup,
    IonRadio
  },
  data(){
    return {
      telefono: '1231231',
      modoContacto: ''
    }
  },
  methods:{
    checkData(){
      console.log("cambio de contenido")
    }
  }
});
</script>
