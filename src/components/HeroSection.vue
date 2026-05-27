<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const weddingDate = ref(new Date('2026-09-12T12:30:00').getTime())
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = weddingDate.value - now

  if (distance > 0) {
    days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
  }
}

onMounted(() => {
  updateCountdown()
  const interval = setInterval(updateCountdown, 1000)

  onUnmounted(() => {
    clearInterval(interval)
  })
})
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="names">Philip <span class="ampersand">&</span> María</h1>
      <p class="subtitle">Nos casamos</p>
      <div class="divider"></div>
      <p class="wedding-date">12 · Septiembre · 2026</p>
    </div>

        <div class="countdown">
      <div class="countdown-item">
        <div class="countdown-value">{{ days }}</div>
        <div class="countdown-label">Días</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ hours }}</div>
        <div class="countdown-label">Horas</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ minutes }}</div>
        <div class="countdown-label">Minutos</div>
      </div>
      <div class="countdown-item">
        <div class="countdown-value">{{ seconds }}</div>
        <div class="countdown-label">Seg</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

.hero-section {
  padding: 120px 20px 80px;
  text-align: center;
  background-color: #F9F8F6;
}

.hero-content {
  margin-bottom: 70px;
}

.names {
  font-family: 'Playfair Display', serif;
  font-size: 82px;
  font-weight: 400;
  color: #2C2C2C;
  margin: 0;
  line-height: 1.1;
}

.ampersand {
  font-style: italic;
  color: #C5B39A;
  font-size: 72px;
  margin: 0 10px;
}

@media (max-width: 640px) {
  .names {
    font-size: 52px;
  }
  .ampersand {
    font-size: 46px;
  }
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #666666;
  margin: 30px 0 20px 0;
}

.divider {
  width: 40px;
  height: 1px;
  background-color: #C5B39A;
  margin: 0 auto;
}

.wedding-date {
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  color: #4A4A4A;
  margin: 20px 0 0 0;
  font-weight: 400;
  letter-spacing: 2px;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .countdown {
    gap: 15px;
  }
}

.countdown-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px;
}

.countdown-value {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 400;
  color: #2C2C2C;
  line-height: 1;
}

.countdown-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 10px;
  color: #8b8b8b;
  margin-top: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>