<template>
  <footer class="bg-neutral-900 text-white">
    <div class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-1">
            <div class="flex items-center space-x-2 mb-6">
              <img :src="logoUrl" alt="桓晟" class="h-10 w-auto" />
              <span class="font-bold text-xl">桓晟</span>
            </div>
            <p class="text-neutral-400 text-sm leading-relaxed">
              专注为跨境电商企业提供专业ERP解决方案，整合多平台管理、智能订单处理、库存同步、财务对账等核心功能，助力企业降本增效，实现跨境业务快速增长。
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-4">产品服务</h3>
            <ul class="space-y-3 text-sm text-neutral-400">
              <li><router-link to="/orders" class="hover:text-white transition-colors">订单管理</router-link></li>
              <li><router-link to="/inventory" class="hover:text-white transition-colors">库存管理</router-link></li>
              <li><router-link to="/platforms" class="hover:text-white transition-colors">平台对接</router-link></li>
              <li><router-link to="/about" class="hover:text-white transition-colors">解决方案</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-4">关于我们</h3>
            <ul class="space-y-3 text-sm text-neutral-400">
              <li><router-link to="/about" class="hover:text-white transition-colors">公司简介</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">发展历程</a></li>
              <li><a href="#" class="hover:text-white transition-colors">合作伙伴</a></li>
              <li><a href="#" class="hover:text-white transition-colors">隐私政策</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-neutral-800">
      <div class="container py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500">
          <p>&copy; 2024 桓晟. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/image/logo.png'
</script>
