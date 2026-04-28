<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <h1 class="text-3xl font-bold">数据分析</h1>
            <div class="flex gap-2 flex-wrap">
              <button
                v-for="range in timeRanges"
                :key="range.value"
                @click="timeRange = range.value"
                class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                :class="timeRange === range.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'"
              >
                {{ range.label }}
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">总订单数</p>
                  <p class="text-2xl font-bold">{{ stats.totalOrders.toLocaleString() }}</p>
                  <p :class="stats.ordersGrowth >= 0 ? 'text-green-500' : 'text-red-500'" class="text-xs mt-1">
                    {{ stats.ordersGrowth >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.ordersGrowth) }}% 环比
                  </p>
                </div>
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">📊</span>
                </div>
              </div>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">总营收</p>
                  <p class="text-2xl font-bold">${{ (stats.totalRevenue / 1000).toFixed(1) }}k</p>
                  <p :class="stats.revenueGrowth >= 0 ? 'text-green-500' : 'text-red-500'" class="text-xs mt-1">
                    {{ stats.revenueGrowth >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.revenueGrowth) }}% 环比
                  </p>
                </div>
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">💰</span>
                </div>
              </div>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">访问量</p>
                  <p class="text-2xl font-bold">{{ (stats.totalVisitors / 1000).toFixed(1) }}k</p>
                  <p :class="stats.visitorsGrowth >= 0 ? 'text-green-500' : 'text-red-500'" class="text-xs mt-1">
                    {{ stats.visitorsGrowth >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.visitorsGrowth) }}% 环比
                  </p>
                </div>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">👥</span>
                </div>
              </div>
            </div>
            <div class="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-neutral-500 mb-1">转化率</p>
                  <p class="text-2xl font-bold">{{ stats.avgConversionRate }}%</p>
                  <p :class="stats.conversionGrowth >= 0 ? 'text-green-500' : 'text-red-500'" class="text-xs mt-1">
                    {{ stats.conversionGrowth >= 0 ? '↑' : '↓' }} {{ Math.abs(stats.conversionGrowth) }}% 环比
                  </p>
                </div>
                <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <span class="text-2xl">📈</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">销售趋势</h2>
              <v-chart :option="salesTrendOption" style="height: 320px;" autoresize />
            </div>
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">转化率趋势</h2>
              <v-chart :option="conversionTrendOption" style="height: 320px;" autoresize />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">平台分布</h2>
              <v-chart :option="platformOption" style="height: 280px;" autoresize />
            </div>
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">订单状态</h2>
              <v-chart :option="orderStatusOption" style="height: 280px;" autoresize />
            </div>
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">客户分析</h2>
              <v-chart :option="customerOption" style="height: 280px;" autoresize />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">品类销售</h2>
              <v-chart :option="categoryOption" style="height: 320px;" autoresize />
            </div>
            <div class="card p-6">
              <h2 class="text-lg font-semibold mb-6">地区营收分布</h2>
              <v-chart :option="regionOption" style="height: 320px;" autoresize />
            </div>
          </div>

          <div class="card p-6 mb-8">
            <h2 class="text-lg font-semibold mb-6">热销商品排行 TOP 10</h2>
            <v-chart :option="topProductsOption" style="height: 400px;" autoresize />
          </div>

          <div class="card overflow-hidden">
            <div class="p-6 border-b border-neutral-100">
              <h2 class="text-lg font-semibold">详细数据</h2>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead class="bg-neutral-50">
                  <tr>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">日期</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">订单数</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">营收</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">访问量</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">转化率</th>
                    <th class="px-6 py-4 text-left text-xs font-medium text-neutral-500 uppercase">客单价</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-neutral-100">
                  <tr v-for="item in displayData" :key="item.date" class="hover:bg-neutral-50 transition-colors">
                    <td class="px-6 py-4 text-sm font-medium">{{ item.date }}</td>
                    <td class="px-6 py-4 text-sm">{{ item.orders.toLocaleString() }}</td>
                    <td class="px-6 py-4 text-sm font-medium text-green-600">${{ item.revenue.toLocaleString() }}</td>
                    <td class="px-6 py-4 text-sm">{{ item.visitors.toLocaleString() }}</td>
                    <td class="px-6 py-4 text-sm">
                      <span :class="item.conversionRate >= 1 ? 'text-green-600' : 'text-orange-600'" class="font-medium">
                        {{ item.conversionRate }}%
                      </span>
                    </td>
                    <td class="px-6 py-4 text-sm">${{ (item.revenue / item.orders).toFixed(2) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-4 border-t border-neutral-100 flex justify-between items-center">
              <p class="text-sm text-neutral-500">显示 {{ displayData.length }} 条记录</p>
              <div class="flex gap-2">
                <button
                  @click="currentPage > 1 && currentPage--"
                  :disabled="currentPage === 1"
                  class="px-3 py-1 rounded border border-neutral-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50"
                >
                  上一页
                </button>
                <button
                  @click="currentPage < totalPages && currentPage++"
                  :disabled="currentPage === totalPages"
                  class="px-3 py-1 rounded border border-neutral-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-neutral-50"
                >
                  下一页
                </button>
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
import { ref, computed, onMounted } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, PieChart, BarChart, GaugeChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart from 'vue-echarts'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import {
  analytics,
  getAnalyticsStats,
  platformData,
  categoryData,
  regionData,
  orderStatusData,
  topProducts,
  customerStats
} from '@/mock/analytics'

use([
  CanvasRenderer,
  LineChart,
  PieChart,
  BarChart,
  GaugeChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

const timeRange = ref('7')
const currentPage = ref(1)
const pageSize = 10

const timeRanges = [
  { label: '7天', value: '7' },
  { label: '14天', value: '14' },
  { label: '30天', value: '30' },
  { label: '全部', value: 'all' }
]

const filteredData = computed(() => {
  if (timeRange.value === 'all') return analytics
  return analytics.slice(-parseInt(timeRange.value))
})

const stats = computed(() => getAnalyticsStats(filteredData.value))

const totalPages = computed(() => Math.ceil(filteredData.value.length / pageSize))

const displayData = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return filteredData.value.slice(start, end).reverse()
})

onMounted(() => {
  currentPage.value = 1
})

const salesTrendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    textStyle: { color: '#374151' }
  },
  legend: {
    data: ['订单', '营收'],
    bottom: 0,
    textStyle: { color: '#6b7280' }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: filteredData.value.map((a: any) => a.date.slice(5)),
    axisLine: { lineStyle: { color: '#e5e7eb' } },
    axisLabel: { color: '#6b7280' }
  },
  yAxis: [
    {
      type: 'value',
      name: '订单数',
      nameTextStyle: { color: '#6b7280' },
      splitLine: { lineStyle: { color: '#f3f4f6' } },
      axisLabel: { color: '#6b7280' }
    },
    {
      type: 'value',
      name: '营收 (k$)',
      position: 'right',
      nameTextStyle: { color: '#6b7280' },
      splitLine: { show: false },
      axisLabel: { color: '#6b7280' }
    }
  ],
  series: [
    {
      name: '订单',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 3, color: '#0ea5e9' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(14, 165, 233, 0.3)' },
            { offset: 1, color: 'rgba(14, 165, 233, 0.05)' }
          ]
        }
      },
      data: filteredData.value.map((a: any) => a.orders)
    },
    {
      name: '营收',
      type: 'line',
      yAxisIndex: 1,
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 3, color: '#22c55e' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(34, 197, 94, 0.3)' },
            { offset: 1, color: 'rgba(34, 197, 94, 0.05)' }
          ]
        }
      },
      data: filteredData.value.map((a: any) => a.revenue / 1000)
    }
  ]
}))

const conversionTrendOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    textStyle: { color: '#374151' },
    formatter: '{b}<br/>转化率: {c}%'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: filteredData.value.map((a: any) => a.date.slice(5)),
    axisLine: { lineStyle: { color: '#e5e7eb' } },
    axisLabel: { color: '#6b7280' }
  },
  yAxis: {
    type: 'value',
    name: '转化率 (%)',
    nameTextStyle: { color: '#6b7280' },
    splitLine: { lineStyle: { color: '#f3f4f6' } },
    axisLabel: { color: '#6b7280' }
  },
  series: [
    {
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 6,
      lineStyle: { width: 3, color: '#a855f7' },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: 'rgba(168, 85, 247, 0.3)' },
            { offset: 1, color: 'rgba(168, 85, 247, 0.05)' }
          ]
        }
      },
      markLine: {
        silent: true,
        data: [{ yAxis: 1 }],
        lineStyle: { color: '#ef4444', type: 'dashed', width: 1 },
        label: { formatter: '基准线 1%', color: '#ef4444' }
      },
      data: filteredData.value.map((a: any) => a.conversionRate)
    }
  ]
}))

const platformOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    formatter: '{b}<br/>占比: {c}%<br/>订单: {d}'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 'middle',
    textStyle: { color: '#6b7280', fontSize: 12 }
  },
  series: [
    {
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}\n{c}%',
        color: '#374151',
        fontSize: 11
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 14,
          fontWeight: 'bold'
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },
      data: platformData.map(p => ({
        name: p.name,
        value: p.value,
        itemStyle: { color: p.color }
      }))
    }
  ]
}))

const orderStatusOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    formatter: '{b}<br/>订单: {c}'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 'middle',
    textStyle: { color: '#6b7280', fontSize: 11 }
  },
  series: [
    {
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}\n{c}',
        color: '#374151',
        fontSize: 10
      },
      data: orderStatusData.map(s => ({
        name: s.name,
        value: s.value,
        itemStyle: { color: s.color }
      }))
    }
  ]
}))

const customerOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    formatter: (params: any) => {
      const growth = customerStats.find(c => c.name === params.name)?.growth || 0
      return `${params.name}<br/>数量: ${params.value}<br/>增长: ${growth > 0 ? '+' : ''}${growth}%`
    }
  },
  series: [
    {
      type: 'pie',
      radius: [0, '70%'],
      center: ['50%', '50%'],
      itemStyle: {
        borderRadius: 5,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        formatter: '{b}\n{value}',
        color: '#374151',
        fontSize: 11
      },
      data: [
        { name: customerStats[0].name, value: customerStats[0].value, itemStyle: { color: '#3b82f6' } },
        { name: customerStats[1].name, value: customerStats[1].value, itemStyle: { color: '#22c55e' } },
        { name: customerStats[2].name, value: customerStats[2].value, itemStyle: { color: '#f59e0b' } },
        { name: customerStats[3].name, value: customerStats[3].value, itemStyle: { color: '#ef4444' } }
      ]
    }
  ]
}))

const categoryOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    formatter: (params: any) => {
      const category = categoryData.find(c => c.name === params[0].name)
      const categoryGrowth = category?.growth ?? 0
      return `${params[0].name}<br/>营收: $${(params[0].value).toFixed(1)}k<br/>订单: ${category?.orders?.toLocaleString() || 0}<br/>增长: ${categoryGrowth > 0 ? '+' : ''}${categoryGrowth}%`
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    top: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: categoryData.map(c => c.name),
    axisLine: { lineStyle: { color: '#e5e7eb' } },
    axisLabel: { color: '#6b7280', rotate: 30, fontSize: 10 }
  },
  yAxis: {
    type: 'value',
    name: '营收 (k$)',
    nameTextStyle: { color: '#6b7280' },
    splitLine: { lineStyle: { color: '#f3f4f6' } },
    axisLabel: { color: '#6b7280' }
  },
  series: [
    {
      type: 'bar',
      data: categoryData.map(c => c.value / 1000),
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: '#a855f7' },
            { offset: 1, color: '#7e22ce' }
          ]
        },
        borderRadius: [4, 4, 0, 0]
      },
      label: {
        show: true,
        position: 'top',
        formatter: '${c}k',
        color: '#7e22ce',
        fontSize: 10
      }
    }
  ]
}))

const regionOption = computed(() => ({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    formatter: (params: any) => {
      const region = regionData.find(r => r.name === params.name)
      const regionGrowth = region?.growth ?? 0
      return `${params.name}<br/>营收: $${(params.value * 1000).toLocaleString()}<br/>订单: ${region?.orders?.toLocaleString() || 0}<br/>增长: ${regionGrowth > 0 ? '+' : ''}${regionGrowth}%`
    }
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 'middle',
    textStyle: { color: '#6b7280', fontSize: 11 }
  },
  series: [
    {
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['60%', '50%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}\n{d}%',
        color: '#374151',
        fontSize: 10
      },
      data: regionData.map((r, i) => ({
        name: r.name,
        value: r.value / 1000,
        itemStyle: { color: ['#0ea5e9', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6'][i] }
      }))
    }
  ]
}))

const topProductsOption = computed(() => ({
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderColor: '#e5e7eb',
    borderWidth: 1,
    formatter: (params: any) => {
      const product = topProducts.find(p => p.name === params[0].name)
      const productGrowth = product?.growth ?? 0
      return `${params[0].name}<br/>销量: ${product?.sales?.toLocaleString() || 0}<br/>营收: $${product?.revenue?.toLocaleString() || 0}<br/>增长: ${productGrowth > 0 ? '+' : ''}${productGrowth}%`
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    top: '5%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    name: '销量',
    nameTextStyle: { color: '#6b7280' },
    splitLine: { lineStyle: { color: '#f3f4f6' } },
    axisLabel: { color: '#6b7280' }
  },
  yAxis: {
    type: 'category',
    data: topProducts.map(p => p.name).reverse(),
    axisLine: { lineStyle: { color: '#e5e7eb' } },
    axisLabel: { color: '#6b7280', fontSize: 11 }
  },
  series: [
    {
      type: 'bar',
      data: topProducts.map(p => p.sales).reverse(),
      itemStyle: {
        color: {
          type: 'linear',
          x: 0, y: 0, x2: 1, y2: 0,
          colorStops: [
            { offset: 0, color: '#0ea5e9' },
            { offset: 1, color: '#22c55e' }
          ]
        },
        borderRadius: [0, 4, 4, 0]
      },
      label: {
        show: true,
        position: 'right',
        formatter: (params: any) => {
          const growth = topProducts.find(p => p.sales === params.value)?.growth ?? 0
          return `${params.value} ${growth > 0 ? '↑' : '↓'}${Math.abs(growth)}%`
        },
        color: '#6b7280',
        fontSize: 10
      }
    }
  ]
}))
</script>
