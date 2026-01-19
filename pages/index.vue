
<script setup>

  const { isOpen, close } = useModal()

</script>

<template>
  <Hero />
  <Benefits />
  <Location />
  <Map />
  <div class="bg-main-blue">
    <Specifications />
    <Adaptations />
    <Warehouse />
  </div>
  <Tenants />
  <WSRE />
  <Offers />

  <div class="bg-main-blue">
    <Contacts />
    <Footer />
  </div>



  <Modal v-if="isOpen" @close="close">
    <img src="/image/mapUAMobile.webp" alt="map">
  </Modal>
</template>


<style scoped>

</style>