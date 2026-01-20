<script setup>
const { locale, setLocale, t } = useI18n()
const isMenuOpen = ref(false)

const menuItems = [
  { key: 'home', href: '#home' },
  { key: 'location', href: '#location' },
  { key: 'sitePlan', href: '#sitePlan' },
  { key: 'specifications', href: '#specifications' },
  { key: 'whyWSRE', href: '#whyWsre' },
  // { key: 'forTenants', href: '#forTenants' },
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

// Блокувати скрол коли меню відкрите
watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Закривати меню при натисканні ESC
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
      closeMenu()
    }
  }
  window.addEventListener('keydown', handleEscape)

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
    document.body.style.overflow = ''
  })
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-main-blue/80 backdrop-blur-md text-white">
    <div class="main-container">
      <div class="flex items-center justify-between h-20">

        <a href="#home" class="flex items-center">
          <img src="/image/logo.webp" class="w-[150px]" alt="">
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="item in menuItems"
            :key="item.key"
            :href="item.href"
            class="text-sm hover:text-main-yellow transition-colors xl:text-lg"
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
            {{ locale === 'en' ? 'UA' : 'ENG' }}
          </button>
          <a
            href="#contact-form"
            class="bg-main-yellow text-[#0B1E3F] px-6 py-3 rounded-lg font-medium hover:bg-[#E5B732] transition-colors flex items-center gap-2"
          >
            {{ $t('header.becomeTenant') }}
            <span class="text-[#0B1E3F]">→</span>
          </a>
        </div>

        <!-- Mobile Actions -->
        <div class="flex lg:hidden items-center gap-4">
          <button
            @click="switchLocale"
            class="text-sm font-medium hover:text-main-yellow transition-colors"
          >
            {{ locale === 'en' ? 'UA' : 'ENG' }}
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
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isMenuOpen"
          class="lg:hidden fixed inset-0 z-40 bg-main-blue"
          @click.self="closeMenu"
        >
          <!-- Menu Content -->
          <div class="h-full flex flex-col pt-20">
            <nav class="flex-1 flex flex-col items-center justify-center gap-8 px-6">
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

            <!-- Bottom Button -->
            <div class="p-6 pb-10 safe-area-bottom">
              <a
                href="#contact-form"
                @click="closeMenu"
                class="block w-full bg-main-yellow text-main-blue text-center px-6 py-4 rounded-lg font-semibold text-lg hover:bg-[#E5B732] transition-colors"
              >
                {{ $t('header.becomeTenant') }}
                <span class="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.safe-area-bottom {
  padding-bottom: max(2.5rem, env(safe-area-inset-bottom));
}
</style>