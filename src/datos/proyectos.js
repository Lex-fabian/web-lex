import transportherberImg from '../assets/transportherber.png'
import transportherberLogoImg from '../assets/imagen-transportHERBER.png'
import hydrosWebImg from '../assets/hydros-web-login.png'
import hydrosLogoImg from '../assets/imagen-hydros.png'
import hydrosCalendarioImg from '../assets/hydros-calendario.png'
import hydrosUsuarioImg from '../assets/hydros-usuario.png'
import botiAgreImg from '../assets/boti-agre.png'
import botiTablaImg from '../assets/boti-tabla.png'
import botiLoginImg from '../assets/boti-login.png'
import botiRegistrarImg from '../assets/boti-registrar.png'
import botiLogoImg from '../assets/imagen-boti.png'
import savrehLogoImg from '../assets/icono_savreh.png'
import savrehPortadaImg from '../assets/portada-savreh.png'
import savrehMaquinaImg from '../assets/maquina.png'
import savrehProductoImg from '../assets/producto-savreh.png'

export const proyectos = [
  {
    id: 1,
    titulo: 'BotiTrack',
    descripcion: 'Aplicación móvil completa para la gestión y venta de licores. Sistema integral que incluye registro de productos, control de inventario, gestión de ventas y reportes detallados para distribuidores de bebidas alcohólicas.',
    tecnologias: ['Maui', 'SqLite', 'C#', 'XAML'],
    imagen: botiLogoImg,
    imagenDetalle: botiLoginImg,
    imagenesGaleria: [botiLoginImg, botiRegistrarImg, botiAgreImg, botiTablaImg],
    estado: 'Completado',
    año: 2024
  },
  {
    id: 2,
    titulo: 'Hydros Web',
    descripcion: 'Sistema integral de junta de agua con Facturación Electrónica. Plataforma web completa para la gestión de servicios de agua potable, facturación automática, control de medidores y administración de usuarios.',
    tecnologias: ['Node.js', 'MySQL', 'Vue.js', 'SRI Ecuador', 'PDF Generator'],
    imagen: hydrosLogoImg,
    imagenDetalle: hydrosWebImg,
    imagenesGaleria: [hydrosWebImg, hydrosCalendarioImg, hydrosUsuarioImg],
    estado: 'Completado',
    año: 2024
  },
  {
    id: 3,
    titulo: 'Core Financiero',
    descripcion: 'Desarrollo y documentación de la base de datos de un core financiero, incluyendo el diccionario de datos.',
    tecnologias: ['MariaDB'],
    imagen: '/api/placeholder/300/200',
    estado: 'Completado',
    año: 2025
  },
  {
    id: 4,
    titulo: 'Calendar Doc',
    descripcion: 'Sistema de escritorio para agendar citas en un centro odontológico.',
    tecnologias: ['C#', 'Windows Forms', 'SQLite', 'Api Google Calendar'],
    imagen: '/api/placeholder/300/200',
    estado: 'Completado',
    año: 2023
  },
  {
    id: 5,
    titulo: 'TransportHERBER',
    descripcion: 'App movil de gestión de transporte con rutas, vehiculos, conductores y gestion. Plataforma completa con interfaz administrativa y móvil para gestionar el transporte de carga pesada de la empresa TransportHERBER',
    tecnologias: ['Flutter', 'Firebase', 'Dart', 'Flutter Maps', 'Kotlin', 'Swift', 'API REST'],
    imagen: transportherberLogoImg,
    imagenDetalle: transportherberImg,
    estado: 'Completado',
    año: 2025
  },
  {
    id: 6,
    titulo: 'Savreh',
    descripcion: 'Página web moderna desarrollada con las últimas tecnologías. Sitio web responsivo y optimizado que presenta servicios, información empresarial y funcionalidades interactivas con un diseño profesional y experiencia de usuario excepcional.',
    tecnologias: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    imagen: savrehLogoImg,
    imagenDetalle: savrehPortadaImg,
    imagenesGaleria: [savrehPortadaImg, savrehMaquinaImg, savrehProductoImg],
    estado: 'Completado',
    año: 2025
  }
]