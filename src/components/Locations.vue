<script setup>
import { ref } from 'vue'

const locations = ref([
  {
    id: 'ceremony',
    title: 'Ceremonia',
    description: 'Parròquia de les Santes Juliana i Semproniana, Sant Cugat del Vallès',
    time: '12:30 h'
  },
  {
    id: 'reception',
    title: 'Banquete',
    description: 'Mas Corts, Sant Fost de Campsentelles',
    time: 'Después de la ceremonia'
  }
])
</script>

<template>
  <section class="locations-section">
    <div class="section-header">
      <h2 class="section-title">Dónde y Cuándo</h2>
      <div class="section-line"></div>
    </div>

    <div class="locations-grid">
      <div v-for="location in locations" :key="location.id" class="location-card">
        <h3 class="location-title">{{ location.title }}</h3>
        <p class="location-time">{{ location.time }}</p>
        <p class="location-description">{{ location.description }}</p>
        <a href="#" class="cta-button">Ver mapa</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.locations-section {
  padding: 100px 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #FFFFFF;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 42px;
  font-weight: 400;
  color: #2C2C2C;
  margin: 0;
  font-style: italic;
}

.section-line {
  width: 1px;
  height: 40px;
  background-color: #C5B39A;
  margin: 20px auto 0;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 50px;
}

.location-card {
  padding: 50px 30px;
  background-color: #FFFFFF;
  border: 1px solid #E0DCD3;
  text-align: center;
  transition: border-color 0.4s ease;
}

.location-card:hover {
  border-color: #C5B39A;
}

.location-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #C5B39A;
  margin: 0 0 15px 0;
}

.location-time {
  font-family: 'Playfair Display', serif;
  font-size: 24px;
  color: #2C2C2C;
  margin: 0 0 20px 0;
}

.location-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #666666;
  margin: 0 0 35px 0;
  line-height: 1.8;
  padding: 0 10px;
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: transparent;
  color: #2C2C2C;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 1px solid #2C2C2C;
  transition: all 0.4s ease;
}

.cta-button:hover {
  background-color: #2C2C2C;
  color: #FFFFFF;
}
</style>