<script setup>
const { t } = useI18n()


const list = computed(() => [
  t('adaptations.list1'),
  t('adaptations.list2'),
  t('adaptations.list3'),
  t('adaptations.list4'),
  t('adaptations.list5'),
  t('adaptations.list6'),
])
</script>

<template>
  <section class="py-10 xl:py-24 bg-main-blue">
    <div class="main-container">
      <MainTitle
        :title="t('adaptations.title')"
        mainClass="text-start"
        imgClass="h-3 bottom-0 w-[320px] object-bottom left-0 lg:w-[1000px] lg:h-6 lg:-bottom-4 lg:left-2"
        imgSrc="/image/line.svg"
      />
      <div class="lg:mt-10">
        <List
          :list="list"
          colorSvg="#FFE492"
          class="mt-6 mb-10 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-8"
          textClass="text-white"
        />
      </div>
      <div class="flex justify-center lg:justify-end lg:mt-16">
        <Button
          :text="t('adaptations.button')"
          variant="primary"
          :href="'#contact'"
          class="xl:w-[450px]"
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
  </section>
</template>

<style scoped>

</style>