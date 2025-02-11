<template>
  <div class="welcome">
    <h1>Benvenuto alla Disco App</h1>
    <p>Accedi o registrati per iniziare.</p>
    <router-link to="/register">Registrati</router-link>
    <router-link to="/login">Accedi</router-link>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style scoped>
/* Stili della schermata di benvenuto */
.welcome {
  text-align: center;
  margin-top: 3rem;
}
</style>