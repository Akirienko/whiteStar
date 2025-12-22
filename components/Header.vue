<script setup>
const { locale, setLocale, t } = useI18n()
const isMenuOpen = ref(false)

const menuItems = [
  { key: 'home', href: '#home' },
  { key: 'location', href: '#location' },
  { key: 'sitePlan', href: '#site-plan' },
  { key: 'specifications', href: '#specifications' },
  { key: 'whyWSRE', href: '#why-wsre' },
  { key: 'forTenants', href: '#for-tenants' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const switchLocale = () => {
  setLocale(locale.value === 'en' ? 'ua' : 'en')
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-main-blue text-white">
    <div class="main-container">
      <div class="flex items-center justify-between h-20">

        <a href="#home" class="flex items-center">
          <img src="../assets/image/logo.webp" class="w-[150px]" alt="">
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="item in menuItems"
            :key="item.key"
            :href="item.href"
            class="text-sm hover:text-main-yellow transition-colors"
          >
            {{ $t(`header.${item.key}`) }}
          </a>
        </nav>

        <!-- Desktop Actions -->
        <div class="hidden lg:flex items-center gap-4">
          <button
            @click="switchLocale"
            class="text-sm font-medium hover:text-main-yellow transition-colors"
          >
            {{ locale === 'en' ? 'ENG' : 'УКР' }}
          </button>
          <a
            href="#become-tenant"
            class="bg-main-yellow text-[#0B1E3F] px-6 py-3 rounded-lg font-medium hover:bg-[#E5B732] transition-colors flex items-center gap-2"
          >
            {{ $t('header.becomeTenant') }}
            <span>→</span>
          </a>
        </div>

        <!-- Mobile Actions -->
        <div class="flex lg:hidden items-center gap-4">
          <button
            @click="switchLocale"
            class="text-sm font-medium hover:text-main-yellow transition-colors"
          >
            {{ locale === 'en' ? 'ENG' : 'УКР' }}
          </button>
          <button
            @click="toggleMenu"
            class="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            :class="{ 'gap-0': isMenuOpen }"
          >
            <span
              class="w-6 h-0.5 bg-white transition-all"
              :class="isMenuOpen ? 'rotate-45 translate-y-2' : ''"
            />
            <span
              class="w-6 h-0.5 bg-white transition-all"
              :class="isMenuOpen ? 'opacity-0' : ''"
            />
            <span
              class="w-6 h-0.5 bg-white transition-all"
              :class="isMenuOpen ? '-rotate-45 -translate-y-2' : ''"
            />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div
        v-if="isMenuOpen"
        class="lg:hidden fixed inset-0 top-20 bg-main-blue flex flex-col"
      >
        <nav class="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          <a
            v-for="item in menuItems"
            :key="item.key"
            :href="item.href"
            @click="closeMenu"
            class="text-2xl font-medium hover:text-main-yellow transition-colors"
          >
            {{ $t(`header.${item.key}`) }}
          </a>
        </nav>
        <div class="p-6 pb-8">
          <a
            href="#become-tenant"
            @click="closeMenu"
            class="block w-full bg-main-yellow text-[#0B1E3F] text-center px-6 py-4 rounded-lg font-medium text-lg hover:bg-[#E5B732] transition-colors"
          >
            {{ $t('header.becomeTenant') }}
            <span class="ml-2">→</span>
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
/* Prevent body scroll when menu is open */
</style>