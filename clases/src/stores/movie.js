import { defineStore } from "pinia";
import { ref } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const movies = ref([
    {
      id: 1,
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      releaseYear: 1994,
    },
    {
      id: 2,
      title: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
    },
    {
      id: 3,
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
    },
  ]);

  const addMovie = (movie) => {
    movies.value.push(movie);
  };
  return {
    movies,
    addMovie,
  };
});
