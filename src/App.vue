<script setup>
import { ref } from 'vue';
import lexyUrl from './assets/lexy.png';

const services = ref([
  { icon: 'laptop-code', title: 'Lading Page / Página Web', description: 'Diseño profesional de páginas web y landing pages personalizadas con código o WordPress, enfocadas en resultados.' },
  { icon: 'code-branch', title: 'Sistema Web', description: 'Desarrollo de sistemas web con interfaces intuitivas y profesionales, optimizados para tu negocio.' },
  { icon: 'users', title: 'Proyecto Estudiantil', description: 'Apoyo y desarrollo de proyectos académicos en diversas tecnologías como Visual Basic, VS Code y MySQL.' },
  { icon: 'file-alt', title: 'Clases Virtuales', description: 'Clases y tutorías privadas para fortalecer tus habilidades de programación en cualquier nivel.' },
  { icon: 'mobile-alt', title: 'Desarrollo Móvil', description: 'Creación de aplicaciones móviles nativas y multiplataforma para iOS y Android.' },
  { icon: 'file-alt', title: 'Documentación', description: 'Elaboración de documentación técnica, diccionarios de datos y guías de usuario claras y precisas.' },
  { icon: 'database', title: 'Base de Datos', description: 'Análisis, diseño y optimización de bases de datos relacionales y no relacionales para un rendimiento superior.' }
]);

const skills = ref([
  { icon: 'database', title: 'Base de Datos', items: ['MariaDB', 'MySQL', 'SQLite', 'Firebase', 'MongoDB', 'SQL Server'] },
  { icon: 'cogs', title: 'Frameworks', items: ['Laravel', 'CodeIgniter', 'Vue.js', 'React.js', 'Node.js', 'Django'] },
  { icon: 'code', title: 'Lenguajes', items: ['PHP', 'JavaScript', 'C#', 'Java'] },
  { icon: 'mobile-alt', title: 'Móvil', items: ['Xamarin', 'MAUI', 'Flutter'] },
  { icon: 'desktop', title: 'Escritorio', items: ['Windows Forms', '.NET'] }
]);

const tools = ref([
  { icon: 'vials', title: 'Pruebas', items: ['Postman', 'Cypress'] },
  { icon: 'code-branch', title: 'Control de Versiones', items: ['Git', 'GitHub', 'GitLab'] },
  { icon: 'project-diagram', title: 'Metodologías', items: ['Kanban', 'Scrum', 'Agile', 'DevOps'] },
  { icon: 'tools', title: 'IDEs y Editores', items: ['Visual Studio Code', 'Visual Studio'] },
  { icon: 'server', title: 'Plataformas', items: ['Docker', 'Firebase', 'Google Console'] }
]);

const experiences = ref([
  { title: 'Desarrollador FullStack', description: 'Análisis, diseño y desarrollo de Sistema de junta de agua con Facturación Electrónica.' },
  { title: 'Creación de Base de Datos', description: 'Desarrollo y documentación de la base de datos de un core financiero, incluyendo el diccionario de datos.' }
]);

const contactForm = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  // Aquí puedes conectar una API o un servicio como EmailJS para enviar el correo.
  console.log('Formulario enviado:', contactForm.value);
  alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
  // Limpiar el formulario
  contactForm.value = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };
};
</script>

<template>
  <div class="contenedor-principal">
    <header class="encabezado">
      <img :src="lexyUrl" alt="Logo de Lexy" />
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="inicio" class="seccion-principal">
        <div class="presentacion">
          <img src="./assets/logotipo.png" alt="Logotipo">
          <p>
            ¿Deseas una landing page, aplicación móvil, o un sistema web/de
            escritorio? Soy lo que buscas. Contáctame y empecemos a crear.
          </p>
          <a href="https://wa.link/vqjlui" target="_blank" rel="noopener noreferrer" class="boton-contacto">Contáctame</a>
        </div>
      </section>

      <section id="servicios" class="seccion-servicios">
        <h2 class="titulo-seccion">Mis Servicios</h2>
        <div class="contenedor-tarjetas">
          <div class="tarjeta" v-for="service in services" :key="service.title">
            <font-awesome-icon :icon="service.icon" class="icono-tarjeta" />
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </section>

      <section id="sobre-mi" class="seccion-sobre-mi">
        <h2 class="titulo-seccion">Sobre Mí</h2>

        <div class="informacion-personal">
          <p><strong>Estudios:</strong> Tecnólogo en Desarrollo de Software</p>
          <p><strong>Edad:</strong> 21 años</p>
          <p><strong>Experiencia:</strong> 1 año y medio</p>
        </div>

        <div class="habilidades">
          <h3 class="subtitulo-seccion">Mis Habilidades</h3>
          <div class="contenedor-tarjetas">
            <div class="tarjeta-habilidad" v-for="skill in skills" :key="skill.title">
              <h4><font-awesome-icon :icon="skill.icon" /> {{ skill.title }}</h4>
              <ul>
                <li v-for="item in skill.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="herramientas">
          <h3 class="subtitulo-seccion">Mis Herramientas</h3>
          <div class="contenedor-tarjetas">
            <div class="tarjeta-habilidad" v-for="tool in tools" :key="tool.title">
              <h4>
                <font-awesome-icon :icon="tool.icon" /> {{ tool.title }}
              </h4>
              <ul>
                <li v-for="item in tool.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="experiencias">
          <h3 class="subtitulo-seccion">Mi Experiencia</h3>
          <ul class="lista-experiencia">
            <li v-for="experience in experiences" :key="experience.title">
              <h4>{{ experience.title }}</h4>
              <p>{{ experience.description }}</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="contacto" class="seccion-contacto">
        <h2 class="titulo-seccion">Contacto</h2>
        <p class="subtitulo-contacto">¿Tienes una idea o un proyecto en mente? ¡Hablemos!</p>
        <form @submit.prevent="handleSubmit" class="formulario-contacto">
          <div class="fila-formulario">
            <div class="grupo-formulario">
              <label for="firstName">Nombre</label>
              <input type="text" id="firstName" v-model="contactForm.firstName" required>
            </div>
            <div class="grupo-formulario">
              <label for="lastName">Apellido</label>
              <input type="text" id="lastName" v-model="contactForm.lastName" required>
            </div>
          </div>
          <div class="grupo-formulario">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" v-model="contactForm.email" required>
          </div>
          <div class="grupo-formulario">
            <label for="message">Asunto / Descripción</label>
            <textarea id="message" v-model="contactForm.message" rows="5" required></textarea>
          </div>
          <button type="submit" class="boton-enviar">Enviar Mensaje</button>
        </form>
      </section>
    </main>
  </div>
</template>
