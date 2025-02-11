<template>
  <div class="create-event">
    <h2>Crea Evento</h2>
    <form @submit.prevent="createEvent">
      <input type="text" v-model="name" placeholder="Nome Evento" required />
      <input type="datetime-local" v-model="dateTime" required />
      <input type="number" v-model="registrationLimit" placeholder="Limite Registrazione (minuti)" required />
      <button type="submit">Crea</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CreateEvent',
  data() {
    return {
      name: '',
      dateTime: '',
      registrationLimit: 0,
    };
  },
  methods: {
    async createEvent() {
      try {
        const response = await axios.post('/api/events', {
          name: this.name,
          dateTime: this.dateTime,
          registrationLimit: this.registrationLimit,
        });
        this.$router.push('/event-list');
      } catch (error) {
        console.error('Event creation failed', error);
      }
    },
  },
};
</script>

<style scoped>
/* Stili della schermata di creazione evento */
.create-event {
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