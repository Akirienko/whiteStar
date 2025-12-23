<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  colorSvg: {
    type: String,
    default: '#002160'
  },
  textClass: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <ul class="space-y-4">
    <li v-for="(item, index) in list" :key="index" class="flex items-center gap-4">
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="flex-shrink-0"
      >
        <path d="M22.208 10.7264V11.6942C22.2067 13.9627 21.4721 16.1701 20.1138 17.987C18.7556 19.8039 16.8464 21.1331 14.6709 21.7763C12.4955 22.4195 10.1705 22.3422 8.04256 21.5561C5.91464 20.7699 4.09785 19.317 2.86315 17.4139C1.62845 15.5108 1.042 13.2596 1.19126 10.9961C1.34052 8.73247 2.21749 6.57777 3.69139 4.85331C5.16528 3.12886 7.15713 1.92704 9.36986 1.42711C11.5826 0.927169 13.8976 1.1559 15.9698 2.07918" :stroke="colorSvg" stroke-width="2.33696" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22.2077 3.27832L11.688 13.8086L8.53204 10.6527" :stroke="colorSvg" stroke-width="2.33696" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="text-lg lg:text-[28px] font-medium leading-relaxed" :class="textClass">{{ item }}</span>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>

<style scoped>

</style>