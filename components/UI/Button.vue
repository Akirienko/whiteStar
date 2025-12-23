<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value)
  },
  href: {
    type: String,
    default: '#'
  },
  target: {
    type: String,
    default: '_self'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  imgClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    :target="target"
    :disabled="disabled"
    @click="emit('click')"
    :class="{
      'bg-main-yellow text-[#002160] hover:bg-[#E5B732]': variant === 'primary',
      'bg-transparent border-2 border-[#4F9CF9] text-[#4F9CF9] hover:bg-blue-50': variant === 'secondary',
      'opacity-50 cursor-not-allowed': disabled
    }"
    class="px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
  >
    {{ text }}
    <img v-if="icon" class="w-4 h-4" :class="imgClass" :src="icon" alt="icon" />
    <slot name="customImg"></slot>
  </component>
</template>

<style scoped>
button {
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
}
</style>
