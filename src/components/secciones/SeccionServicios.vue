<template>
  <section id="servicios" class="seccion-servicios">
    <div class="contenedor-seccion">
      <div class="encabezado-seccion">
        <h2 class="titulo-seccion">Mis Servicios</h2>
        <p class="subtitulo-seccion">
          Soluciones digitales personalizadas para impulsar tu negocio
        </p>
      </div>
      
      <div class="grilla-servicios">
        <TarjetaServicio 
          v-for="(servicio, indice) in servicios" 
          :key="servicio.id"
          :servicio="servicio"
          :indice="indice"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { servicios } from '../../datos/servicios'
import TarjetaServicio from '../ui/TarjetaServicio.vue'
</script>

<style scoped>
.seccion-servicios {
  padding: 6rem 0;
  background: var(--color-fondo-gradiente);
  position: relative;
  overflow: hidden;
  transition: var(--transicion-suave);
}

.seccion-servicios::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.02) 0%, transparent 50%);
  pointer-events: none;
}

.contenedor-seccion {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.encabezado-seccion {
  text-align: center;
  margin-bottom: 4rem;
  animation: deslizarDesdeArriba 1s ease-out;
}

.titulo-seccion {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: var(--color-texto-principal);
  margin-bottom: 1rem;
  position: relative;
  transition: var(--transicion-suave);
}

.titulo-seccion::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--color-acento-principal);
  border-radius: var(--radio-borde-pequeno);
}

.subtitulo-seccion {
  font-size: 1.2rem;
  color: var(--color-texto-secundario);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  transition: var(--transicion-suave);
}

.grilla-servicios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

@keyframes deslizarDesdeArriba {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ondaLenta {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(1deg); }
  50% { transform: translate(0, 10px) rotate(0deg); }
  75% { transform: translate(-5px, 5px) rotate(-1deg); }
}

@media (max-width: 768px) {
  .grilla-servicios {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>