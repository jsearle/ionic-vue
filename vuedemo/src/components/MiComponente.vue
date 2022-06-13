<template>
  <h1>Mi componente</h1>
  <p>{{texto}}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MiComponente',
  data(){
    return {
      texto: "Este texto es reactivo"
    }
  }
});
</script>

<style>
p{
  color:red;
}
</style>