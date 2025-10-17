<template>
  <form @submit.prevent="manejarEnvio" class="formulario-contacto">
    <div class="encabezado-formulario">
      <h3>Envíame un mensaje</h3>
      <p>Cuéntame sobre tu proyecto y te responderé pronto</p>
    </div>
    
    <div class="campos-formulario">
      <div class="fila-campos">
        <div class="grupo-campo">
          <label for="nombre" class="etiqueta-campo">
            <font-awesome-icon icon="user" />
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            v-model="formulario.nombre"
            class="campo-entrada"
            :class="{ 'campo-error': errores.nombre }"
            placeholder="Tu nombre"
            required
          >
          <span v-if="errores.nombre" class="mensaje-error">
            {{ errores.nombre }}
          </span>
        </div>
        
        <div class="grupo-campo">
          <label for="apellido" class="etiqueta-campo">
            <font-awesome-icon icon="user" />
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            v-model="formulario.apellido"
            class="campo-entrada"
            :class="{ 'campo-error': errores.apellido }"
            placeholder="Tu apellido"
            required
          >
          <span v-if="errores.apellido" class="mensaje-error">
            {{ errores.apellido }}
          </span>
        </div>
      </div>
      
      <div class="grupo-campo">
        <label for="correo" class="etiqueta-campo">
          <font-awesome-icon icon="envelope" />
          Correo Electrónico
        </label>
        <input
          type="email"
          id="correo"
          v-model="formulario.correo"
          class="campo-entrada"
          :class="{ 'campo-error': errores.correo }"
          placeholder="tu@correo.com"
          required
        >
        <span v-if="errores.correo" class="mensaje-error">
          {{ errores.correo }}
        </span>
      </div>
      
      <div class="grupo-campo">
        <label for="mensaje" class="etiqueta-campo">
          <font-awesome-icon icon="comment" />
          Mensaje
        </label>
        <textarea
          id="mensaje"
          v-model="formulario.mensaje"
          class="campo-entrada campo-textarea"
          :class="{ 'campo-error': errores.mensaje }"
          rows="5"
          placeholder="Cuéntame sobre tu proyecto o idea..."
          required
        ></textarea>
        <span v-if="errores.mensaje" class="mensaje-error">
          {{ errores.mensaje }}
        </span>
      </div>
    </div>
    
    <button 
      type="submit" 
      class="boton-enviar"
      :disabled="enviando"
    >
      <font-awesome-icon 
        :icon="enviando ? 'spinner' : 'paper-plane'" 
        :class="{ 'girando': enviando }"
      />
      {{ enviando ? 'Enviando...' : 'Enviar Mensaje' }}
    </button>
    
    <div v-if="mensajeEstado" class="mensaje-estado" :class="tipoMensaje">
      {{ mensajeEstado }}
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useFormulario } from '../../composables/useFormulario'

const { formulario, errores, enviando, enviarFormulario } = useFormulario()

const mensajeEstado = ref('')
const tipoMensaje = ref('')

const manejarEnvio = async () => {
  const resultado = await enviarFormulario()
  
  mensajeEstado.value = resultado.mensaje
  tipoMensaje.value = resultado.exito ? 'exito' : 'error'
  
  setTimeout(() => {
    mensajeEstado.value = ''
    tipoMensaje.value = ''
  }, 5000)
}
</script>

<style scoped>
.formulario-contacto {
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.encabezado-formulario {
  margin-bottom: 2rem;
}

.encabezado-formulario h3 {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-texto-primario);
  margin-bottom: 0.5rem;
}

.encabezado-formulario p {
  color: var(--color-texto-secundario);
  font-size: 0.95rem;
}

.campos-formulario {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
}

.fila-campos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.grupo-campo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.etiqueta-campo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--color-texto-primario);
  font-size: 0.9rem;
}

.campo-entrada {
  padding: 1rem;
  border: 2px solid var(--color-fondo-terciario);
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: var(--color-fondo-secundario);
  color: var(--color-texto-primario);
}

.campo-entrada:focus {
  outline: none;
  border-color: var(--color-acento);
  background: var(--color-fondo-primario);
  box-shadow: 0 0 0 3px rgba(26, 35, 126, 0.1);
}

.campo-entrada.campo-error {
  border-color: var(--color-error);
  background: rgba(231, 76, 60, 0.05);
}

.campo-textarea {
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
}

.mensaje-error {
  font-size: 0.8rem;
  color: var(--color-error);
  margin-top: 0.25rem;
}

.boton-enviar {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.boton-enviar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.boton-enviar:hover::before {
  left: 100%;
}

.boton-enviar:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(26, 35, 126, 0.3);
}

.boton-enviar:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.girando {
  animation: girar 1s linear infinite;
}

.mensaje-estado {
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  margin-top: 1rem;
}

.mensaje-estado.exito {
  background: rgba(46, 204, 113, 0.1);
  color: #27ae60;
  border: 1px solid rgba(46, 204, 113, 0.3);
}

.mensaje-estado.error {
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
  border: 1px solid rgba(231, 76, 60, 0.3);
}

@keyframes girar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .formulario-contacto {
    padding: 2rem;
  }
  
  .fila-campos {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .formulario-contacto {
    padding: 1.5rem;
  }
}
</style>