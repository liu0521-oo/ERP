<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <h1 class="text-3xl font-bold mb-8">库存管理</h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div class="card p-5">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-neutral-500 mb-1.5">SKU总数</p>
                  <p class="text-3xl font-bold text-primary-600">{{ formatNumber(stats.total) }}</p>
                  <p class="text-xs text-neutral-400 mt-1.5">{{ categories.length }} 个分类</p>
                </div>
                <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                  <span class="text-2xl">📋</span>
                </div>
              </div>
            </div>
            <div class="card p-5">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-neutral-500 mb-1.5">总库存量</p>
                  <p class="text-3xl font-bold text-blue-600">{{ formatNumber(stats.totalStock) }}</p>
                  <p class="text-xs text-neutral-400 mt-1.5">{{ warehouses.length }} 个仓库</p>
                </div>
                <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                  <span class="text-2xl">🏭</span>
                </div>
              </div>
            </div>
            <div class="card p-5">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-neutral-500 mb-1.5">库存预警</p>
                  <p class="text-3xl font-bold text-orange-500">{{ formatNumber(stats.low) }}</p>
                  <p class="text-xs text-neutral-400 mt-1.5">需要补货</p>
                </div>
                <div class="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                  <span class="text-2xl">⚠️</span>
                </div>
              </div>
            </div>
            <div class="card p-5">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-xs text-neutral-500 mb-1.5">正常库存</p>
                  <p class="text-3xl font-bold text-green-600">{{ formatNumber(stats.normal) }}</p>
                  <p class="text-xs text-neutral-400 mt-1.5">库存充足</p>
                </div>
                <div class="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
                  <span class="text-2xl">✅</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div class="lg:col-span-3 card overflow-hidden">
            <div class="p-6 border-b border-neutral-100">
              <div class="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center mb-5">
                <div>
                  <h2 class="text-lg font-semibold">库存列表</h2>
                  <p class="text-sm text-neutral-500">共 {{ filteredInventory.length }} 条记录</p>
                </div>
                <div class="flex flex-wrap gap-3 w-full lg:w-auto">
                  <div class="relative flex-1 sm:flex-none">
                    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      v-model="searchKeyword"
                      type="text"
                      placeholder="搜索SKU或商品名称"
                      class="w-full sm:w-64 pl-10 pr-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <select v-model="filterCategory" class="px-4 py-2.5 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white transition-all">
                    <option value="">全部分类</option>
                    <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
                  </select>
                </div>
              </div>

            </div>

            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-gradient-to-r from-neutral-50 to-neutral-100">
                  <tr>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">SKU</th>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">商品名称</th>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider hidden md:table-cell">分类</th>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">库存</th>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider hidden sm:table-cell">仓库</th>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">单价</th>
                    <th class="px-5 py-3.5 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">状态</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-100">
                  <tr v-for="item in filteredInventory.slice(0, 20)" :key="item.id">
                    <td class="px-5 py-4">
                      <code class="text-xs font-mono bg-neutral-100 px-2 py-1 rounded text-primary-700">{{ item.sku }}</code>
                    </td>
                    <td class="px-5 py-4">
                      <div class="text-sm font-medium text-neutral-900">{{ item.name }}</div>
                      <div class="text-xs text-neutral-500 mt-0.5">ID: {{ item.id }}</div>
                    </td>
                    <td class="px-5 py-4 hidden md:table-cell">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-purple-50 text-purple-700">
                        {{ item.category }}
                      </span>
                    </td>
                    <td class="px-5 py-4">
                      <div class="text-sm font-semibold" :class="item.stock < 50 ? 'text-orange-600' : item.stock === 0 ? 'text-red-600' : 'text-neutral-900'">
                        {{ formatNumber(item.stock) }} {{ item.unit }}
                      </div>
                    </td>
                    <td class="px-5 py-4 text-sm text-neutral-500 hidden sm:table-cell">{{ item.warehouse }}</td>
                    <td class="px-5 py-4 text-sm font-medium text-neutral-900">¥{{ item.price.toFixed(2) }}</td>
                    <td class="px-5 py-4">
                      <span :class="getInventoryStatusClass(item.status)" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                        <span v-if="item.status === 'normal'" class="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-500"></span>
                        <span v-if="item.status === 'low'" class="w-1.5 h-1.5 mr-1.5 rounded-full bg-orange-500"></span>
                        <span v-if="item.status === 'out'" class="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-500"></span>
                        {{ getInventoryStatusText(item.status) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div v-if="filteredInventory.length === 0" class="p-12 text-center">
              <svg class="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-lg font-medium text-neutral-900 mb-1">未找到相关商品</h3>
              <p class="text-sm text-neutral-500">请尝试其他搜索关键词或筛选条件</p>
            </div>
            </div>

            <div class="lg:col-span-1 card p-5">
              <h3 class="text-sm font-semibold text-neutral-900 mb-4">仓库分布</h3>
              <div class="space-y-4">
                <div v-for="wh in warehouseStats" :key="wh.name">
                  <div class="flex justify-between items-center mb-1.5">
                    <span class="text-sm text-neutral-600">{{ wh.name }}</span>
                    <span class="text-xs font-medium text-neutral-900">{{ formatNumber(wh.count) }} SKU</span>
                  </div>
                  <div class="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full transition-all duration-500" :style="{ width: wh.percent + '%' }"></div>
                  </div>
                </div>
              </div>

              <div class="mt-6 pt-5 border-t border-neutral-100">
                <h4 class="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">分类占比</h4>
                <div class="grid grid-cols-2 gap-2">
                  <div v-for="cat in categoryStats" :key="cat.name" class="bg-neutral-50 rounded-lg p-2.5 text-center">
                    <div class="text-xs text-neutral-500 mb-1">{{ cat.name }}</div>
                    <div class="text-sm font-bold text-neutral-900">{{ formatNumber(cat.count) }}</div>
                  </div>
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
import { ref, computed } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import { inventory, getInventoryStats } from '@/mock/inventory'
import type { Inventory } from '@/types'
import { formatNumber, getInventoryStatusClass, getInventoryStatusText } from '@/utils/format'

const searchKeyword = ref('')
const filterCategory = ref('')
const stats = getInventoryStats()
const categories = ['电子产品', '服装配饰', '家居用品', '运动户外', '智能家居', '箱包配件']
const warehouses = ['深圳仓', '广州仓', '东莞仓', '杭州仓', '上海仓']

const filteredInventory = computed(() => {
  return inventory.filter((item: Inventory) => {
    const matchKeyword = !searchKeyword.value ||
      item.sku.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
      item.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    const matchCategory = !filterCategory.value || item.category === filterCategory.value
    return matchKeyword && matchCategory
  })
})

const warehouseStats = computed(() => {
  const counts = warehouses.map(wh => ({
    name: wh,
    count: inventory.filter(i => i.warehouse === wh).length
  }))
  const maxCount = Math.max(...counts.map(c => c.count))
  return counts.map(c => ({
    ...c,
    percent: (c.count / maxCount) * 100
  }))
})

const categoryStats = computed(() => {
  return categories.map(cat => ({
    name: cat,
    count: inventory.filter(i => i.category === cat).length
  })).sort((a, b) => b.count - a.count)
})
</script>
