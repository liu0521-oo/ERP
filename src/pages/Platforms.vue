<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <h1 class="text-3xl font-bold mb-8">多平台对接</h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="platform in platforms"
              :key="platform.id"
              class="card p-6 hover:shadow-medium transition-all duration-300"
            >
              <div class="flex items-start mb-4">
                <div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <img v-if="platform.logo" :src="platform.logo" :alt="platform.name" class="max-h-full max-w-full object-contain" />
                  <PlatformLogos v-else :platform-name="platform.name" />
                </div>
              </div>

              <h3 class="text-lg font-semibold mb-2">{{ platform.name }}</h3>

              <div class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-500">今日订单</span>
                  <span class="font-medium">{{ platform.ordersToday.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span class="text-neutral-500">累计订单</span>
                  <span class="font-medium">{{ platform.ordersTotal.toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card p-8 mt-12">
            <h2 class="text-xl font-semibold mb-6">对接优势</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">⚡</span>
                </div>
                <div>
                  <h3 class="font-medium mb-1">实时同步</h3>
                  <p class="text-sm text-neutral-500">订单、库存数据实时同步，自动更新</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">🔄</span>
                </div>
                <div>
                  <h3 class="font-medium mb-1">自动处理</h3>
                  <p class="text-sm text-neutral-500">智能分单、自动分配仓库、批量处理</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">📊</span>
                </div>
                <div>
                  <h3 class="font-medium mb-1">数据统一</h3>
                  <p class="text-sm text-neutral-500">多平台数据集中管理，一目了然</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">🔒</span>
                </div>
                <div>
                  <h3 class="font-medium mb-1">安全可靠</h3>
                  <p class="text-sm text-neutral-500">企业级加密技术，数据安全有保障</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">🎯</span>
                </div>
                <div>
                  <h3 class="font-medium mb-1">精准匹配</h3>
                  <p class="text-sm text-neutral-500">智能SKU映射，自动匹配商品信息</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-xl">💬</span>
                </div>
                <div>
                  <h3 class="font-medium mb-1">专业支持</h3>
                  <p class="text-sm text-neutral-500">专业技术团队，对接全程指导</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
    <FloatingContact />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import PlatformLogos from '@/components/PlatformLogos.vue'
import { platforms } from '@/mock/platforms'
</script>
