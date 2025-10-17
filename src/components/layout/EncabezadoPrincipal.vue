<template>
  <header class="encabezado-moderno">
    <div class="contenedor-encabezado">
      <div class="logo-seccion">
        <a href="#inicio" @click="cerrarMenu" class="logo-enlace">
          <img :src="logoUrl" alt="Lex Portfolio" class="logo-principal">
        </a>
      </div>
      
      <nav class="navegacion-principal" :class="{ 'activa': menuAbierto }">
        <ul class="lista-navegacion">
          <li v-for="item in elementosMenu" :key="item.id">
            <a :href="item.enlace" @click="cerrarMenu" class="enlace-navegacion">
              {{ item.texto }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="controles-encabezado">
        <button 
          class="boton-tema" 
          @click="alternarTema"
          :aria-label="esTemaOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        >
          <font-awesome-icon :icon="esTemaOscuro ? 'sun' : 'moon'" />
        </button>

        <button 
          class="boton-menu-movil" 
          @click="alternarMenu"
          :aria-expanded="menuAbierto"
          aria-label="Menú de navegación"
        >
          <span class="linea-hamburguesa" :class="{ 'activa': menuAbierto }"></span>
          <span class="linea-hamburguesa" :class="{ 'activa': menuAbierto }"></span>
          <span class="linea-hamburguesa" :class="{ 'activa': menuAbierto }"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import logoUrl from '../../assets/lexy.png'
import { useTemaOscuro } from '../../composables/useTemaOscuro'

const { esTemaOscuro, alternarTema } = useTemaOscuro()
const menuAbierto = ref(false)

const elementosMenu = [
  { id: 1, texto: 'Inicio', enlace: '#inicio' },
  { id: 2, texto: 'Servicios', enlace: '#servicios' },
  { id: 3, texto: 'Sobre Mí', enlace: '#sobre-mi' },
  { id: 4, texto: 'Proyectos', enlace: '#proyectos' },
  { id: 5, texto: 'Contacto', enlace: '#contacto' }
]

const alternarMenu = () => {
  menuAbierto.value = !menuAbierto.value
}

const cerrarMenu = () => {
  menuAbierto.value = false
}
</script>

<style scoped>
.encabezado-moderno {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
}

.tema-oscuro .encabezado-moderno {
  background: rgba(18, 18, 18, 0.95);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

.contenedor-encabezado {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-principal {
  height: 50px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo-enlace {
  display: inline-block;
  text-decoration: none;
}

.logo-principal:hover {
  transform: scale(1.05);
}

.navegacion-principal {
  display: flex;
}

.lista-navegacion {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.enlace-navegacion {
  text-decoration: none;
  color: var(--color-texto-primario);
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
}

.controles-encabezado {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.boton-tema {
  background: none;
  border: none;
  color: var(--color-texto-primario);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
}

.boton-tema:hover {
  background: var(--color-fondo-secundario);
  transform: rotate(180deg);
}

.enlace-navegacion::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(45deg, var(--color-primario), var(--color-secundario));
  transition: width 0.3s ease;
}

.enlace-navegacion:hover {
  color: var(--color-acento);
}

.enlace-navegacion:hover::after {
  width: 100%;
}

.boton-menu-movil {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.linea-hamburguesa {
  width: 25px;
  height: 3px;
  background: #333333;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.tema-oscuro .linea-hamburguesa {
  background: #ffffff;
}

.linea-hamburguesa.activa:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.linea-hamburguesa.activa:nth-child(2) {
  opacity: 0;
}

.linea-hamburguesa.activa:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

@media (max-width: 768px) {
  .navegacion-principal {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
  }

  .tema-oscuro .navegacion-principal {
    background: rgba(18, 18, 18, 0.98);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .navegacion-principal.activa {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .lista-navegacion {
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;
  }

  .enlace-navegacion {
    display: block;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
  }

  .tema-oscuro .enlace-navegacion {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .boton-menu-movil {
    display: flex;
  }

  .contenedor-encabezado {
    padding: 1rem;
  }
}
</style>