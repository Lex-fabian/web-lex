<template>
  <div class="tarjeta-habilidad">
    <div class="encabezado-habilidad">
      <div class="contenedor-icono">
        <font-awesome-icon :icon="habilidad.icono" class="icono-habilidad" />
      </div>
      <h4 class="titulo-habilidad">{{ habilidad.titulo }}</h4>
    </div>
    
    <div class="barra-nivel">
      <div 
        class="progreso-nivel" 
        :style="{ width: `${habilidad.nivel}%` }"
      ></div>
      <span class="texto-nivel">{{ habilidad.nivel }}%</span>
    </div>
    
    <div class="tecnologias-habilidad">
      <span 
        v-for="item in habilidad.items" 
        :key="item"
        class="chip-tecnologia"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  habilidad: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.tarjeta-habilidad {
  background: var(--color-fondo-principal);
  border-radius: var(--radio-borde-grande);
  padding: 2rem;
  border: 1px solid var(--color-borde-sutil);
  box-shadow: var(--sombra-media);
  transition: var(--transicion-suave);
}

.tarjeta-habilidad:hover {
  transform: translateY(-6px);
  border-color: var(--color-borde-medio);
  box-shadow: var(--sombra-intensa);
}

.encabezado-habilidad {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.contenedor-icono {
  width: 50px;
  height: 50px;
  background: var(--color-acento-principal);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transicion-suave);
}

.icono-habilidad {
  font-size: 1.5rem;
  color: var(--blanco-puro);
}

.titulo-habilidad {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-texto-principal);
  transition: var(--transicion-suave);
}

.barra-nivel {
  position: relative;
  background: var(--color-fondo-terciario);
  border-radius: var(--radio-borde-pequeno);
  height: 8px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border: 1px solid var(--color-borde-sutil);
}

.progreso-nivel {
  height: 100%;
  background: var(--color-acento-principal);
  border-radius: var(--radio-borde-pequeno);
  transition: width 1s ease-out;
  position: relative;
}

.progreso-nivel::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  animation: brilloProgreso 2s ease-in-out infinite;
}

.texto-nivel {
  position: absolute;
  right: 0;
  top: -25px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-acento-principal);
  transition: var(--transicion-suave);
}

.tecnologias-habilidad {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip-tecnologia {
  padding: 0.4rem 0.8rem;
  background: var(--color-fondo-terciario);
  border-radius: var(--radio-borde-pequeno);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-texto-secundario);
  border: 1px solid var(--color-borde-sutil);
  transition: var(--transicion-suave);
}

.chip-tecnologia:hover {
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
  transform: translateY(-2px);
  border-color: var(--color-acento-principal);
}

@keyframes brilloProgreso {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
</style>