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
  <p @click="() => appData.setEdad(40)">appData: {{appData}}</p>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, inject } from 'vue'
import { useMouse } from '../composables/mouse'

export default defineComponent({
  // nombre del componente
  name:'FullComponent',
  // porps que recibe el componente
  props:{
    texto: String,
    numero: Number
  },
  // datos reactivos del componente (debe ser una función que devuelve un objeto)
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
  // métodos: son funciones disponibles en el scope del componente
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
      //this.texto2 = 'sdfsdfsdf' //  ̶I̶n̶c̶o̶r̶r̶e̶c̶t̶o̶!̶!̶  SÍ es correcto, pero solo posible dentro del scope del componente
    }
  },
  // funciones que no alteran el estado del componente, 
  // generalmente utilizadas en el frontend
  computed:{
    nombreCompleto():string{
      return this.datos.nombre + ' ' + this.datos.apellido
    }
  },
  // array con la lista de eventos que dispara el componente
  emits:['modificar-padre', 'boton-pulsado'],
  // componentes registrados para ser utilizados dentro de éste
  components:{

  },
  // vigila el cambio en el valor de una variable
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
  // beforeCreate, created
  // beforeMounted, mounted
  // beforeUpdate, updated
  // beforeUnmount, unmounted

  // Composition API sólo se ejecuta una vez y define composable functions para permitir la reactividad
  setup(){
    const mouse = useMouse()

    // ref para valores primitivos (string, number, boolean)
    const texto2 = ref('Mi texto!!!')

    // reactive para valores complejos dentro de un object
    const obj = reactive({
      a:1,
      b:2
    })
    const appData = inject('appData')

    // setters para compartir el método de modificación del ref
    const setTexto2 = (nuevoTexto:string) => {
      texto2.value = nuevoTexto
    }

    // al final del setup compartimos el conjunto de variables / métodos que necesita el componente
    return {
      texto2,
      setTexto2,
      mouse,
      appData
    }
  }
})
</script>

<style scoped>
h1{
  color:green;
}
</style>
