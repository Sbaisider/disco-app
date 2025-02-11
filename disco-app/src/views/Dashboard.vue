<template>
  <div class="dashboard">
    <h2>Dashboard</h2>
    <div v-if="role === 'Manager'">
      <router-link to="/create-event">Crea Evento</router-link>
      <router-link to="/accounting">Contabilità</router-link>
    </div>
    <div v-if="role === 'PR'">
      <router-link to="/create-event">Crea Evento</router-link>
    </div>
    <div v-if="role === 'User'">
      <router-link to="/event-list">Eventi Disponibili</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  computed: {
    role() {
      return this.$store.getters.userRole;
    },
  },
};
</script>

<style scoped>
/* Stili della dashboard */
.dashboard {
  text-align: center;
  margin-top: 2rem;
}
</style>