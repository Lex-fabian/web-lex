<script setup>
import EncabezadoPrincipal from './components/layout/EncabezadoPrincipal.vue'
import SeccionInicio from './components/secciones/SeccionInicio.vue'
import SeccionServicios from './components/secciones/SeccionServicios.vue'
import SeccionSobreMi from './components/secciones/SeccionSobreMi.vue'
import SeccionProyectos from './components/secciones/SeccionProyectos.vue'
import SeccionContacto from './components/secciones/SeccionContacto.vue'
import RobotFlotante from './components/ui/RobotFlotante.vue'
</script>

<template>
  <div class="aplicacion-principal">
    <EncabezadoPrincipal />
    
    <main class="contenido-principal">
      <SeccionInicio />
      <SeccionServicios />
      <SeccionSobreMi />
      <SeccionProyectos />
      <SeccionContacto />
    </main>
    
    <RobotFlotante />
  </div>
</template>

<style>
.aplicacion-principal {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.contenido-principal {
  flex: 1;
  padding-top: 70px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@keyframes aparecerDesdeAbajo {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes deslizarEntrada {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulsoSuave {
  0%, 100% { 
    transform: scale(1); 
  }
  50% { 
    transform: scale(1.05); 
  }
}
</style>
