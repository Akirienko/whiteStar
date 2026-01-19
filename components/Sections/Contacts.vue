<script setup>
  import emailjs from '@emailjs/browser'

  const { t } = useI18n()

  const form = reactive({
    name: '',
    phone: '',
    email: '',
    companyName: ''
  })
  const isSubmitting = ref(false)
  const submitStatus = ref(null)

  const handlePhoneInput = (event) => {
    const value = event.target.value
    event.target.value = value.replace(/[^0-9+]/g, '')
    form.phone = event.target.value
  }

  const handleSubmit = async () => {
    isSubmitting.value = true
    submitStatus.value = null

    try {
      await emailjs.send(
        'service_gidqttw',
        'template_mbn9psp',
        {
          companyName: form.companyName,
          name: form.name,
          phone: form.phone,
          email: form.email,
        },
        'IDbX4XDhzCp9ykfXP'
      )

      submitStatus.value = 'success'
      Object.keys(form).forEach(key => form[key] = '')

      setTimeout(() => {
        submitStatus.value = null
      }, 3000)

    } catch (error) {
      console.error('Email send failed:', error)
      submitStatus.value = 'error'

      setTimeout(() => {
        submitStatus.value = null
      }, 3000)

    } finally {
      isSubmitting.value = false
    }
  }
</script>

<template>
  <section class="py-10 xl:py-24 bg-main-blue" id="contact-form">
    <div class="main-container">
      <MainTitle
        :title="t('contacts.title')"
        mainClass="text-start"
        imgClass="h-3 bottom-0 w-[120px] object-bottom left-0 lg:w-[200px] lg:h-6 lg:-bottom-4 lg:left-2"
        imgSrc="/image/lineShort.svg"
      />
      <p class="text-base mt-8 lg:text-2xl mb-8 lg:mb-[70px]">{{ t('contacts.subTitle') }}</p>

      <div class="xl:grid xl:grid-cols-2 xl:gap-16">
        <div class="">
          <div class="mb-10 xl:mb-20">
            <div class="flex items-center mb-5">
              <img src="/image/manager.webp" class="w-20 mr-4" alt="manager">
              <div class="">
                <p class="font-semibold text-xl lg:text-3xl">{{ t('contacts.managerName') }}</p>
                <p class="text-base lg:text-2xl">{{ t('contacts.managerPos') }}</p>
              </div>
            </div>
            <div class="">
              <div class="flex items-center mb-2">
                <div class="bg-[#4F9CF9] w-8 h-8 rounded-[50%] mr-2 flex items-center justify-center">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8534 11.2292L12.525 10.9633C12.2513 10.9312 11.9738 10.9615 11.7134 11.052C11.453 11.1425 11.2165 11.2908 11.0217 11.4858L9.33503 13.1725C6.73298 11.8488 4.61792 9.73372 3.2942 7.13167L4.99003 5.43584C5.3842 5.04167 5.5767 4.49167 5.51253 3.9325L5.2467 1.6225C5.19492 1.17525 4.98038 0.76269 4.64396 0.463463C4.30754 0.164235 3.87277 -0.000733398 3.42253 2.45113e-06H1.8367C0.800868 2.45113e-06 -0.0607993 0.861669 0.00336735 1.8975C0.489201 9.72584 6.75003 15.9775 14.5692 16.4633C15.605 16.5275 16.4667 15.6658 16.4667 14.63V13.0442C16.4759 12.1183 15.7792 11.3392 14.8534 11.2292Z" fill="white"/>
                  </svg>

                </div>
                <a href="tel:+48502428693" class="text-base lg:text-2xl hover:text-main-yellow transition-all">+48 502 428 693</a>
              </div>
              <div class="flex items-center">
                <div class="bg-[#4F9CF9] w-8 h-8 rounded-[50%] mr-2 flex items-center justify-center">
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0H1.66667C0.75 0 0.00833333 0.75 0.00833333 1.66667L0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333H15C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667V1.66667C16.6667 0.75 15.9167 0 15 0ZM14.6667 3.54167L8.775 7.225C8.50833 7.39167 8.15833 7.39167 7.89167 7.225L2 3.54167C1.91644 3.49476 1.84327 3.43138 1.78491 3.35538C1.72655 3.27937 1.68422 3.19231 1.66048 3.09948C1.63674 3.00664 1.63209 2.90995 1.6468 2.81526C1.66151 2.72057 1.69528 2.62984 1.74607 2.54858C1.79686 2.46732 1.8636 2.39721 1.94227 2.3425C2.02094 2.28778 2.10989 2.24959 2.20375 2.23025C2.2976 2.2109 2.3944 2.21081 2.4883 2.22996C2.58219 2.24911 2.67122 2.28711 2.75 2.34167L8.33333 5.83333L13.9167 2.34167C13.9954 2.28711 14.0845 2.24911 14.1784 2.22996C14.2723 2.21081 14.3691 2.2109 14.4629 2.23025C14.5568 2.24959 14.6457 2.28778 14.7244 2.3425C14.8031 2.39721 14.8698 2.46732 14.9206 2.54858C14.9714 2.62984 15.0052 2.72057 15.0199 2.81526C15.0346 2.90995 15.0299 3.00664 15.0062 3.09948C14.9824 3.19231 14.9401 3.27937 14.8818 3.35538C14.8234 3.43138 14.7502 3.49476 14.6667 3.54167Z" fill="white"/>
                  </svg>
                </div>
                <a href="mailto:zozulia.yaryna@whitestar-realestate.com" class="text-base lg:text-2xl hover:text-main-yellow transition-all">zozulia.yaryna@whitestar-realestate.com</a>
              </div>
            </div>
          </div>

          <div class="">
            <div class="flex items-center mb-5">
              <img src="/image/partner.webp" class="w-20 mr-4" alt="partner">
              <div class="">
                <p class="font-semibold text-xl lg:text-3xl">{{ t('contacts.partnerName') }}</p>
                <p class="text-base lg:text-2xl">{{ t('contacts.partnerPos') }}</p>
              </div>
            </div>
            <div class="">
              <div class="flex items-center mb-2">
                <div class="bg-[#4F9CF9] w-8 h-8 rounded-[50%] mr-2 flex items-center justify-center">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8534 11.2292L12.525 10.9633C12.2513 10.9312 11.9738 10.9615 11.7134 11.052C11.453 11.1425 11.2165 11.2908 11.0217 11.4858L9.33503 13.1725C6.73298 11.8488 4.61792 9.73372 3.2942 7.13167L4.99003 5.43584C5.3842 5.04167 5.5767 4.49167 5.51253 3.9325L5.2467 1.6225C5.19492 1.17525 4.98038 0.76269 4.64396 0.463463C4.30754 0.164235 3.87277 -0.000733398 3.42253 2.45113e-06H1.8367C0.800868 2.45113e-06 -0.0607993 0.861669 0.00336735 1.8975C0.489201 9.72584 6.75003 15.9775 14.5692 16.4633C15.605 16.5275 16.4667 15.6658 16.4667 14.63V13.0442C16.4759 12.1183 15.7792 11.3392 14.8534 11.2292Z" fill="white"/>
                  </svg>
                </div>
                <a href="tel:+48509257257" class="text-base lg:text-2xl hover:text-main-yellow transition-all">+48 509 257 257</a>
              </div>
              <div class="flex items-center">
                <div class="bg-[#4F9CF9] w-8 h-8 rounded-[50%] mr-2 flex items-center justify-center">
                  <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0H1.66667C0.75 0 0.00833333 0.75 0.00833333 1.66667L0 11.6667C0 12.5833 0.75 13.3333 1.66667 13.3333H15C15.9167 13.3333 16.6667 12.5833 16.6667 11.6667V1.66667C16.6667 0.75 15.9167 0 15 0ZM14.6667 3.54167L8.775 7.225C8.50833 7.39167 8.15833 7.39167 7.89167 7.225L2 3.54167C1.91644 3.49476 1.84327 3.43138 1.78491 3.35538C1.72655 3.27937 1.68422 3.19231 1.66048 3.09948C1.63674 3.00664 1.63209 2.90995 1.6468 2.81526C1.66151 2.72057 1.69528 2.62984 1.74607 2.54858C1.79686 2.46732 1.8636 2.39721 1.94227 2.3425C2.02094 2.28778 2.10989 2.24959 2.20375 2.23025C2.2976 2.2109 2.3944 2.21081 2.4883 2.22996C2.58219 2.24911 2.67122 2.28711 2.75 2.34167L8.33333 5.83333L13.9167 2.34167C13.9954 2.28711 14.0845 2.24911 14.1784 2.22996C14.2723 2.21081 14.3691 2.2109 14.4629 2.23025C14.5568 2.24959 14.6457 2.28778 14.7244 2.3425C14.8031 2.39721 14.8698 2.46732 14.9206 2.54858C14.9714 2.62984 15.0052 2.72057 15.0199 2.81526C15.0346 2.90995 15.0299 3.00664 15.0062 3.09948C14.9824 3.19231 14.9401 3.27937 14.8818 3.35538C14.8234 3.43138 14.7502 3.49476 14.6667 3.54167Z" fill="white"/>
                  </svg>
                </div>
                <a href="mailto:marciniak.pawel@whitestar-realestate.com" class="text-base lg:text-2xl hover:text-main-yellow transition-all">marciniak.pawel@whitestar-realestate.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-10 xl:mt-0">
          <form @submit.prevent="handleSubmit" class="space-y-8" autocomplete="off">
            <div class="relative">
              <label
                for="companyName"
                class="absolute left-0 text-white transition-all duration-200 pointer-events-none"
                :class="form.companyName ? '-top-2 text-xs lg:text-sm' : 'top-3.5 text-base lg:text-xl'"
              >
                {{ t('contacts.formCompanyName') }}
              </label>
              <input
                v-model="form.companyName"
                type="text"
                id="companyName"
                name="companyName"
                autocomplete="off"
                class="w-full bg-transparent border-0 border-b border-white/50 text-white text-base lg:text-xl py-3 px-0 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div class="relative mt-6">
              <label
                for="name"
                class="absolute left-0 text-white transition-all duration-200 pointer-events-none"
                :class="form.name ? '-top-2 text-xs lg:text-sm' : 'top-3.5 text-base lg:text-xl'"
              >
                {{ t('contacts.formName') }}
              </label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                autocomplete="off"
                class="w-full bg-transparent border-0 border-b border-white/50 text-white text-base lg:text-xl py-3 px-0 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div class="relative mt-6">
              <label
                for="phone"
                class="absolute left-0 text-white transition-all duration-200 pointer-events-none"
                :class="form.phone ? '-top-2 text-xs lg:text-sm' : 'top-3.5 text-base lg:text-xl'"
              >
                {{ t('contacts.formPhone') }}
              </label>
              <input
                v-model="form.phone"
                type="tel"
                id="phone"
                name="phone"
                autocomplete="off"
                @input="handlePhoneInput"
                class="w-full bg-transparent border-0 border-b border-white/50 text-white text-base lg:text-xl py-3 px-0 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div class="relative mt-6">
              <label
                for="email"
                class="absolute left-0 text-white transition-all duration-200 pointer-events-none"
                :class="form.email ? '-top-2 text-xs lg:text-sm' : 'top-3.5 text-base lg:text-xl'"
              >
                {{ t('contacts.formEmail') }}
              </label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                name="email"
                autocomplete="off"
                class="w-full bg-transparent border-0 border-b border-white/50 text-white text-base lg:text-xl py-3 px-0 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>

            <div class="flex flex-col items-end gap-4">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap bg-main-yellow text-[#002160] hover:bg-[#E5B732] disabled:opacity-50 disabled:cursor-not-allowed w-72"
              >
                {{ isSubmitting ? t('contacts.sending') : t('contacts.formButton') }}
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5.5H10.5" stroke="#002160" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5.5 0.5L10.5 5.5L5.5 10.5" stroke="#002160" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <div v-if="submitStatus === 'success'" class="text-green-400">
                {{ t('contacts.successMessage') }}
              </div>
              <div v-if="submitStatus === 'error'" class="text-red-400">
                {{ t('contacts.errorMessage') }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped>

</style>