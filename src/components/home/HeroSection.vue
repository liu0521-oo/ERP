<template>
  <section class="relative h-[90vh] lg:h-screen overflow-hidden">
    <Swiper
      :modules="[Autoplay, EffectFade, Pagination]"
      :effect="'fade'"
      :autoplay="{
        delay: 6000,
        disableOnInteraction: false,
      }"
      :loop="true"
      :speed="1500"
      :allow-touch-move="true"
      :pagination="{
        clickable: true,
      }"
      class="w-full h-full"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index" class="relative">
        <img
          :src="slide.image"
          :alt="slide.title"
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-[10000ms] ease-in-out scale-105"
          :class="{ 'scale-100': currentIndex === index, 'scale-110': currentIndex !== index }"
          loading="eager"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r"
          :class="slide.overlay"
        ></div>
        <div class="absolute inset-0 bg-black/20"></div>

        <div class="container relative z-20 h-full flex items-center">
          <div class="max-w-3xl text-white space-y-6">
            <div class="overflow-hidden">
              <h1
                class="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                :class="{ 'animate-hero-title': currentIndex === index }"
              >
                <span class="inline-block">{{ slide.title }}</span>
                <br />
                <span class="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200">
                  {{ slide.subtitle }}
                </span>
              </h1>
            </div>

            <div class="overflow-hidden">
              <p
                class="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed"
                :class="{ 'animate-hero-subtitle': currentIndex === index }"
              >
                {{ slide.description }}
              </p>
            </div>

            <div
              class="pt-4"
              :class="{ 'animate-hero-buttons': currentIndex === index }"
            >
              <router-link
                to="/about"
                class="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white text-lg font-medium rounded-full hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                了解更多
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>

            <div
              class="grid grid-cols-3 gap-8 pt-10"
              :class="{ 'animate-hero-stats': currentIndex === index }"
            >
              <div class="text-center sm:text-left">
                <div class="text-3xl sm:text-4xl font-bold text-white">500+</div>
                <div class="text-sm text-white/70 mt-1">服务企业</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-3xl sm:text-4xl font-bold text-white">8+</div>
                <div class="text-sm text-white/70 mt-1">平台对接</div>
              </div>
              <div class="text-center sm:text-left">
                <div class="text-3xl sm:text-4xl font-bold text-white">99.9%</div>
                <div class="text-sm text-white/70 mt-1">系统稳定性</div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
    >
      <div class="flex flex-col items-center gap-2">
        <svg class="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

interface Slide {
  image: string
  overlay: string
  title: string
  subtitle: string
  description: string
}

const slides: Slide[] = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    overlay: 'from-primary-900/70 to-secondary-900/50',
    title: '桓晟',
    subtitle: '跨境电商选品首选',
    description: '一站式跨境电商选品解决方案，助您轻松管理多平台订单、智能库存、精准数据分析，实现全球业务快速增长。'
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80',
    overlay: 'from-neutral-900/60 to-primary-900/60',
    title: '全球视野',
    subtitle: '多平台一键对接',
    description: '覆盖全球主流电商平台，API无缝连接，数据实时同步，降低运营成本。'
  },
  {
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
    overlay: 'from-secondary-900/60 to-neutral-900/60',
    title: '智能分析',
    subtitle: '数据驱动决策',
    description: '可视化数据看板，多维度销售分析，精准预测销售趋势，辅助科学决策。'
  }
]

const currentIndex = ref(0)

const onSlideChange = (swiper: any) => {
  currentIndex.value = swiper.realIndex
}
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.4);
  opacity: 1;
  transition: all 0.4s ease;
}

:deep(.swiper-pagination-bullet-active) {
  width: 36px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}

@keyframes heroTitle {
  0% {
    transform: translateY(60px) rotateX(10deg);
    opacity: 0;
  }
  100% {
    transform: translateY(0) rotateX(0);
    opacity: 1;
  }
}

@keyframes heroSubtitle {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes heroButtons {
  0% {
    transform: translateY(20px) scale(0.95);
    opacity: 0;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

@keyframes heroStats {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-hero-title {
  animation: heroTitle 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-hero-subtitle {
  animation: heroSubtitle 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;
}

.animate-hero-buttons {
  animation: heroButtons 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}

.animate-hero-stats {
  animation: heroStats 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
  opacity: 0;
}
</style>
