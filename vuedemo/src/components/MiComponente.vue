<template>
  <h1>Mi componente</h1>
  <p>Texto: {{texto}}</p>
  <p :class="`left ${claseParrafo}`">Número: {{numero}}</p>
  <button @click="interactuar">Interactuar</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MiComponente',
  data(){
    return {
      texto: "Este texto es muy reactivo",
      numero: 12,
      claseParrafo: ''
    }
  },
  methods:{
    interactuar(){
      this.numero += 1;
      this.texto += '!';
      if (this.numero > 20){
        this.claseParrafo = 'alerta';
      }
    }
  }
});
</script>

<style>
p{
  color:blue;
}
p.alerta{
  color:red;
}
p.left{
  text-align:left;
}
</style>