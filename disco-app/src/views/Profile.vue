<template>
  <div class="profile">
    <h2>Profilo</h2>
    <div>
      <img :src="user.profilePicture" alt="Profile Picture" />
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <button @click="logout">Esci</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
/* Stili del profilo */
.profile {
  text-align: center;
  margin-top: 2rem;
}
.profile img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
</style>