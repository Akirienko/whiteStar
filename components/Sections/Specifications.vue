<script setup>
  const { t } = useI18n()

  const infoBlocks = computed(()=> [
    {
      imgSrc: '/image/technicalBlocks/block6.webp',
      title: t('specifications.blockTitle6'),
      text: t('specifications.blockText6')
    },
    {
      imgSrc: '/image/technicalBlocks/block2.webp',
      title: t('specifications.blockTitle2'),
      text: t('specifications.blockText2')
    },
    {
      imgSrc: '/image/technicalBlocks/block3.webp',
      title: t('specifications.blockTitle3'),
      text: t('specifications.blockText3')
    },
    {
      imgSrc: '/image/technicalBlocks/block1.webp',
      title: t('specifications.blockTitle1'),
      text: t('specifications.blockText1')
    },
    {
      imgSrc: '/image/technicalBlocks/block7.webp',
      title: t('specifications.blockTitle7'),
      text: t('specifications.blockText7')
    },
    {
      imgSrc: '/image/technicalBlocks/block4.webp',
      title: t('specifications.blockTitle4'),
      text: t('specifications.blockText4')
    },
  ])


</script>

<template>
  <section class="py-10 xl:py-24 bg-main-blue" id="specifications">
    <div class="main-container">
      <MainTitle
        :title="t('specifications.title')"
        mainClass="text-start"
        imgClass="h-3 bottom-0 w-[320px] object-bottom left-0 lg:w-[900px] lg:h-6 lg:-bottom-2 lg:left-8"
        imgSrc="/image/line.svg"
      />
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:gap-12 xl:mt-16">
        <!-- <template > -->
          <div
            v-for="(item, idx) in infoBlocks"
            :key="'top-' + idx"
            class="bg-transparent flex flex-col items-center text-center h-full"
          >
            <img :src="item.imgSrc" :alt="item.title" class="mb-4 h-20 w-20 object-contain" />
            <h3 class="font-semibold xl:text-[28px] xl:mb-2">{{ item.title }}</h3>
            <p class="text-main-yellow w-[150px] font-bold text-lg xl:text-4xl" :class="idx === 0 ? 'xl:w-[120px]' : ''">{{ item.text }}</p>
          </div>
        <!-- </template> -->
      </div>
      <!-- <div class="flex flex-wrap justify-between gap-4">
        <template v-for="(item, idx) in infoBlocks">
          <div
            v-if="idx >= 3"
            :key="'bottom-' + idx"
            class="bg-transparent flex flex-col items-center text-center h-full"
          >
            <img :src="item.imgSrc" :alt="item.title" class="mb-4 h-20 w-20 object-contain" />
            <h3 class="font-semibold xl:text-[28px] xl:mb-2">{{ item.title }}</h3>
            <p
              class="text-main-yellow font-bold text-lg w-[150px] xl:w-[200px] xl:text-[40px] xl:leading-10"
              :class="idx === 5 ? 'xl:w-[300px]' : ''"
            >
              {{ item.text }}
            </p>
          </div>
        </template>
      </div> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>