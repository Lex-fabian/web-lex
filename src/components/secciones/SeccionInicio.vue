<template>
  <section id="inicio" class="seccion-hero">
    <div class="contenedor-hero">
      <div class="contenido-hero">
        <div class="presentacion-animada">
          <h1 class="titulo-principal">
            <span class="saludo">Hola, soy</span>
            <span class="nombre-destacado">Lex</span>
          </h1>
          
          <div class="texto-animado">
            <p class="descripcion-principal">
              {{ textoVisible }}
              <span class="cursor-parpadeante">|</span>
            </p>
          </div>
          
          <div class="botones-accion">
            <a 
              href="https://wa.link/vqjlui" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="boton-principal"
            >
              <font-awesome-icon icon="paper-plane" />
              Contactar Ahora
            </a>
            
            <a href="#proyectos" class="boton-secundario">
              <font-awesome-icon icon="eye" />
              Ver Proyectos
            </a>
          </div>
        </div>
        
        <div class="imagen-hero">
          <div class="contenedor-imagen">
            <img src="../../assets/logotipo.png" alt="Lex Portfolio" class="logotipo-principal">
            <div class="efectos-particulas"></div>
          </div>
        </div>
      </div>
      
      <div class="indicador-scroll">
        <div class="scroll-animacion"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useEscrituraTexto } from '../../composables/useAnimaciones'

const textoCompleto = "Desarrollador Full Stack especializado en crear soluciones digitales innovadoras. ¿Necesitas una landing page, aplicación móvil o sistema web? Transformemos tu idea en realidad."
const { textoVisible } = useEscrituraTexto(textoCompleto, 30)
</script>

<style scoped>
.seccion-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--color-fondo-principal) 0%, var(--color-fondo-secundario) 100%);
  position: relative;
  overflow: hidden;
  transition: var(--transicion-suave);
}

.seccion-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

.contenedor-hero {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.contenido-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 80vh;
}

.presentacion-animada {
  color: var(--color-texto-principal);
  animation: deslizarDesdeIzquierda 1s ease-out;
  transition: var(--transicion-suave);
}

.titulo-principal {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.saludo {
  display: block;
  font-size: 0.6em;
  font-weight: 300;
  opacity: 0.9;
  animation: aparecerFade 1s ease-out 0.5s both;
}

.nombre-destacado {
  display: block;
  font-weight: 700;
  color: var(--color-acento-principal);
  animation: brillar 2s ease-in-out infinite alternate;
  transition: var(--transicion-suave);
}

.descripcion-principal {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.95;
  min-height: 4em;
}

.cursor-parpadeante {
  animation: parpadear 1s infinite;
  color: var(--color-acento-principal);
}

.botones-accion {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.boton-principal, .boton-secundario {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.boton-principal {
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
  box-shadow: var(--sombra-media);
  border: none;
  transition: var(--transicion-suave);
}

.boton-principal:hover {
  transform: translateY(-2px);
  background: var(--color-acento-hover);
  box-shadow: var(--sombra-intensa);
}

.boton-secundario {
  background: transparent;
  color: var(--color-texto-principal);
  border: 2px solid var(--color-borde-medio);
  transition: var(--transicion-suave);
}

.boton-secundario:hover {
  background: var(--color-fondo-terciario);
  border-color: var(--color-acento-principal);
  color: var(--color-acento-principal);
  transform: translateY(-2px);
}

.imagen-hero {
  display: flex;
  justify-content: center;
  animation: deslizarDesdeDerecha 1s ease-out;
}

.contenedor-imagen {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logotipo-principal {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
  animation: flotar 3s ease-in-out infinite;
}

.efectos-particulas {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 2px, transparent 2px);
  background-size: 50px 50px;
  animation: rotar 20s linear infinite;
  opacity: 0.6;
}

.indicador-scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-animacion {
  width: 2px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, white, transparent);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes deslizarDesdeIzquierda {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes deslizarDesdeDerecha {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes aparecerFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 0.9;
    transform: translateY(0);
  }
}

@keyframes brillar {
  from {
    filter: brightness(1);
  }
  to {
    filter: brightness(1.2);
  }
}

@keyframes parpadear {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes flotar {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes rotar {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes scroll {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(20px); }
}

@media (max-width: 768px) {
  .contenido-hero {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .botones-accion {
    justify-content: center;
  }

  .contenedor-imagen {
    width: 300px;
    height: 300px;
  }
}
</style>