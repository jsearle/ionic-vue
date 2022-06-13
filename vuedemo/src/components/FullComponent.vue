<template>
  <h1>Componente plantilla</h1>
  <p>
    Texto: {{texto}}. Nombre {{nombre}}
    </p>
  <p>
    Numero: {{numero}} 
    </p>
    <input type="text" v-model="nombre" />
  <button @click="modificarPadre">Modificar padre</button>
  <button @click="cambioProfundo">Botón pulsado</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'FullComponent',
  props:{
    texto: String,
    numero: Number
  },
  data(){
    return{
      dato: 123,
      fichaUsuario: {} as any,
      usuario: 'Juan Searle',
      datos: {
        nombre: 'Juan',
        apellido: 'Searle'
      } as any,
      nombre: ''
    }
  },
  methods:{
    obtenerUsuario(): string{
      return this.usuario;
    },
    incrementar(){
      this.dato++;
    },
    incrementarEn(unidades: number){
      this.dato += unidades;
    },
    modificarPadre(){
      console.log(this.nombre)
      this.$emit('modificar-padre', this.nombre )
    },
    cambioProfundo(){
      this.datos.nombre = 'otro nombre'
    }
  },
  computed:{
    nombreCompleto():string{
      return this.datos.nombre + ' ' + this.datos.apellido
    }
  },
  emits:['modificar-padre', 'boton-pulsado'],
  components:{

  },
  watch:{
    'datos.nombre': function (nuevo:string, prev:string){
      console.log('Eres mi tocayo!')
    }
  }
})
</script>

<style scoped>
h1{
  color:green;
}
</style>
