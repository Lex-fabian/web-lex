<template>
  <section id="contacto" class="seccion-contacto">
    <div class="contenedor-seccion">
      <div class="encabezado-seccion">
        <h2 class="titulo-seccion">¿Hablamos?</h2>
        <p class="subtitulo-seccion">
          ¿Tienes una idea o proyecto en mente? Me encantaría escucharte
        </p>
      </div>
      
      <div class="contenido-contacto">
        <div class="informacion-contacto">
          <div class="tarjeta-info">
            <div class="icono-contacto">
              <font-awesome-icon icon="envelope" />
            </div>
            <h3>Correo Electrónico</h3>
            <p>alexugsha87@gmail.com</p>
          </div>
          
          <div class="tarjeta-info">
            <div class="icono-contacto">
              <font-awesome-icon icon="phone" />
            </div>
            <h3>WhatsApp</h3>
            <p>+593 994755647</p>
            <a 
              href="https://wa.me/593994755647" 
              target="_blank" 
              rel="noopener noreferrer"
              class="enlace-whatsapp"
            >
              <font-awesome-icon icon="paper-plane" />
              Escribir ahora
            </a>
          </div>
          
          <div class="tarjeta-info">
            <div class="icono-contacto">
              <font-awesome-icon icon="clock" />
            </div>
            <h3>Horario de Atención</h3>
            <p>Lun - Vie: 7:00 PM - 10:00 PM</p>
            <p>Disponible para proyectos</p>
          </div>
        </div>
        
        <div class="formulario-seccion">
          <FormularioContacto />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FormularioContacto from '../ui/FormularioContacto.vue'
</script>

<style scoped>
.seccion-contacto {
  padding: 6rem 0;
  background: var(--color-fondo-secundario);
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.seccion-contacto::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(103, 126, 234, 0.1) 0%, transparent 70%);
  animation: rotarLento 20s linear infinite;
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
}

.titulo-seccion {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: var(--color-texto-primario);
  margin-bottom: 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.tema-oscuro .titulo-seccion {
  color: var(--azul-celeste);
}

.titulo-seccion::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(45deg, var(--color-primario), var(--color-secundario));
  border-radius: 2px;
}

.subtitulo-seccion {
  font-size: 1.2rem;
  color: var(--color-texto-secundario);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  transition: color 0.3s ease;
}

.tema-oscuro .subtitulo-seccion {
  color: rgba(255, 255, 255, 0.8);
}

.contenido-contacto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.informacion-contacto {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tarjeta-info {
  background: var(--color-fondo-primario);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: var(--sombra-media);
  transition: all 0.4s ease;
  text-align: center;
  border: 1px solid var(--color-fondo-terciario);
}

.tarjeta-info:hover {
  transform: translateY(-5px);
  box-shadow: var(--sombra-intensa);
}

.icono-contacto {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  overflow: hidden;
}

.icono-contacto::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: rotate(45deg);
  animation: brilloIcono 3s ease-in-out infinite;
}

.icono-contacto svg {
  font-size: 1.8rem;
  color: white;
  z-index: 1;
  position: relative;
}

.tarjeta-info h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-texto-primario);
  margin-bottom: 0.8rem;
}

.tarjeta-info p {
  color: var(--color-texto-secundario);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

.enlace-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #25d366, #128c7e);
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.enlace-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
}

.formulario-seccion {
  background: var(--color-fondo-primario);
  border-radius: 20px;
  box-shadow: var(--sombra-intensa);
  overflow: hidden;
}

@keyframes rotarLento {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes brilloIcono {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  50% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  100% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
}

@media (max-width: 968px) {
  .contenido-contacto {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .informacion-contacto {
    gap: 1.5rem;
  }
  
  .tarjeta-info {
    padding: 1.5rem;
  }
}
</style>