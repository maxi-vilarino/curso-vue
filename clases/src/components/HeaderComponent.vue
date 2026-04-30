<script setup></script>

<template>
  <header>
    <nav>
      <ul class="header">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
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
</style>
