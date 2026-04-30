<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <div class="text-center mb-16">
            <h1 class="text-4xl sm:text-5xl font-bold mb-6">关于桓晟</h1>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              专注跨境电商选品领域，助力中国企业走向世界
            </p>
          </div>

          <div class="card p-8 lg:p-12 mb-20">
            <h2 class="text-2xl font-bold mb-6">公司简介</h2>
            <div class="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                桓晟成立于2018年，是一家专注于跨境电商选品系统研发的国家高新技术企业。公司总部位于郑州。
              </p>
              <p>
                我们致力于为跨境电商企业提供一站式解决方案，涵盖订单管理、库存管理、物流管理、财务结算等全方位服务，帮助企业提升运营效率，降低管理成本。
              </p>
              <p>
                经过多年发展，桓晟已服务超过500家跨境电商企业，累计处理订单超过1亿单，成为跨境电商选品领域的领先品牌。
              </p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div class="card p-6 text-center">
              <div class="text-4xl font-bold gradient-text mb-2">9+</div>
              <div class="text-sm text-neutral-500">年行业经验</div>
            </div>
            <div class="card p-6 text-center">
              <div class="text-4xl font-bold gradient-text mb-2">100,000+</div>
              <div class="text-sm text-neutral-500">服务企业</div>
            </div>
            <div class="card p-6 text-center">
              <div class="text-4xl font-bold gradient-text mb-2">100+</div>
              <div class="text-sm text-neutral-500">专业团队</div>
            </div>
            <div class="card p-6 text-center">
              <div class="text-4xl font-bold gradient-text mb-2">1亿+</div>
              <div class="text-sm text-neutral-500">处理订单</div>
            </div>
          </div>

          <div class="mb-20">
            <h2 class="text-2xl font-bold mb-8 text-center">发展历程</h2>
            <div class="grid md:grid-cols-4 gap-6">
              <div class="card p-6">
                <div class="text-2xl font-bold text-primary-600 mb-3">2018</div>
                <h3 class="font-semibold mb-2">公司成立</h3>
                <p class="text-sm text-neutral-600">桓晟在郑州成立，专注跨境电商选品研发</p>
              </div>
              <div class="card p-6">
                <div class="text-2xl font-bold text-primary-600 mb-3">2019</div>
                <h3 class="font-semibold mb-2">产品发布</h3>
                <p class="text-sm text-neutral-600">首款选品产品上线，首批客户成功对接</p>
              </div>
              <div class="card p-6">
                <div class="text-2xl font-bold text-primary-600 mb-3">2021</div>
                <h3 class="font-semibold mb-2">快速发展</h3>
                <p class="text-sm text-neutral-600">服务企业突破200家，建立多城市分支机构</p>
              </div>
              <div class="card p-6">
                <div class="text-2xl font-bold text-primary-600 mb-3">2024</div>
                <h3 class="font-semibold mb-2">行业领先</h3>
                <p class="text-sm text-neutral-600">成为行业领先品牌，服务企业超过500家</p>
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
</script>
