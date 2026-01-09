<script setup>
  const { t } = useI18n()

  const infoBlocks = computed(()=> [
    {
      imgSrc: '/image/wsre/wsre1.webp',
      title: t('wsre.itemList1')
    },
    {
      imgSrc: '/image/wsre/wsre2.webp',
      title: t('wsre.itemList2')
    },
    {
      imgSrc: '/image/wsre/wsre3.webp',
      title: t('wsre.itemList3')
    },
    {
      imgSrc: '/image/wsre/wsre4.webp',
      title: t('wsre.itemList4')
    }
  ])


</script>

<template>
  <section class="py-10 xl:py-24 bg-main-blue">
    <div class="main-container">
      <div class="lg:flex lg:items-center">
        <div class="xl:mr-2 xl:w-[680px] shrink-0 macbook-13:xl:mr-20">
          <MainTitle
            :title="t('wsre.title')"
            mainClass="text-start"
            imgClass="h-3 -bottom-1 w-[160px] object-bottom left-12 lg:w-[500px] lg:h-10 lg:-bottom-6 lg:left-40"
            imgSrc="/image/lineShort.svg"
          />
          <p class="lg:text-lg mt-6 lg:mt-10">{{ t('wsre.subtitle') }}</p>
          <div class="flex justify-start mt-8 lg:mt-14">
            <Button
              :text="t('wsre.button')"
              variant="primary"
              :href="'#contact'"
              class="xl:w-[280px]"
            >
              <template #customImg>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5.5H10.5" stroke="#002160" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 0.5L10.5 5.5L5.5 10.5" stroke="#002160" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </template>
            </Button>
          </div>
        </div>

        <div class="mt-10 space-y-8 xl:space-y-0 xl:flex xl:gap-14 xl:py-7">
          <div class="space-y-8 xl:relative xl:bottom-6">
            <template v-for="(item, idx) in infoBlocks">
              <div
                v-if="idx < 2"
                :key="'top-' + idx"
                class="flex items-center xl:flex-col xl:justify-center xl:bg-white xl:w-[250px] xl:h-[270px] xl:rounded-lg"
              >
                <img :src="item.imgSrc" :alt="item.title" class="h-16 w-16 mr-5 object-contain xl:mr-0" />
                <h3
                  class="xl:text-[#0F2137] xl:text-center xl:max-w-[150px]"
                  :class="{
                    'max-w-[230px]': idx === 1,
                  }"
                >{{ item.title }}</h3>
              </div>
            </template>
          </div>
          <div class="space-y-8  xl:relative xl:top-6">
            <template v-for="(item, idx) in infoBlocks">
              <div
                v-if="idx >= 2"
                :key="'bottom-' + idx"
                class="flex items-center xl:flex-col xl:justify-center xl:bg-white xl:w-[250px] xl:h-[270px] xl:rounded-lg"
              >
                <img :src="item.imgSrc" :alt="item.title" class="h-16 w-16 mr-5 object-contain xl:mr-0" />
                <h3
                  class="xl:text-[#0F2137] xl:text-center xl:max-w-[150px]"
                  :class="{
                    'max-w-[230px]': idx === 3,
                  }"
                >{{ item.title }}</h3>
              </div>
            </template>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>