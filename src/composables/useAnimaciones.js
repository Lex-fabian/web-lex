import { ref, onMounted } from 'vue'

export function useAnimaciones() {
  const elementosVisibles = ref(new Set())

  const observarElemento = (elemento) => {
    if (!elemento) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            elementosVisibles.value.add(entry.target.id)
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(elemento)
  }

  const esVisible = (id) => elementosVisibles.value.has(id)

  return {
    elementosVisibles,
    observarElemento,
    esVisible
  }
}

export function useEscrituraTexto(texto, velocidad = 50) {
  const textoVisible = ref('')
  const indiceActual = ref(0)

  const iniciarEscritura = () => {
    if (indiceActual.value < texto.length) {
      textoVisible.value += texto[indiceActual.value]
      indiceActual.value++
      setTimeout(iniciarEscritura, velocidad)
    }
  }

  onMounted(() => {
    setTimeout(iniciarEscritura, 1000)
  })

  return { textoVisible }
}