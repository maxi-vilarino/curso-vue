<script setup>
import { useRoute } from "vue-router";
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";
import { watch } from "vue";

const route = useRoute();
const movieStore = useMovieStore();
const movieId = route.params.id;
let movie = movieStore.getMovieById(Number(movieId));

watch(
  () => route.params.id,
  (newId) => {
    const newMovie = movieStore.getMovieById(Number(newId));
    if (newMovie) {
      movie.value = newMovie;
    }
  },
);

const movieTitle = movie ? movie.title : null;
const movieDirector = movie ? movie.director : null;
const movieReleaseYear = movie ? movie.releaseYear : null;
</script>
<template>
  <HeaderComponent />
  <h2 v-if="!movieTitle" class="movie-not-found">Movie not found</h2>
  <div v-else class="movie-details">
    <h1>{{ movieTitle }}</h1>
    <p>Director: {{ movieDirector }}</p>
    <p>Release Year: {{ movieReleaseYear }}</p>
  </div>
</template>
<style scoped>
.movie-details {
  margin: 1rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.movie-details h1 {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: black;
}

.movie-details p {
  margin: 0.25rem 0;
  font-weight: bold;
  color: black;
}

.movie-not-found {
  margin: 1rem;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  color: red;
  font-weight: bold;
}
</style>
