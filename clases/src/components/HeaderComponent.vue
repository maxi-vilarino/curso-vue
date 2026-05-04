<script setup></script>

<template>
  <header>
    <nav>
      <ul class="header">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/movies">Movies</router-link></li>
        <li><router-link to="/create-movie">Create Movie</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.header li a {
  text-decoration: none;
  color: inherit;
}

.header li a.router-link-active {
  font-weight: bold;
  color: red;
  text-decoration: underline;
}
</style>
