<template>
  <h1>Lista de la compra</h1>
  <p>{{ mayusculas }}</p>
  <ul>
    <li v-for="(ingrediente, index) in items" :key="index">{{ingrediente}}</li>
  </ul>
  <button v-if="showButton" @click="addTomato">Añadir Tomates</button>
  <button v-else-if="lastItem == 'Tomates'" @click="removeTomato">Eliminar Tomates</button>
  <button v-else @click="removeTomato">Eliminar Tomates</button>

  <p>{{contador}}</p>
  <p>
    <button @click.once="addNumber">Sólo una vez</button>
    <button @click.prevent="addNumber">Prevent default</button>
    <button @click.stop="addNumber">Stop propagation</button>
  </p>
  <p>
    <input type="text" @keyup.enter="teclaPulsada">
  </p>
  <div class="caja">
    <div>
      <div @mousemove="raton">
        texto
      </div>
      Edad: {{ (appData?appData.edad:'') }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name:'ShoppingList',
  props:{
    usuario: String
  },
  data(){
    return {
      items:['Naranjas', 'Manzanas', 'Peras', 'Lechuga'] as string[],
      showButton: true,
      miUsuario: this.usuario || '',
      contador: 0
    }
  },
  methods:{
    addTomato(){
      this.items.push('Tomates')
      this.showButton = false
    },
    removeTomato(){
      this.items.pop()
      this.showButton = true
    },
    addNumber(e:Event){
      this.contador ++;
    },
    teclaPulsada(e: KeyboardEvent){
      console.log(e.key)
    },
    raton(){
      this.contador -= 1;
    }
  },
  computed:{
    lastItem(){
      const result = this.items.filter(prod => prod == 'Manzanas')
      return result
    },
    mayusculas(){
      return this.miUsuario.toUpperCase()
    }
  },
  setup(){
    const appData = inject('appData');
    return {
      appData
    }
  }
})
</script>

<style scoped>
.caja, .caja div{
  padding: 20px;
  background-color: #ff000099;
  border: 1px solid red;
}
</style>