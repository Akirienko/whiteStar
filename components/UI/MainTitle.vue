<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  mainClass: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    default: ''
  },
  imgClass: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="relative">
    <h3 class="text-2xl font-bold relative z-10 lg:text-7xl" :class="mainClass">
      {{ title }}
    </h3>
    <slot name="decoration">
      <img
        v-if="imgSrc"
        :src="imgSrc"
        class="absolute object-contain"
        :class="imgClass"
        alt="decoration"
      >
    </slot>
  </div>
</template>

<style lang="scss" scoped>

</style>