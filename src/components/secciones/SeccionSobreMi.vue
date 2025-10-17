<template>
  <section id="sobre-mi" class="seccion-sobre-mi">
    <div class="contenedor-seccion">
      <div class="encabezado-seccion">
        <h2 class="titulo-seccion">Sobre Mí</h2>
        <p class="subtitulo-seccion">
          Desarrollador apasionado por crear soluciones digitales innovadoras
        </p>
      </div>
      
      <div class="contenido-sobre-mi">
        <div class="presentacion-personal">
          <div class="texto-presentacion">
            <h3>Hola, soy Lex</h3>
            <p>
              Desarrollador Full Stack con experiencia en múltiples tecnologías y frameworks. 
              Me especializo en crear soluciones digitales que no solo funcionan perfectamente, 
              sino que también ofrecen una experiencia de usuario excepcional.
            </p>
            <p>
              Mi enfoque se centra en escribir código limpio, escalable y mantenible, 
              siempre buscando las mejores prácticas y las tecnologías más actuales 
              para cada proyecto.
            </p>
          </div>
        </div>
        
        <div class="habilidades-seccion">
          <h3 class="subtitulo">Habilidades Técnicas</h3>
          <div class="grilla-habilidades">
            <TarjetaHabilidad 
              v-for="habilidad in habilidades" 
              :key="habilidad.id"
              :habilidad="habilidad"
            />
          </div>
        </div>
        
        <div class="herramientas-seccion">
          <h3 class="subtitulo">Herramientas y Metodologías</h3>
          <div class="grilla-herramientas">
            <div 
              v-for="herramienta in herramientas" 
              :key="herramienta.id"
              class="grupo-herramienta"
            >
              <div class="encabezado-herramienta">
                <font-awesome-icon :icon="herramienta.icono" />
                <h4>{{ herramienta.titulo }}</h4>
              </div>
              <div class="items-herramienta">
                <span 
                  v-for="item in herramienta.items" 
                  :key="item"
                  class="item-herramienta"
                >
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { habilidades, herramientas } from '../../datos/habilidades'
import TarjetaHabilidad from '../ui/TarjetaHabilidad.vue'
</script>

<style scoped>
.seccion-sobre-mi {
  padding: 6rem 0;
  background: var(--color-fondo-gradiente);
  color: var(--color-texto-principal);
  position: relative;
  overflow: hidden;
  transition: var(--transicion-suave);
}

.seccion-sobre-mi::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%);
  pointer-events: none;
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
  margin-bottom: 1rem;
  position: relative;
  color: var(--color-texto-principal);
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

.contenido-sobre-mi {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.presentacion-personal {
  background: var(--color-fondo-principal);
  border-radius: var(--radio-borde-grande);
  padding: 2rem;
  border: 1px solid var(--color-borde-sutil);
  box-shadow: var(--sombra-media);
  transition: var(--transicion-suave);
}

.texto-presentacion h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-acento-principal);
  transition: var(--transicion-suave);
}

.texto-presentacion p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: var(--color-texto-secundario);
  transition: var(--transicion-suave);
}

.subtitulo {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-acento-principal);
  transition: var(--transicion-suave);
}

.grilla-habilidades {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.grilla-herramientas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.grupo-herramienta {
  background: var(--color-fondo-principal);
  border-radius: var(--radio-borde-medio);
  padding: 1.5rem;
  border: 1px solid var(--color-borde-sutil);
  box-shadow: var(--sombra-suave);
  transition: var(--transicion-suave);
}

.grupo-herramienta:hover {
  transform: translateY(-4px);
  border-color: var(--color-borde-medio);
  box-shadow: var(--sombra-intensa);
}

.encabezado-herramienta {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.encabezado-herramienta h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-acento-principal);
  transition: var(--transicion-suave);
}

.items-herramienta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.item-herramienta {
  padding: 0.4rem 0.8rem;
  background: var(--color-fondo-terciario);
  border-radius: var(--radio-borde-pequeno);
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid var(--color-borde-sutil);
  color: var(--color-texto-secundario);
  transition: var(--transicion-suave);
}

.item-herramienta:hover {
  background: var(--color-acento-principal);
  color: var(--blanco-puro);
  border-color: var(--color-acento-principal);
}

@media (max-width: 768px) {
  .grilla-habilidades,
  .grilla-herramientas {
    grid-template-columns: 1fr;
  }
  
  .presentacion-personal {
    padding: 1.5rem;
  }
}
</style>