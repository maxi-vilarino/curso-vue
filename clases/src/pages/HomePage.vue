<script setup>
import { ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import ChildComponent from "../components/ChildComponent.vue";

let number = ref(0);

const increment = () => {
  number.value++;
};

const myId = "some-id";
const myValue = ref("some value");

const condition = true;
const anotherCondition = false;

let myCondition = true;

const text = "Hello ";
const person = {
  name: "John",
  age: 30,
};

const displayName = ref("");

const handleLogin = (e) => {
  displayName.value = e;
  console.log(displayName);
};
</script>

<template>
  <HeaderComponent />
  <div class="container">
    <ChildComponent :msg="text" :person="person" @login="handleLogin">
      <template #top>
        <h3>Contenido personalizado Top</h3>
      </template>
      <p>
        Este es un contenido adicional que se muestra dentro del componente
        hijo.
      </p>
      <template #botton>
        <h3>Contenido personalizado Botton</h3>
      </template>
    </ChildComponent>
    <div class="container-second">
      <h1 :id="myId" :class="myCondition ? 'highlight' : ''">
        Hola {{ displayName }}
      </h1>
      <h2 v-if="condition">La condición se cumple</h2>
      <h2 v-else-if="anotherCondition">Otra condición se cumple</h2>
      <h2 v-else>No se cumple ninguna condición</h2>
      <p>Contador: {{ number }}</p>
      <button @click="increment">Incrementar</button>
      <h2>{{ myValue }}</h2>
      <input type="text" v-model="myValue" />
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
}

.container-second {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.highlight {
  color: red;
  font-weight: bold;
}
</style>
