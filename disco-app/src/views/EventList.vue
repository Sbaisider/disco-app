<template>
  <div class="event-list">
    <h2>Eventi Disponibili</h2>
    <div v-for="event in events" :key="event.id">
      <h3>{{ event.name }}</h3>
      <p>{{ event.dateTime }}</p>
      <button @click="registerForEvent(event.id)">Iscriviti</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EventList',
  data() {
    return {
      events: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/events');
      this.events = response.data;
    } catch (error) {
      console.error('Failed to load events', error);
    }
  },
  methods: {
    async registerForEvent(eventId) {
      try {
        const response = await axios.post(`/api/events/${eventId}/register`);
        // Mostra il QR code all'utente
      } catch (error) {
        console.error('Event registration failed', error);
      }
    },
  },
};
</script>

<style scoped>
/* Stili della lista eventi */
.event-list {
  max-width: 600px;
  margin: 2rem auto;
}
</style>