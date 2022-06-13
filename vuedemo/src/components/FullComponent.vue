<template>
  <h1>Componente plantilla</h1>
  <p>
    Texto: {{texto}}. Nombre {{nombre}}
    </p>
  <p>
    Numero: {{numero}} 
    </p>
    <p>
      Composition API<br/>
      <strong>{{ texto2 }}</strong>
    </p>
    <p>{{mouse}}</p>
    <input type="text" v-model="nombre" />
  <button @click="modificarPadre">Modificar padre</button>
  <button @click="cambioProfundo">Botón pulsado</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useMouse } from '../composables/mouse'

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
      this.setTexto2('Este es el nuevo texto!!')
      //this.texto2 = 'sdfsdfsdf' // Incorrecto!!
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
    nombre(nuevo:string, prev:string){
      if(nuevo=='Juan'){
        alert('Eres mi tocayo!!');
      }
    },
    'datos.nombre': function (nuevo:string, prev:string){
      console.log('Eres mi tocayo!')
      this.modificarPadre()
    }
  },
  //  lifecycle
  mounted(){
    //alert('Bienvenido')
  },
  // updated, created, unmounted
  // beforeMounted, beforeUpdated,  beforeCreated, beforeUnmounted
  setup(){
    const mouse = useMouse()

    const texto2 = ref('Mi texto!!!')

    const setTexto2 = (nuevoTexto:string) => {
      texto2.value = nuevoTexto
    }

    return {
      texto2,
      setTexto2,
      mouse
    }
  }
})
</script>

<style scoped>
h1{
  color:green;
}
</style>
