<script setup>
const { t } = useI18n()

const list = computed(() => [
  t('location.key1'),
  t('location.key2'),
  t('location.key3'),
  t('location.key4'),
])

const { open } = useModal()
</script>

<template>
  <section class="pt-10 xl:pt-24 bg-[#FCFCFC]" id="location">
    <div class="main-container">
      <MainTitle
        :title="t('location.title')"
        mainClass="text-start text-[#212529]"
        imgClass="h-3 bottom-0 w-[280px] object-bottom left-0 lg:w-[580px] lg:-bottom-1 lg:-left-4"
        imgSrc="/image/line.svg"
      />
      <p class="text-[#3D3E40] my-2.5 lg:my-5 text-lg font-semibold lg:text-[32px]">{{ t('location.subtitle') }}</p>
      <!-- <p class="text-[#3D3E40] lg:text-2xl mb-14 max-w-[750px]">{{ t('location.description') }}</p> -->
      <List
        :list="list"
        class="mt-10 mb-10 space-y-4 xl:space-y-0 xl:gap-6 xl:grid xl:grid-cols-2"
        textClass="text-[#3D3E40]"
      />

      <div class="flex justify-end">

        <Button
          :text="t('location.button')"
          variant="primary"
          :href="'#map'"
          class="w-[280px]"
          @click="open()"
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



<style lang="scss" scoped>

</style>