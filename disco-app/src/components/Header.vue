<template>
  <header>
    <h1>Disco App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
/* Stili dell'header */
header {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}
nav a {
  color: #fff;
  margin: 0 1rem;
}
</style>