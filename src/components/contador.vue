<template>
 <h1>Hola mundo</h1>
 <p>{{ contador }}</p>
 <button @click="Incrementar">Incremetar</button>
 <button @click="Decrementar">Decrementar</button>

</template>
<script setup>
import{ref} from 'vue';
const contador =ref(0);
const Incrementar =()=> {
  contador.value++;
}
const Decrementar =()=> {
  contador.value--;
}
</script>
<style scoped>

</style>
