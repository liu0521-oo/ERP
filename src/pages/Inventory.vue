<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <h1 class="text-3xl font-bold mb-8">库存管理</h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">SKU总数</p>
                  <p class="text-2xl font-bold">{{ stats.total }}</p>
                </div>
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">📋</span>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">总库存量</p>
                  <p class="text-2xl font-bold">{{ stats.totalStock }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">🏭</span>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">库存预警</p>
                  <p class="text-2xl font-bold text-orange-500">{{ stats.low }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">⚠️</span>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">缺货商品</p>
                  <p class="text-2xl font-bold text-red-500">{{ stats.out }}</p>
                </div>
                <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">❌</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card overflow-hidden">
            <div class="p-6 border-b border-neutral-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <h2 class="text-lg font-semibold">库存列表</h2>
              <div class="flex gap-3">
                <input
                  v-model="searchKeyword"
                  type="text"
                  placeholder="搜索SKU或商品名称"
                  class="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <select v-model="filterCategory" class="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">全部分类</option>
                  <option value="电子产品">电子产品</option>
                  <option value="服装配饰">服装配饰</option>
                  <option value="家居用品">家居用品</option>
                  <option value="运动户外">运动户外</option>
                  <option value="智能家居">智能家居</option>
                  <option value="箱包配件">箱包配件</option>
                </select>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-neutral-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">SKU</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">商品名称</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase hidden md:table-cell">分类</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">库存</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase hidden sm:table-cell">仓库</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">单价</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">状态</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">操作</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-100">
                  <tr v-for="item in filteredInventory" :key="item.id" class="hover:bg-neutral-50 transition-colors">
                    <td class="px-6 py-4 text-sm font-medium">{{ item.sku }}</td>
                    <td class="px-6 py-4 text-sm">{{ item.name }}</td>
                    <td class="px-6 py-4 text-sm hidden md:table-cell">{{ item.category }}</td>
                    <td class="px-6 py-4 text-sm font-medium">{{ item.stock }} {{ item.unit }}</td>
                    <td class="px-6 py-4 text-sm text-neutral-500 hidden sm:table-cell">{{ item.warehouse }}</td>
                    <td class="px-6 py-4 text-sm font-medium">
                      ${{ item.price.toFixed(2) }}
                    </td>
                    <td class="px-6 py-4">
                      <span :class="getStatusClass(item.status)" class="px-3 py-1 rounded-full text-xs font-medium">
                        {{ getStatusText(item.status) }}
                      </span>
                    </td>
                    <td class="px-6 py-4">
                      <button class="text-primary-600 hover:text-primary-700 text-sm font-medium mr-3">编辑</button>
                      <button class="text-neutral-500 hover:text-neutral-700 text-sm">日志</button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import { inventory, getInventoryStats } from '@/mock/inventory'
import type { Inventory } from '@/types'

const searchKeyword = ref('')
const filterCategory = ref('')
const stats = getInventoryStats()

const filteredInventory = computed(() => {
  return inventory.filter((item: Inventory) => {
    const matchKeyword = !searchKeyword.value ||
      item.sku.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      item.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    const matchCategory = !filterCategory.value || item.category === filterCategory.value
    return matchKeyword && matchCategory
  })
})

const getStatusClass = (status: string) => {
  const classes = {
    normal: 'bg-green-100 text-green-700',
    low: 'bg-orange-100 text-orange-700',
    out: 'bg-red-100 text-red-700'
  }
  return classes[status as keyof typeof classes] || 'bg-neutral-100 text-neutral-700'
}

const getStatusText = (status: string) => {
  const texts = {
    normal: '正常',
    low: '库存不足',
    out: '缺货'
  }
  return texts[status as keyof typeof texts] || status
}
</script>
