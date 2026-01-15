<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="bg-main-blue pt-32 relative py-10 xl:pb-24 xl:pt-40" id="home">
    <img src="/image/wavemain.webp" class="absolute left-0 bottom-0" alt="wave">
    <div class="main-container z-10 relative">
      <div class="lg:flex lg:items-center">
        <div class="lg:w-[40%]">
          <h1 class="uppercase mb-2 text-2xl font-bold lg:text-7xl">{{ t('main.title') }}</h1>
          <p class="font-semibold mb-6 lg:text-3xl">{{ t('main.subtitle') }}</p>
          <p class="lg:text-lg max-w-[470px]">{{ t('main.subtitletwo') }}</p>
        </div>
        <div class="lg:w-[60%] hidden lg:block">
          <div class="max-w-[800px] rounded-xl overflow-hidden">
            <img src="/image/mainimg.webp" alt="main">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>