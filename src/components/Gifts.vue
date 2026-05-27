<script setup>
import { ref } from 'vue'

const qrData = ref('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=REGALOS_BODA')
</script>

<template>
  <section class="gifts-section">
    <div class="section-header">
      <h2 class="section-title">Lista de Bodas</h2>
      <div class="section-line"></div>
    </div>

    <div class="gifts-content">
      <div class="gifts-text">
        <p class="gifts-description">
          El mejor regalo es vuestra compañía. Sin embargo, si deseáis tener un detalle con nosotros para nuestra nueva etapa, podéis hacerlo a través del siguiente código.
        </p>
      </div>
      <div class="gifts-qr">
        <img :src="qrData" alt="QR código de regalos" class="qr-code" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gifts-section {
  padding: 100px 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #F9F8F6;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 38px;
  font-weight: 400;
  color: #2C2C2C;
  margin: 0;
}

.section-line {
  width: 40px;
  height: 1px;
  background-color: #C5B39A;
  margin: 20px auto 0;
}

.gifts-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

@media (max-width: 768px) {
  .gifts-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}

.gifts-text {
  padding: 0;
}

.gifts-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  color: #666666;
  line-height: 2;
  font-weight: 300;
  margin: 0;
}

.gifts-qr {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: #FFFFFF;
  border: 1px solid #E0DCD3;
}

.qr-code {
  display: block;
  width: 140px;
  height: 140px;
  object-fit: contain;
  opacity: 0.9;
}
</style>