<script setup>
const props = defineProps({
  msg: String,
  person: Object,
});

const emit = defineEmits(["login"]);
const login = () => {
  emit("login", props.person.name);
};
</script>

<template>
  <div class="child">
    <slot name="top">
      <h3>Contenido por defecto Top</h3>
    </slot>
    <h1>Login</h1>
    <p>{{ props.msg }}{{ props.person.name }}!!</p>
    <p>User: {{ props.person.name }}</p>
    <button @click="login">Login</button>
    <slot name="botton">
      <h3>Contenido por defecto Botton</h3>
    </slot>
  </div>
</template>

<style>
.child {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
