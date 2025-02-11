<template>
  <div class="accounting">
    <h2>Contabilità</h2>
    <div v-if="events.length">
      <div v-for="event in events" :key="event.id" class="event">
        <h3>{{ event.name }}</h3>
        <p>Data: {{ event.dateTime }}</p>
        <p>Numero totale di iscritti: {{ event.totalRegistrations }}</p>
        <p>Persone effettive entrate: {{ event.actualEntries }}</p>
      </div>
    </div>
    <div v-else>
      <p>Non ci sono eventi disponibili.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Accounting',
  data() {
    return {
      events: [],
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/accounting');
      this.events = response.data;
    } catch (error) {
      console.error('Failed to load accounting data', error);
    }
  },
};
</script>

<style scoped>
.accounting {
  max-width: 800px;
  margin: 2rem auto;
  text-align: center;
}
.event {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
}
</style>