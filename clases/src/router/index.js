import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import CreateMoviePage from "../pages/CreateMoviePage.vue";
import MovieDetails from "../pages/MovieDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/movies",
      name: "Movies",
      component: MoviesPage,
    },
    {
      path: "/create-movie",
      name: "CreateMovie",
      component: CreateMoviePage,
    },
    {
      path: "/movies/:id",
      name: "MovieDetails",
      component: MovieDetails,
    },
  ],
});

export default router;
