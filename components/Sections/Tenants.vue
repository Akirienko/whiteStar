<script setup>
const { t } = useI18n()

const list = computed(() => [
  t('tenants.itemList1'),
  t('tenants.itemList2'),
  t('tenants.itemList3'),
  t('tenants.itemList4'),
  t('tenants.itemList5'),
  t('tenants.itemList6'),
  t('tenants.itemList7'),
])


</script>

<template>
  <section class="py-10 xl:py-24 relative bg-[#FCFCFC]" id="forTenants">
    <div class="main-container">
      <img src="/image/tenants/tenantsWave.webp" class="absolute bottom-0 left-0 h-[60%] w-[80%] xl:h-[40%] xl:w-[15%] xl:z-10" alt="wave">

      <div class="xl:flex xl:items-center xl:justify-center gap-28">
        <div class="hidden xl:flex relative w-[620px] shrink-0 justify-center">


            <img src="/image/tenants/tenantsMain.webp" class="z-10 relative w-[500px] h-[630px]" alt="tenants">
            <img src="/image/tenants/tenantsSimb.webp" class="absolute z-20 top-20 left-0 w-[628px] h-[460px] object-contain" alt="tenants">
            <img src="/image/tenants/tenantsDots.webp" class="absolute z-0 -top-10 -right-32 w-[342px] h-[346px] object-contain" alt="tenants">
            <div class="border-2 border-[#FFE492] w-[500px] h-[630px] absolute right-10 bottom-5"></div>

        </div>
        <div class="">
          <MainTitle
            :title="t('tenants.title')"
            mainClass="text-start text-[#212529]"
            imgClass="h-3 bottom-0 w-[320px] object-bottom left-0 lg:w-[1000px] lg:h-6 lg:-bottom-4 lg:left-2"
            imgSrc="/image/line.svg"
          />
          <List
            :list="list"
            colorSvg="#002160"
            class="mt-6 space-y-4 lg:mt-8"
            textClass="text-[#3D3E40]"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>