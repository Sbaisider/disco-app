<template>
  <div class="register">
    <h2>Registrazione</h2>
    <form @submit.prevent="register">
      <input type="text" v-model="name" placeholder="Nome" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <input type="file" @change="onFileChange" />
      <select v-model="role" required>
        <option value="Manager">Manager</option>
        <option value="PR">PR</option>
        <option value="User">Utente</option>
      </select>
      <button type="submit">Registrati</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      profilePicture: null,
      role: 'User',
    };
  },
  methods: {
    onFileChange(e) {
      this.profilePicture = e.target.files[0];
    },
    async register() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('profilePicture', this.profilePicture);
      formData.append('role', this.role);

      try {
        const response = await axios.post('/api/register', formData);
        this.$store.dispatch('login', response.data);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Registration failed', error);
      }
    },
  },
};
</script>

<style scoped>
/* Stili della schermata di registrazione */
.register {
  max-width: 400px;
  margin: 2rem auto;
}
form {
  display: flex;
  flex-direction: column;
}
form input,
form select,
form button {
  margin: 0.5rem 0;
}
</style>