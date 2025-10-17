<template>
  <article class="tarjeta-servicio" :style="{ animationDelay: `${indice * 0.1}s` }">
    <div class="contenedor-icono">
      <font-awesome-icon :icon="servicio.icono" class="icono-servicio" />
    </div>
    
    <div class="contenido-tarjeta">
      <h3 class="titulo-servicio">{{ servicio.titulo }}</h3>
      <p class="descripcion-servicio">{{ servicio.descripcion }}</p>
      
      <div class="detalles-servicio">
        <div class="detalle-item">
          <span class="etiqueta">Precio:</span>
          <span class="valor precio">{{ servicio.precio }}</span>
        </div>
        <div class="detalle-item">
          <span class="etiqueta">Duración:</span>
          <span class="valor">{{ servicio.duracion }}</span>
        </div>
      </div>
      
      <button class="boton-cotizar" @click="cotizarProyecto">
        <font-awesome-icon icon="calculator" />
        Cotizar Proyecto
      </button>
    </div>
    
    <div class="efecto-hover"></div>
  </article>
</template>

<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  },
  indice: {
    type: Number,
    default: 0
  }
})

const props = defineProps({
  servicio: {
    type: Object,
    required: true
  },
  indice: {
    type: Number,
    default: 0
  }
})

const cotizarProyecto = () => {
  const mensaje = `¡Hola! Me interesa cotizar el servicio de "${props.servicio.titulo}". ¿Podrías darme más información sobre precios y tiempos de entrega?`
  const numeroWhatsApp = '593994755647'
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`
  window.open(urlWhatsApp, '_blank')
}
</script>

<style scoped>
.tarjeta-servicio {
  background: var(--color-fondo-primario);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: var(--sombra-media);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--color-fondo-terciario);
  animation: aparecerTarjeta 0.6s ease-out both;
}

.tarjeta-servicio:hover {
  transform: translateY(-10px);
  box-shadow: var(--sombra-intensa);
}

.tarjeta-servicio:hover .efecto-hover {
  opacity: 1;
  transform: scale(1);
}

.contenedor-icono {
  width: 60px;
  height: 60px;
  background: var(--color-acento-principal);
  border-radius: var(--radio-borde-medio);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: var(--transicion-suave);
}

.contenedor-icono:hover {
  background: var(--color-acento-hover);
  transform: scale(1.05);
}

.icono-servicio {
  font-size: 2rem;
  color: white;
  z-index: 1;
  position: relative;
}

.contenido-tarjeta {
  position: relative;
  z-index: 2;
}

.titulo-servicio {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-texto-principal);
  margin-bottom: 1rem;
  line-height: 1.3;
  transition: var(--transicion-suave);
}

.descripcion-servicio {
  color: var(--color-texto-secundario);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  transition: var(--transicion-suave);
}

.detalles-servicio {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.detalle-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.etiqueta {
  font-size: 0.8rem;
  color: var(--color-texto-terciario);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: var(--transicion-suave);
}

.valor {
  font-weight: 600;
  color: var(--color-texto-primario);
}

.precio {
  background: linear-gradient(45deg, #e74c3c, #f39c12);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.1rem;
}

.boton-cotizar {
  width: 100%;
  background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
}

.boton-cotizar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.boton-cotizar:hover::before {
  left: 100%;
}

.boton-cotizar:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(26, 35, 126, 0.3);
}

.efecto-hover {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(52, 152, 219, 0.1) 0%, transparent 70%);
  opacity: 0;
  transform: scale(0);
  transition: all 0.5s ease;
  pointer-events: none;
}

@keyframes aparecerTarjeta {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes brilloIcono {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
}

@media (max-width: 480px) {
  .tarjeta-servicio {
    padding: 1.5rem;
  }
  
  .detalles-servicio {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .detalle-item {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>