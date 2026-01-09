<script setup>
  import List from '../UI/List.vue';

  const { t } = useI18n()

  const list = computed(() => [
    t('offers.itemList1'),
    t('offers.itemList2'),
    t('offers.itemList3'),
    t('offers.itemList4'),
    t('offers.itemList5'),
  ])

</script>

<template>
  <section class="py-10 xl:py-24">
    <div class="main-container">
      <div class="lg:flex lg:items-center">
        <div class="hidden lg:block w-[580px] mr-20 xl:mr-40">
          <img src="/image/offersImg.webp" alt="offers">
        </div>
        <div class="">
          <MainTitle
            :title="t('offers.title')"
            mainClass="text-start text-[#212529]"
            imgClass="h-3 bottom-0 w-[280px] object-bottom left-0 lg:w-[580px] lg:-bottom-1 lg:-left-4"
            imgSrc="/image/lineShort.svg"
          />

          <List
            :list="list"
            class="mt-6 space-y-4 lg:mt-8"
            textClass="text-[#002160]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>