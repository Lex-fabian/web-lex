<template>
  <section id="proyectos" class="seccion-proyectos">
    <div class="contenedor-seccion">
      <div class="encabezado-seccion">
        <h2 class="titulo-seccion">Proyectos Destacados</h2>
        <p class="subtitulo-seccion">
          Una muestra de mi trabajo y experiencia en desarrollo
        </p>
      </div>
      
      <div class="grilla-proyectos">
        <TarjetaProyecto 
          v-for="proyecto in proyectos" 
          :key="proyecto.id"
          :proyecto="proyecto"
          @ver-detalles="abrirModal"
        />
      </div>
    </div>
    
    <!-- Modal de detalles del proyecto -->
    <ModalProyecto 
      :mostrar="modalAbierto"
      :proyecto="proyectoSeleccionado"
      @cerrar="cerrarModal"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { proyectos } from '../../datos/proyectos'
import TarjetaProyecto from '../ui/TarjetaProyecto.vue'
import ModalProyecto from '../ui/ModalProyecto.vue'

// Estado reactivo para el modal
const modalAbierto = ref(false)
const proyectoSeleccionado = ref({})

const abrirModal = (proyecto) => {
  proyectoSeleccionado.value = proyecto
  modalAbierto.value = true
}

const cerrarModal = () => {
  modalAbierto.value = false
  proyectoSeleccionado.value = {}
}
</script>

<style scoped>
.seccion-proyectos {
  padding: 6rem 0;
  background: var(--color-fondo-secundario);
  position: relative;
  transition: background-color 0.3s ease;
}

.contenedor-seccion {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.encabezado-seccion {
  text-align: center;
  margin-bottom: 4rem;
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

.grilla-proyectos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .grilla-proyectos {
    grid-template-columns: 1fr;
  }
}
</style>