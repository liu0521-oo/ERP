<template>
  <section class="section bg-neutral-50">
    <div class="container">
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">支持平台</h2>
        <p class="text-neutral-600 max-w-2xl mx-auto">
          覆盖全球主流电商平台，一键对接，数据实时同步
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        <div
          v-for="(platform, index) in platforms"
          :key="platform.id"
          class="card p-5 sm:p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
          data-aos-duration="600"
        >
          <div class="flex items-center justify-center h-12 sm:h-10 mb-3">
            <PlatformLogos :platform-name="platform.name" />
          </div>
          <div class="font-medium text-sm sm:text-base">{{ platform.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PlatformLogos from '@/components/PlatformLogos.vue'

interface Platform {
  id: string
  icon: string
  name: string
}

const platforms: Platform[] = [
  { id: '1', icon: '🛒', name: 'Amazon' },
  { id: '2', icon: '🏪', name: 'eBay' },
  { id: '3', icon: '🛍️', name: 'Shopee' },
  { id: '4', icon: '🔵', name: 'Ozone' },
  { id: '5', icon: '📱', name: 'TikTok Shop' },
  { id: '6', icon: '🎁', name: 'Temu' }
]
</script>
