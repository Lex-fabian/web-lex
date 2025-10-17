import { ref, reactive } from 'vue'

export function useFormulario() {
  const formulario = reactive({
    nombre: '',
    apellido: '',
    correo: '',
    mensaje: ''
  })

  const enviando = ref(false)
  const errores = ref({})

  const validarFormulario = () => {
    errores.value = {}

    if (!formulario.nombre.trim()) {
      errores.value.nombre = 'El nombre es requerido'
    }

    if (!formulario.apellido.trim()) {
      errores.value.apellido = 'El apellido es requerido'
    }

    if (!formulario.correo.trim()) {
      errores.value.correo = 'El correo es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formulario.correo)) {
      errores.value.correo = 'El correo no es válido'
    }

    if (!formulario.mensaje.trim()) {
      errores.value.mensaje = 'El mensaje es requerido'
    }

    return Object.keys(errores.value).length === 0
  }

  const enviarFormulario = async () => {
    if (!validarFormulario()) return

    enviando.value = true

    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Formulario enviado:', formulario)
      
      Object.keys(formulario).forEach(key => {
        formulario[key] = ''
      })
      
      return { exito: true, mensaje: '¡Mensaje enviado correctamente!' }
    } catch (error) {
      return { exito: false, mensaje: 'Error al enviar el mensaje' }
    } finally {
      enviando.value = false
    }
  }

  return {
    formulario,
    errores,
    enviando,
    enviarFormulario
  }
}