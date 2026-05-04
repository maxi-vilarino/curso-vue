<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import { useMovieStore } from "../stores/movie";

const movieStore = useMovieStore();
const { movies } = movieStore;
</script>

<template>
  <HeaderComponent />
  <h1>Movies</h1>
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
  width: 100%;
  max-width: 960px;
  padding: 1rem;
  border-radius: 8px;
  box-sizing: border-box;
}

.movies {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.movie-card {
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  padding: 1.25rem;
  border-radius: 8px;
  width: 100%;
  min-height: 180px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  font-weight: bold;
  color: black;
  font-weight: bold;
  list-style: none;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.movie-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.16);
  border-color: rgba(15, 23, 42, 0.14);
}

.movie-card p {
  margin: 0;
  line-height: 1.5;
}

.movie-card p:first-child {
  font-size: 1.05rem;
  color: #0f172a;
}
</style>
