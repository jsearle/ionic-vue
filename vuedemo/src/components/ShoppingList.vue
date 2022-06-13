<template>
  <h1>Lista de la compra</h1>
  <p>{{usuario}}</p>
  <ul>
    <li v-for="(ingrediente, index) in items" :key="index">{{ingrediente}}</li>
  </ul>
  <button @click="addTomato">Añadir Tomates</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'ShoppingList',
  props:{
    usuario: String
  },
  data(){
    return {
      items:['Naranjas', 'Manzanas', 'Peras', 'Lechuga'] as string[]
    }
  },
  methods:{
    addTomato(){
      this.items.push('Tomates')
    }
  }
})
</script>

<style scoped>

</style>