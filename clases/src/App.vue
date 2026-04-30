<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";

let number = ref(0);

const increment = () => {
  number.value++;
};

const myId = "some-id";
const myValue = ref("some value");
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <h1 :id="myId">Hola Mundo!!!!</h1>
    <p>Contador: {{ number }}</p>
    <button @click="increment">Incrementar</button>
    <input type="text" :value="myValue" />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
}
</style>
