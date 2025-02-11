<template>
  <div class="login">
    <h2>Accedi</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Accedi</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('login', response.data);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed', error);
      }
    },
  },
};
</script>

<style scoped>
/* Stili della schermata di login */
.login {
  max-width: 400px;
  margin: 2rem auto;
}
form {
  display: flex;
  flex-direction: column;
}
form input,
form button {
  margin: 0.5rem 0;
}
</style>