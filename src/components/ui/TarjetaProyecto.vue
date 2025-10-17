<template>
  <article class="tarjeta-proyecto">
    <div class="imagen-proyecto">
      <img :src="proyecto.imagen" :alt="proyecto.titulo" class="img-proyecto">
      <div class="overlay-proyecto">
        <div class="estado-proyecto" :class="claseEstado">
          {{ proyecto.estado }}
        </div>
        <div class="año-proyecto">{{ proyecto.año }}</div>
      </div>
    </div>
    
    <div class="contenido-proyecto">
      <h3 class="titulo-proyecto">{{ proyecto.titulo }}</h3>
      <p class="descripcion-proyecto">{{ proyecto.descripcion }}</p>
      
      <div class="tecnologias-proyecto">
        <span 
          v-for="tech in proyecto.tecnologias" 
          :key="tech"
          class="chip-tecnologia"
        >
          {{ tech }}
        </span>
      </div>
      
      <div class="acciones-proyecto">
        <button class="boton-ver-mas" @click="verDetalles">
          <font-awesome-icon icon="eye" />
          Ver Detalles
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  proyecto: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['ver-detalles'])

const claseEstado = computed(() => ({
  'completado': props.proyecto.estado === 'Completado',
  'en-desarrollo': props.proyecto.estado === 'En desarrollo'
}))

const verDetalles = () => {
  emit('ver-detalles', props.proyecto)
}
</script>

<style scoped>
.tarjeta-proyecto {
  background: var(--color-fondo-principal);
  border-radius: var(--radio-borde-medio);
  overflow: hidden;
  box-shadow: var(--sombra-media);
  border: 1px solid var(--color-borde-sutil);
  transition: var(--transicion-suave);
  position: relative;
}

.tarjeta-proyecto:hover {
  transform: translateY(-6px);
  box-shadow: var(--sombra-intensa);
  border-color: var(--color-borde-medio);
}

.imagen-proyecto {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: var(--color-fondo-terciario);
}

.img-proyecto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.tarjeta-proyecto:hover .img-proyecto {
  transform: scale(1.05);
}

.overlay-proyecto {
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: flex-end;
}

.estado-proyecto {
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  backdrop-filter: blur(10px);
}

.estado-proyecto.completado {
  background: rgba(46, 204, 113, 0.9);
}

.estado-proyecto.en-desarrollo {
  background: rgba(241, 196, 15, 0.9);
}

.año-proyecto {
  padding: 0.4rem 0.8rem;
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
  border-radius: var(--radio-borde-pequeno);
  font-size: 0.8rem;
  font-weight: 500;
}

.contenido-proyecto {
  padding: 1.5rem;
}

.titulo-proyecto {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-texto-principal);
  margin-bottom: 0.8rem;
  transition: var(--transicion-suave);
}

.descripcion-proyecto {
  color: var(--color-texto-secundario);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  transition: var(--transicion-suave);
}

.tecnologias-proyecto {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.chip-tecnologia {
  padding: 0.3rem 0.8rem;
  background: var(--color-fondo-terciario);
  color: var(--color-texto-secundario);
  border-radius: var(--radio-borde-pequeno);
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid var(--color-borde-sutil);
  transition: var(--transicion-suave);
}

.chip-tecnologia:hover {
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
  border-color: var(--color-acento-principal);
}

.acciones-proyecto {
  display: flex;
  justify-content: center;
}

.boton-ver-mas {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: var(--radio-borde-pequeno);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transicion-suave);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 200px;
}

.boton-ver-mas {
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
}

.boton-ver-mas:hover {
  transform: translateY(-2px);
  background: var(--color-acento-hover);
  box-shadow: var(--sombra-media);
}


</style>