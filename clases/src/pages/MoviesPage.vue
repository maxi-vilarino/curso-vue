<script setup>
import { ref } from "vue";

const movies = ref([
  { id: 1, title: "Movie 1", director: "Director 1", releaseYear: 2020 },
  { id: 2, title: "Movie 2", director: "Director 2", releaseYear: 2021 },
  { id: 3, title: "Movie 3", director: "Director 3", releaseYear: 2022 },
]);
</script>

<template>
  <h1>Movies Page</h1>
  <div class="movies-container">
    <ul class="movies">
      <li v-for="movie in movies" :key="movie.id" class="movie-card">
        <p>{{ movie.title }}</p>
        <p>Directed by {{ movie.director }}</p>
        <p>Released in {{ movie.releaseYear }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.movies-container {
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

.movies {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0;
}

.movie-card {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  font-weight: bold;
  color: black;
  font-weight: bold;
  list-style: none;
}
</style>
