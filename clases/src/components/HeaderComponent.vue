<script setup>
import { onMounted, onUnmounted } from "vue";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
onMounted(() => {
  userStore.fetchUser();
});

onUnmounted(() => {
  console.log("Componente desmonado");
});
</script>

<template>
  <header>
    <nav>
      <ul class="header">
        <div class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/movies">Movies</router-link></li>
          <li><router-link to="/create-movie">Create Movie</router-link></li>
        </div>
        <div class="user-info">
          <p v-if="userStore.user">Welcome, {{ userStore.user.name }}!</p>
          <button v-else @click="userStore.fetchUser" class="login-button">
            Log In
          </button>
        </div>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0;
  background-color: blueviolet;
  color: white;
}

.header li a {
  text-decoration: none;
  color: inherit;
}

.header li a.router-link-active {
  font-weight: bold;
  color: yellow;
  text-decoration: underline;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1rem;
}

.user-info {
  color: white;
}

.login-button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}
</style>
