<template>
  <section class="section bg-neutral-50">
    <div class="container">
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">支持平台</h2>
        <p class="text-neutral-600 max-w-2xl mx-auto">
          覆盖全球主流电商平台，一键对接，数据实时同步
        </p>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        <div
          v-for="(platform, index) in platforms"
          :key="platform.id"
          class="card p-6 text-center hover:shadow-medium transition-all duration-300"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
          data-aos-duration="600"
        >
          <div class="text-4xl mb-3">{{ platform.icon }}</div>
          <div class="font-medium text-sm">{{ platform.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Platform {
  id: string
  icon: string
  name: string
}

const platforms: Platform[] = [
  { id: '1', icon: '🛒', name: 'Amazon' },
  { id: '2', icon: '🏪', name: 'eBay' },
  { id: '3', icon: '🛍️', name: 'Shopee' },
  { id: '4', icon: '🌏', name: 'Lazada' },
  { id: '5', icon: '📱', name: 'TikTok Shop' },
  { id: '6', icon: '🎁', name: 'Temu' },
  { id: '7', icon: '🌐', name: 'AliExpress' },
  { id: '8', icon: '🏬', name: 'Walmart' },
  { id: '9', icon: '🇯🇵', name: 'Rakuten' },
  { id: '10', icon: '🇰🇷', name: 'Coupang' },
  { id: '11', icon: '🇲🇽', name: 'Mercado Libre' },
  { id: '12', icon: '➕', name: '更多平台' }
]
</script>
