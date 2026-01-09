<script setup>
const emit = defineEmits(['close'])

// Закриття по ESC
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') emit('close')
  }
  document.addEventListener('keydown', handleEscape)
  // Блокуємо скрол body
  document.body.style.overflow = 'hidden'

  onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  })
})

// Закриття по overlay
const closeModal = (e) => {
  if (e.target === e.currentTarget) {
    emit('close')
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        @click="closeModal"
      >
        <div
          class="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          @click.stop
        >
          <button
            @click="emit('close')"
            class="absolute top-3 right-3 z-10"
            aria-label="Close modal"
          >
            <svg width="18" height="18" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.0677 18.276L3.83854 29.5052C3.4184 29.9253 2.88368 30.1354 2.23437 30.1354C1.58507 30.1354 1.05035 29.9253 0.630207 29.5052C0.210069 29.0851 0 28.5503 0 27.901C0 27.2517 0.210069 26.717 0.630207 26.2969L11.8594 15.0677L0.630207 3.83854C0.210069 3.4184 0 2.88368 0 2.23437C0 1.58507 0.210069 1.05035 0.630207 0.630207C1.05035 0.210069 1.58507 0 2.23437 0C2.88368 0 3.4184 0.210069 3.83854 0.630207L15.0677 11.8594L26.2969 0.630207C26.717 0.210069 27.2517 0 27.901 0C28.5503 0 29.0851 0.210069 29.5052 0.630207C29.9253 1.05035 30.1354 1.58507 30.1354 2.23437C30.1354 2.88368 29.9253 3.4184 29.5052 3.83854L18.276 15.0677L29.5052 26.2969C29.9253 26.717 30.1354 27.2517 30.1354 27.901C30.1354 28.5503 29.9253 29.0851 29.5052 29.5052C29.0851 29.9253 28.5503 30.1354 27.901 30.1354C27.2517 30.1354 26.717 29.9253 26.2969 29.5052L15.0677 18.276Z" fill="#002160"/>
            </svg>
          </button>

          <div class="p-10 md:p-8">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Анімація появи/зникнення */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>
