<template>
  <section class="section bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
    <div class="container">
      <div class="text-center max-w-3xl mx-auto">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          data-aos="fade-up"
        >
          开启您的跨境电商之旅
        </h2>
        <p
          class="text-lg text-white/80 mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          立即注册，享受14天免费试用。专业团队全程指导，让您的跨境业务起步更轻松。
        </p>
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <router-link to="/platforms" class="btn bg-white text-primary-600 hover:bg-neutral-50 text-lg">
            免费试用14天
          </router-link>
          <router-link to="/about" class="btn bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg">
            联系我们
          </router-link>
        </div>
        <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div data-aos="fade-up" data-aos-delay="400">
            <div class="text-2xl font-bold">免费</div>
            <div class="text-white/70 text-sm mt-1">14天试用</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500">
            <div class="text-2xl font-bold">24/7</div>
            <div class="text-white/70 text-sm mt-1">技术支持</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <div class="text-2xl font-bold">安全</div>
            <div class="text-white/70 text-sm mt-1">数据加密</div>
          </div>
          <div data-aos="fade-up" data-aos-delay="700">
            <div class="text-2xl font-bold">灵活</div>
            <div class="text-white/70 text-sm mt-1">按需付费</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
