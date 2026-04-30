<script setup>
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import ChildComponent from "./components/ChildComponent.vue";

let number = ref(0);

const increment = () => {
  number.value++;
};

const myId = "some-id";
const myValue = ref("some value");

const condition = true;
const anotherCondition = false;

const movies = ref([
  { id: 1, title: "Movie 1" },
  { id: 2, title: "Movie 2" },
  { id: 3, title: "Movie 3" },
]);

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
  <ChildComponent :msg="text" :person="person" @login="handleLogin">
    <template #top>
      <h3>Contenido personalizado Top</h3>
    </template>
    <p>
      Este es un contenido adicional que se muestra dentro del componente hijo.
    </p>
    <template #botton>
      <h3>Contenido personalizado Botton</h3>
    </template>
  </ChildComponent>
  <div class="container">
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
    <div class="movies-container">
      <ul class="movies">
        <li v-for="movie in movies" :key="movie.id" class="movie">
          {{ movie.title }}
        </li>
      </ul>
    </div>
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

.highlight {
  color: red;
  font-weight: bold;
}

.movies-container {
  background-color: green;
  padding: 1rem;
  border-radius: 8px;
}

.movies {
  display: flex;
  gap: 0.5rem;
  padding: 0;
}

.movie {
  color: orange;
  font-weight: bold;
  list-style: none;
}
</style>
