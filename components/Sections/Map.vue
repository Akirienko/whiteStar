<script setup>
  const { t } = useI18n()

  const { open } = useModal()
</script>

<template>
  <section class="py-10 xl:py-24">
    <div class="main-container">
      <div class="relative">
        <button @click="open()" class="hidden lg:block bucha-btn text-[#FE9C00] font-semibold bg-white absolute left-[38.6%] top-[17%] h-10 w-[74px] rounded shadow-lg xl:h-12 xl:w-[93px]  macbook-13:text-xl macbook-13:xl:h-14 macbook-13:w-[99px]">
          {{ t('Bucha') }}
        </button>
        <picture>
          <source media="(max-width: 768px)" srcset="/image/mapUAMobile.webp" type="image/webp">
          <img
            src="/image/mapUA.webp"
            alt="map"
            loading="lazy"
            class="w-full h-auto"
          >
        </picture>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bucha-btn {
  animation: pulse 2s ease-in-out infinite;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.4);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>