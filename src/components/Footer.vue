<template>
  <footer class="bg-neutral-900 text-white">
    <div class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div class="flex items-center space-x-2 mb-6">
              <img :src="logoUrl" alt="财通出海" class="h-10 w-auto" />
              <span class="font-bold text-xl">财通出海</span>
            </div>
            <p class="text-neutral-400 text-sm leading-relaxed">
              专注为跨境电商企业提供专业选品解决方案，助力企业实现全球业务增长。
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-4">产品服务</h3>
            <ul class="space-y-3 text-sm text-neutral-400">
              <li><router-link to="/orders" class="hover:text-white transition-colors">订单管理</router-link></li>
              <li><router-link to="/inventory" class="hover:text-white transition-colors">库存管理</router-link></li>
              <li><router-link to="/analytics" class="hover:text-white transition-colors">数据分析</router-link></li>
              <li><router-link to="/platforms" class="hover:text-white transition-colors">平台对接</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-4">关于我们</h3>
            <ul class="space-y-3 text-sm text-neutral-400">
              <li><router-link to="/about" class="hover:text-white transition-colors">公司简介</router-link></li>
              <li><a href="#" class="hover:text-white transition-colors">发展历程</a></li>
              <li><a href="#" class="hover:text-white transition-colors">招贤纳士</a></li>
              <li><a href="#" class="hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-4">联系方式</h3>
            <ul class="space-y-3 text-sm text-neutral-400">
              <li class="flex items-center space-x-2">
                <span>📧</span>
                <span>contact@caitong.com</span>
              </li>
              <li class="flex items-center space-x-2">
                <span>📞</span>
                <span>400-888-8888</span>
              </li>
              <li class="flex items-center space-x-2">
                <span>📍</span>
                <span>深圳市南山区科技园</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-neutral-800">
      <div class="container py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500">
          <p>&copy; 2024 财通出海. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" class="hover:text-white transition-colors">隐私政策</a>
            <a href="#" class="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import logoUrl from '@/assets/image/logo.png'
</script>
