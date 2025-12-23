<script setup>
const { t } = useI18n();

const cases = computed(() => [
  t('benefits.block1'),
  t('benefits.block2'),
  t('benefits.block3'),
  t('benefits.block4'),
  t('benefits.block5'),
  t('benefits.block6'),
]);

</script>

<template>
  <section class="py-10 xl:py-24">
    <div class="main-container">
      <div class="flex justify-center mb-10 lg:mb-16">
        <MainTitle
          :title="t('benefits.title')"
          mainClass="text-center text-[#212529]"
          imgClass="h-6 -bottom-2 w-[180px] object-bottom -right-20 lg:w-[340px]"
          imgSrc="./image/lineShort.svg"
        />
      </div>
      <div class="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-3">
        <div
          v-for="(item, idx) in cases"
          :key="idx"
          class="bg-main-blue text-white p-6 rounded-[10px] mb-6 flex items-center justify-center xl:h-60"
        >
          <p class="font-bold text-main-yellow text-center xl:text-4xl max-w-[260px]">{{ item }}</p>
        </div>
      </div>
      <div class="flex flex-col items-center mt-7 xl:mt-16">
        <Button
          :text="t('btn-become')"
          variant="primary"
          :href="'#contact'"
          class="mb-4 w-full max-w-[430px]"
        >
          <template #customImg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 5.5H10.5" stroke="#002160" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.5 0.5L10.5 5.5L5.5 10.5" stroke="#002160" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </template>
        </Button>
        <Button
          :text="t('btn-download')"
          variant="secondary"
          :href="'#contact'"
          class="w-full max-w-[430px]"
        >
          <template #customImg>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12.088L3.95543 8.04457L4.76457 7.22171L7.42857 9.88571V0H8.57143V9.88571L11.2343 7.22286L12.0446 8.04457L8 12.088ZM1.84686 16C1.32038 16 0.881143 15.824 0.529143 15.472C0.177143 15.12 0.000761905 14.6804 0 14.1531V11.384H1.14286V14.1531C1.14286 14.3291 1.216 14.4907 1.36229 14.6377C1.50857 14.7848 1.66971 14.8579 1.84571 14.8571H14.1543C14.3295 14.8571 14.4907 14.784 14.6377 14.6377C14.7848 14.4914 14.8579 14.3299 14.8571 14.1531V11.384H16V14.1531C16 14.6796 15.824 15.1189 15.472 15.4709C15.12 15.8229 14.6804 15.9992 14.1531 16H1.84686Z" fill="#4F9CF9"/>
            </svg>
          </template>
        </Button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>