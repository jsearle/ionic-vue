<template>
  <FullComponent :texto="usuario" :numero="13" @modificar-padre="cambioDato"/>
  <hr />
  {{usuario}}
  <hr />
  <ShoppingList :usuario="usuario" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import MiComponente from './components/MiComponente.vue';
import ShoppingList from './components/ShoppingList.vue';
import FullComponent from './components/FullComponent.vue';


export default defineComponent({
  name: 'App',
  data(){
    return {
      usuario: 'Juan Searle'
    }
  },
  methods:{
    cambioDato(nuevoNombre: string){
      this.usuario = nuevoNombre
    }
  },
  components: {
    ShoppingList,
    FullComponent
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
