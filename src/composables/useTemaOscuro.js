import { ref, watch } from 'vue'

export function useTemaOscuro() {
  const esTemaOscuro = ref(localStorage.getItem('tema-oscuro') === 'true')

  const alternarTema = () => {
    esTemaOscuro.value = !esTemaOscuro.value
  }

  watch(esTemaOscuro, (nuevoValor) => {
    localStorage.setItem('tema-oscuro', nuevoValor.toString())
    if (nuevoValor) {
      document.documentElement.classList.add('tema-oscuro')
    } else {
      document.documentElement.classList.remove('tema-oscuro')
    }
  }, { immediate: true })

  return {
    esTemaOscuro,
    alternarTema
  }
}