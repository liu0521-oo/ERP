<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <div class="section">
        <div class="container">
          <div class="text-center mb-16">
            <h1 class="text-4xl sm:text-5xl font-bold mb-6">关于财通出海</h1>
            <p class="text-lg text-neutral-600 max-w-2xl mx-auto">
              专注跨境电商选品领域，助力中国企业走向世界
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 class="text-2xl font-bold mb-6">公司简介</h2>
              <p class="text-neutral-600 leading-relaxed mb-4">
                财通出海成立于2018年，是一家专注于跨境电商选品系统研发的国家高新技术企业。公司总部位于深圳，在上海、广州、杭州设有分支机构。
              </p>
              <p class="text-neutral-600 leading-relaxed mb-4">
                我们致力于为跨境电商企业提供一站式解决方案，涵盖订单管理、库存管理、物流管理、财务结算、数据分析等全方位服务，帮助企业提升运营效率，降低管理成本。
              </p>
              <p class="text-neutral-600 leading-relaxed">
                经过多年发展，财通出海已服务超过500家跨境电商企业，累计处理订单超过1亿单，成为跨境电商选品领域的领先品牌。
              </p>
            </div>
            <div class="card p-8">
              <div class="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                <div class="text-center">
                  <div class="text-6xl mb-4">🏢</div>
                  <p class="text-neutral-600 font-medium">公司环境</p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div class="card p-6 text-center">
              <div class="text-4xl font-bold gradient-text mb-2">6+</div>
              <div class="text-sm text-neutral-500">年行业经验</div>
            </div>
            <div class="card p-6 text-center">
              <div class="text-4xl font-bold gradient-text mb-2">500+</div>
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
                <p class="text-sm text-neutral-600">财通出海在深圳成立，专注跨境电商选品研发</p>
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

          <div class="card p-8 bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
            <div class="text-center max-w-2xl mx-auto">
              <h2 class="text-2xl font-bold mb-4">加入我们</h2>
              <p class="text-white/80 mb-6">
                我们正在寻找有梦想、有能力的伙伴，一起打造跨境电商选品领域的传奇
              </p>
              <div class="flex flex-wrap gap-4 justify-center">
                <div class="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                  <span class="font-medium">前端开发</span>
                </div>
                <div class="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                  <span class="font-medium">后端开发</span>
                </div>
                <div class="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                  <span class="font-medium">产品经理</span>
                </div>
                <div class="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                  <span class="font-medium">销售经理</span>
                </div>
                <div class="bg-white/10 backdrop-blur rounded-lg px-6 py-3">
                  <span class="font-medium">客服专员</span>
                </div>
              </div>
              <button class="btn bg-white text-primary-600 mt-8">
                查看全部职位
              </button>
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
