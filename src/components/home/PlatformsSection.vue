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
          v-for="(platform, index) in displayPlatforms"
          :key="platform.id"
          class="card p-5 sm:p-6 text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          data-aos="zoom-in"
          :data-aos-delay="index * 50"
          data-aos-duration="600"
        >
          <div class="flex items-center justify-center h-12 sm:h-16 mb-3">
            <img :src="platform.logo" :alt="platform.name" class="max-h-full max-w-full object-contain" />
          </div>
          <div class="font-medium text-sm sm:text-base">{{ platform.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { platforms } from '@/constants/platforms'

interface Platform {
  id: string
  logo: string
  name: string
}

const displayPlatforms: Platform[] = platforms.map(p => ({
  id: p.id,
  logo: p.logo!,
  name: p.name
}))
</script>
