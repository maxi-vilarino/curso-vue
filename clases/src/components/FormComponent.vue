<script setup>
import { reactive } from "vue";
import { useMovieStore } from "../stores/movie";

const movieStore = useMovieStore();

const movies = reactive({
  title: "",
  director: "",
  duration: 0,
  releaseYear: 0,
});

const handleSubmit = () => {
  if (
    movies.title &&
    movies.director &&
    movies.duration &&
    movies.releaseYear
  ) {
    movieStore.addMovie({
      id: Date.now(),
      title: movies.title,
      director: movies.director,
      releaseYear: movies.releaseYear,
    });
    movies.title = "";
    movies.director = "";
    movies.duration = 0;
    movies.releaseYear = 0;
  } else {
    alert("Please fill in all fields.");
    return;
  }
};
</script>

<template>
  <h1>Forms</h1>
  <form @submit.prevent="handleSubmit" class="movie-form">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="movies.title" />

    <label for="director">Director:</label>
    <input type="text" id="director" v-model="movies.director" />

    <label for="duration">Duration:</label>
    <input type="number" id="duration" v-model="movies.duration" />

    <label for="releaseYear">Release Year:</label>
    <input type="number" id="releaseYear" v-model="movies.releaseYear" />

    <button type="submit">Submit</button>
  </form>
</template>

<style>
.movie-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.movie-form label {
  font-weight: bold;
}

.movie-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.movie-form button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  width: 100px;
  cursor: pointer;
}
.movie-form button:hover {
  background-color: #0056b3;
}

.movie-form input {
  width: 300px;
}
</style>
