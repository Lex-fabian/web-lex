import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faLaptopCode, faMobileAlt, faDatabase, faUsers, faFileAlt,
  faCodeBranch, faCogs, faCode, faDesktop, faVials, faTools,
  faProjectDiagram, faServer, faBars, faTimes, faPaperPlane,
  faEye, faCalculator, faEnvelope, faPhone, faClock, faUser,
  faComment, faSpinner, faSun, faMoon
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faLaptopCode, faMobileAlt, faDatabase, faUsers, faFileAlt,
  faCodeBranch, faCogs, faCode, faDesktop, faVials, faTools,
  faProjectDiagram, faServer, faBars, faTimes, faPaperPlane,
  faEye, faCalculator, faEnvelope, faPhone, faClock, faUser,
  faComment, faSpinner, faSun, faMoon
)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
