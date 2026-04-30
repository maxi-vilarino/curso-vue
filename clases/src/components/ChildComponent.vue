<script setup>
defineProps({
  msg: String,
  person: Object,
});
</script>

<template>
  <div>
    <h1>Child Component</h1>
    <p>{{ msg }}{{ person.name }}</p>
    <p>Name: {{ person.name }}</p>
    <p>Age: {{ person.age }}</p>
  </div>
</template>

<style></style>
