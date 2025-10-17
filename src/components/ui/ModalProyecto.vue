<template>
  <transition name="modal" appear>
    <div v-if="mostrar" class="overlay-modal" @click="cerrarModal">
      <div class="contenedor-modal" @click.stop>
        <div class="encabezado-modal">
          <h3 class="titulo-modal">{{ proyecto.titulo }}</h3>
          <button class="boton-cerrar" @click="cerrarModal">
            <font-awesome-icon icon="times" />
          </button>
        </div>
        
        <div class="contenido-modal">
          <div class="imagen-modal">
            <!-- Galería de imágenes si existen múltiples -->
            <div v-if="proyecto.imagenesGaleria && proyecto.imagenesGaleria.length > 1" class="galeria-imagenes">
              <div class="imagen-principal">
                <img :src="proyecto.imagenesGaleria[imagenActual]" :alt="proyecto.titulo" />
              </div>
              <div class="miniaturas">
                <button 
                  v-for="(img, index) in proyecto.imagenesGaleria" 
                  :key="index"
                  @click="imagenActual = index"
                  :class="['miniatura', { 'activa': imagenActual === index }]"
                >
                  <img :src="img" :alt="`${proyecto.titulo} ${index + 1}`" />
                </button>
              </div>
            </div>
            <!-- Imagen única -->
            <img v-else :src="proyecto.imagenDetalle || proyecto.imagen" :alt="proyecto.titulo" />
          </div>
          
          <div class="info-modal">
            <p class="descripcion-modal">{{ proyecto.descripcion }}</p>
            
            <div class="detalles-proyecto">
              <div class="detalle-item">
                <strong>Estado:</strong> {{ proyecto.estado }}
              </div>
              <div class="detalle-item">
                <strong>Año:</strong> {{ proyecto.año }}
              </div>
            </div>
            
            <div class="tecnologias-modal">
              <h4>Tecnologías utilizadas:</h4>
              <div class="chips-tecnologia">
                <span 
                  v-for="tech in proyecto.tecnologias" 
                  :key="tech"
                  class="chip-tech"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  mostrar: {
    type: Boolean,
    default: false
  },
  proyecto: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['cerrar'])

const cerrarModal = () => {
  emit('cerrar')
}

const imagenActual = ref(0)

import { ref, onMounted, onUnmounted, watch } from 'vue'

// Cerrar modal con tecla Escape
const manejarTeclado = (evento) => {
  if (evento.key === 'Escape') {
    cerrarModal()
  }
}

// Manejar el scroll del body cuando se abre/cierra el modal
watch(() => props.mostrar, (nuevoValor) => {
  if (nuevoValor) {
    document.addEventListener('keydown', manejarTeclado)
    document.body.style.overflow = 'hidden'
  } else {
    document.removeEventListener('keydown', manejarTeclado)
    document.body.style.overflow = 'auto'
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', manejarTeclado)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
.overlay-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.contenedor-modal {
  background: var(--color-fondo-principal);
  border-radius: var(--radio-borde-grande);
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--sombra-intensa);
  border: 1px solid var(--color-borde-sutil);
}

.encabezado-modal {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid var(--color-borde-sutil);
}

.titulo-modal {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-texto-principal);
  margin: 0;
}

.boton-cerrar {
  background: none;
  border: none;
  color: var(--color-texto-secundario);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: var(--transicion-suave);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.boton-cerrar:hover {
  background: var(--color-fondo-terciario);
  color: var(--color-texto-principal);
}

.contenido-modal {
  padding: 2rem;
}

.imagen-modal {
  margin-bottom: 2rem;
  text-align: center;
}

.imagen-modal img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radio-borde-medio);
  box-shadow: var(--sombra-media);
}

.galeria-imagenes {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.imagen-principal img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.miniaturas {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  overflow-x: auto;
  padding: 0.5rem 0;
}

.miniatura {
  border: none;
  background: none;
  cursor: pointer;
  border-radius: var(--radio-borde-pequeno);
  overflow: hidden;
  transition: var(--transicion-suave);
  opacity: 0.6;
  flex-shrink: 0;
}

.miniatura img {
  width: 80px;
  height: 60px;
  object-fit: cover;
  box-shadow: none;
  border-radius: var(--radio-borde-pequeno);
}

.miniatura:hover,
.miniatura.activa {
  opacity: 1;
  transform: scale(1.05);
}

.miniatura.activa {
  border: 2px solid var(--color-acento-principal);
}

.descripcion-modal {
  font-size: 1.1rem;
  color: var(--color-texto-secundario);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.detalles-proyecto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.detalle-item {
  padding: 1rem;
  background: var(--color-fondo-terciario);
  border-radius: var(--radio-borde-pequeno);
  color: var(--color-texto-principal);
}

.detalle-item strong {
  color: var(--color-acento-principal);
}

.tecnologias-modal h4 {
  color: var(--color-texto-principal);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.chips-tecnologia {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip-tech {
  padding: 0.5rem 1rem;
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
  border-radius: var(--radio-borde-pequeno);
  font-size: 0.9rem;
  font-weight: 500;
}

/* Transiciones */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .contenedor-modal,
.modal-leave-active .contenedor-modal {
  transition: transform 0.3s ease;
}

.modal-enter-from .contenedor-modal,
.modal-leave-to .contenedor-modal {
  transform: scale(0.9) translateY(-50px);
}

/* Responsive */
@media (max-width: 768px) {
  .overlay-modal {
    padding: 1rem;
  }
  
  .encabezado-modal,
  .contenido-modal {
    padding: 1.5rem;
  }
  
  .titulo-modal {
    font-size: 1.5rem;
  }
  
  .detalles-proyecto {
    grid-template-columns: 1fr;
  }
}
</style>