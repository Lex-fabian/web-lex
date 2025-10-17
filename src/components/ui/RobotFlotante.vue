<template>
  <div class="robot-flotante" :class="{ 'expandido': mostrandoMensaje }">
    <div v-if="mostrandoMensaje" class="mensaje-robot">
      <p>¡Hola! 👋</p>
      <p>¡Haz clic en mí para contactar por WhatsApp! 👇</p>
      <button @click="cerrarMensaje" class="boton-cerrar">&times;</button>
    </div>
    
    <div class="indicador-dedo" :class="{ 'visible': mostrandoMensaje }">
      👆
    </div>
    
    <div 
      class="robot-avatar" 
      @click="abrirWhatsApp"
      :class="{ 'pulsando': pulsando }"
    >
      <div class="robot-cara">
        <div class="robot-ojos">
          <div class="ojo izquierdo" :class="{ 'parpadeando': parpadeando }"></div>
          <div class="ojo derecho" :class="{ 'parpadeando': parpadeando }"></div>
        </div>
        <div class="robot-boca"></div>
      </div>
      
      <div class="indicador-en-linea"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mostrandoMensaje = ref(false)
const pulsando = ref(false)
const parpadeando = ref(false)

const abrirWhatsApp = () => {
  if (mostrandoMensaje.value) {
    mostrandoMensaje.value = false
  }
  window.open('https://wa.me/593994755647?text=¡Hola! Me interesa conocer más sobre tus servicios', '_blank')
}

const cerrarMensaje = () => {
  mostrandoMensaje.value = false
}

const iniciarAnimaciones = () => {
  setInterval(() => {
    parpadeando.value = true
    setTimeout(() => {
      parpadeando.value = false
    }, 150)
  }, 3000)

  setInterval(() => {
    if (!mostrandoMensaje.value) {
      pulsando.value = true
      setTimeout(() => {
        pulsando.value = false
      }, 1000)
    }
  }, 5000)
}

onMounted(() => {
  iniciarAnimaciones()
  
  // Mostrar mensaje inicial después de 3 segundos
  setTimeout(() => {
    mostrandoMensaje.value = true
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      mostrandoMensaje.value = false
    }, 5000)
  }, 3000)
  
  // Repetir el mensaje cada 30 segundos
  setInterval(() => {
    if (!mostrandoMensaje.value) {
      mostrandoMensaje.value = true
      setTimeout(() => {
        mostrandoMensaje.value = false
      }, 5000)
    }
  }, 30000)
})
</script>

<style scoped>
.robot-flotante {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  transition: all 0.3s ease;
}

.mensaje-robot {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 1.2rem;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
  margin-top: 1rem;
  position: relative;
  max-width: 200px;
  animation: deslizarEntrada 0.3s ease-out;
}

.mensaje-robot::after {
  content: '';
  position: absolute;
  top: 100%;
  right: 20px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #667eea;
}

.mensaje-robot p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.mensaje-robot p:first-child {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.boton-cerrar {
  position: absolute;
  top: -5px;
  right: 5px;
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.boton-cerrar:hover {
  opacity: 1;
}

.indicador-dedo {
  position: absolute;
  bottom: 90px;
  right: 10px;
  font-size: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  animation: apuntarRobot 1.5s ease-in-out infinite;
  pointer-events: none;
}

.indicador-dedo.visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes apuntarRobot {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.robot-avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00d4aa, #00a8cc);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 212, 170, 0.3);
  position: relative;
  animation: flotar 3s ease-in-out infinite;
}

.robot-avatar:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 212, 170, 0.4);
}

.robot-avatar.pulsando {
  animation: pulso 1s ease-in-out, flotar 3s ease-in-out infinite;
}

.robot-cara {
  width: 40px;
  height: 40px;
  position: relative;
}

.robot-ojos {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
}

.ojo {
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  transition: all 0.15s ease;
}

.ojo.parpadeando {
  height: 2px;
  border-radius: 2px;
}

.robot-boca {
  width: 16px;
  height: 8px;
  background: white;
  border-radius: 0 0 16px 16px;
  margin: 0 auto;
}

.indicador-en-linea {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 12px;
  height: 12px;
  background: #2ecc71;
  border: 2px solid white;
  border-radius: 50%;
  animation: pulsoVerde 2s ease-in-out infinite;
}

@keyframes deslizarEntrada {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes flotar {
  0%, 100% { 
    transform: translateY(0px); 
  }
  50% { 
    transform: translateY(-5px); 
  }
}

@keyframes pulso {
  0%, 100% { 
    transform: scale(1); 
  }
  50% { 
    transform: scale(1.2); 
  }
}

@keyframes pulsoVerde {
  0%, 100% { 
    opacity: 1; 
  }
  50% { 
    opacity: 0.5; 
  }
}

@media (max-width: 768px) {
  .robot-flotante {
    bottom: 15px;
    right: 15px;
  }
  
  .robot-avatar {
    width: 50px;
    height: 50px;
  }
  
  .robot-cara {
    width: 35px;
    height: 35px;
  }
  
  .mensaje-robot {
    max-width: 180px;
    font-size: 0.85rem;
    padding: 0.8rem 1rem;
  }
}
</style>