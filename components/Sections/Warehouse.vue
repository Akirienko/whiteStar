<script setup>
const { t } = useI18n()

</script>

<template>
  <section class="py-10 xl:py-24 bg-main-blue">
    <div class="main-container">
      <MainTitle
        :title="t('warehouse.title')"
        mainClass="text-start"
        imgClass="h-3 -bottom-1 w-[260px] object-bottom -left-10 lg:h-8 lg:w-[600px] lg:-bottom-6 lg:-left-10"
        imgSrc="/image/lineShort.svg"
      />

      <div class="mt-10 md:flex lg:mt-20">
        <div class="mb-8 md:mb-0 md:mr-40">
          <h3 class="font-bold text-2xl lg:text-5xl mb-2.5">{{ t('warehouse.type1') }}</h3>
          <p class="flex items-center text-lg lg:text-3xl font-semibold mb-5">
            <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V9H2V3.437L10.563 12L2 20.563V15H0V24H9V22H3.437L12 13.437L20.563 22H15V24H24V15H22V20.563L13.437 12L22 3.437V9H24V0H15V2H20.563L12 10.563L3.437 2H9V0H0Z" fill="white"/>
            </svg>
            {{ t('warehouse.type1Num') }}
          </p>
          <p class="text-sm lg:text-lg">{{ t('warehouse.type1Desk') }}</p>
          <p class="text-sm lg:text-lg">{{ t('warehouse.type1Desk2') }}</p>
        </div>
        <div class="">
          <h3 class="font-bold text-2xl lg:text-5xl mb-2.5">{{ t('warehouse.type2') }}</h3>
          <p class="flex items-center text-lg lg:text-3xl font-semibold mb-5">
            <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V9H2V3.437L10.563 12L2 20.563V15H0V24H9V22H3.437L12 13.437L20.563 22H15V24H24V15H22V20.563L13.437 12L22 3.437V9H24V0H15V2H20.563L12 10.563L3.437 2H9V0H0Z" fill="white"/>
            </svg>
            {{ t('warehouse.type2Num') }}
          </p>
          <p class="text-sm lg:text-lg">{{ t('warehouse.type2Desk') }}</p>
          <p class="text-sm lg:text-lg">{{ t('warehouse.type2Desk2') }}</p>
        </div>
      </div>
      <div class="flex justify-center lg:justify-end mt-14">
        <Button
          :text="t('warehouse.button')"
          variant="primary"
          :href="'#contact'"
          class="xl:w-[310px]"
        >
          <template #customImg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.088L3.95543 8.04457L4.76457 7.22171L7.42857 9.88571V0H8.57143V9.88571L11.2343 7.22286L12.0446 8.04457L8 12.088ZM1.84686 16C1.32038 16 0.881143 15.824 0.529143 15.472C0.177143 15.12 0.000761905 14.6804 0 14.1531V11.384H1.14286V14.1531C1.14286 14.3291 1.216 14.4907 1.36229 14.6377C1.50857 14.7848 1.66971 14.8579 1.84571 14.8571H14.1543C14.3295 14.8571 14.4907 14.784 14.6377 14.6377C14.7848 14.4914 14.8579 14.3299 14.8571 14.1531V11.384H16V14.1531C16 14.6796 15.824 15.1189 15.472 15.4709C15.12 15.8229 14.6804 15.9992 14.1531 16H1.84686Z" fill="#002160"></path></svg>
          </template>
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>