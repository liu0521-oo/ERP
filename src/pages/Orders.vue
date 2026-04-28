<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <h1 class="text-3xl font-bold mb-8">订单管理</h1>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">总订单数</p>
                  <p class="text-2xl font-bold">{{ stats.total }}</p>
                </div>
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">📦</span>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">待处理</p>
                  <p class="text-2xl font-bold text-orange-500">{{ stats.pending }}</p>
                </div>
                <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">⏰</span>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">处理中</p>
                  <p class="text-2xl font-bold text-blue-500">{{ stats.processing }}</p>
                </div>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">🔄</span>
                </div>
              </div>
            </div>
            <div class="card p-6">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">已发货</p>
                  <p class="text-2xl font-bold text-green-500">{{ stats.shipped }}</p>
                </div>
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">✅</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card overflow-hidden">
            <div class="p-6 border-b border-neutral-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <h2 class="text-lg font-semibold">订单列表</h2>
              <div class="flex gap-3">
                <select v-model="filterStatus" class="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option value="">全部状态</option>
                  <option value="pending">待处理</option>
                  <option value="processing">处理中</option>
                  <option value="shipped">已发货</option>
                  <option value="delivered">已送达</option>
                  <option value="cancelled">已取消</option>
                </select>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-neutral-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">订单号</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase hidden md:table-cell">平台</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">客户</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">金额</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">状态</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase hidden sm:table-cell">创建时间</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">操作</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-100">
                  <tr v-for="order in filteredOrders" :key="order.id" class="hover:bg-neutral-50 transition-colors">
                    <td class="px-6 py-4 text-sm font-medium">{{ order.orderNo }}</td>
                    <td class="px-6 py-4 text-sm hidden md:table-cell">{{ order.platform }}</td>
                    <td class="px-6 py-4 text-sm">{{ order.customer }}</td>
                    <td class="px-6 py-4 text-sm font-medium">
                      {{ order.amount.toLocaleString() }} {{ order.currency }}
                    </td>
                    <td class="px-6 py-4">
                      <span :class="getStatusClass(order.status)" class="px-3 py-1 rounded-full text-xs font-medium">
                        {{ getStatusText(order.status) }}
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm text-neutral-500 hidden sm:table-cell">{{ order.createTime }}</td>
                    <td class="px-6 py-4">
                      <button class="text-primary-600 hover:text-primary-700 text-sm font-medium">查看详情</button>
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
import { orders, getOrderStats } from '@/mock/orders'
import type { Order } from '@/types'

const filterStatus = ref('')
const stats = getOrderStats()

const filteredOrders = computed(() => {
  if (!filterStatus.value) return orders
  return orders.filter((o: Order) => o.status === filterStatus.value)
})

const getStatusClass = (status: string) => {
  const classes = {
    pending: 'bg-orange-100 text-orange-700',
    processing: 'bg-blue-100 text-blue-700',
    shipped: 'bg-green-100 text-green-700',
    delivered: 'bg-purple-100 text-purple-700',
    cancelled: 'bg-red-100 text-red-700'
  }
  return classes[status as keyof typeof classes] || 'bg-neutral-100 text-neutral-700'
}

const getStatusText = (status: string) => {
  const texts = {
    pending: '待处理',
    processing: '处理中',
    shipped: '已发货',
    delivered: '已送达',
    cancelled: '已取消'
  }
  return texts[status as keyof typeof texts] || status
}
</script>
