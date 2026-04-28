<template>
  <section class="section bg-white">
    <div class="container">
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">核心功能</h2>
        <p class="text-neutral-600 max-w-2xl mx-auto">
          强大的功能模块，满足跨境电商企业全方位管理需求
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="card p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mb-4">
            <span class="text-2xl">{{ feature.icon }}</span>
          </div>
          <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-neutral-600 text-sm leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    id: '1',
    icon: '📦',
    title: '订单管理',
    description: '多平台订单统一管理，自动同步订单状态，智能分单、批量处理，大幅提升发货效率。'
  },
  {
    id: '2',
    icon: '🏭',
    title: '库存管理',
    description: '多仓库智能调拨，库存预警机制，自动补货提醒，实时库存同步，防止超卖。'
  },
  {
    id: '3',
    icon: '📈',
    title: '数据分析',
    description: '可视化数据看板，多维度销售分析，精准预测销售趋势，辅助科学决策。'
  },
  {
    id: '4',
    icon: '🔗',
    title: '平台对接',
    description: '支持全球主流电商平台一键对接，API无缝连接，数据实时同步，降低运营成本。'
  }
]
</script>
