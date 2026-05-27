<script setup>
</script>

<template>
  <section class="rsvp-section">
    <div class="rsvp-content">
      <h2 class="rsvp-title">Acompáñanos</h2>
      <p class="rsvp-text">Nos encantaría contar con tu presencia en este día tan especial. Por favor, confírmanos tu asistencia.</p>
      <a href="#" class="rsvp-button">Confirmar Asistencia</a>
    </div>
  </section>
</template>

<style scoped>
.rsvp-section {
  padding: 120px 20px;
  background-color: #3A3836;
  color: #F9F8F6;
  text-align: center;
}

.rsvp-content {
  max-width: 500px;
  margin: 0 auto;
}

.rsvp-title {
  font-family: 'Playfair Display', serif;
  font-size: 46px;
  font-weight: 400;
  color: #F9F8F6;
  margin: 0 0 24px 0;
  font-style: italic;
}

.rsvp-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #D3D0CB;
  margin: 0 0 45px 0;
  line-height: 1.9;
  font-weight: 300;
}

.rsvp-button {
  display: inline-block;
  padding: 15px 40px;
  background-color: transparent;
  color: #F9F8F6;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 1px solid #C5B39A;
  transition: all 0.4s ease;
}

.rsvp-button:hover {
  background-color: #C5B39A;
  color: #3A3836;
}
</style>