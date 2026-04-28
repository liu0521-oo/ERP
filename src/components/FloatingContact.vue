<template>
  <div class="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pr-2">
    <div
      class="relative group"
      @mouseenter="showQr = true"
      @mouseleave="showQr = false"
    >
      <button class="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-l-xl shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300">
        <span class="text-2xl">📱</span>
      </button>
      <Transition name="popup">
        <div
          v-if="showQr"
          class="absolute right-20 top-1/2 -translate-y-1/2 card p-0 bg-white/95 backdrop-blur shadow-2xl overflow-hidden rounded-2xl z-[51]"
          style="width: 200px;"
        >
          <div class="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 text-center">
            <span class="text-2xl">📱</span>
            <p class="text-white font-bold mt-2">扫码咨询</p>
            <p class="text-white/80 text-xs mt-1">添加企业微信获取更多服务</p>
          </div>
          <div class="p-4">
            <div class="w-36 h-36 mx-auto flex items-center justify-center">
              <img src="@/assets/image/qrcode.png" alt="企业微信二维码" class="w-full h-full object-contain rounded-2xl" />
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div
      class="relative group"
      @mouseenter="showContact = true"
      @mouseleave="showContact = false"
    >
      <button class="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-l-xl shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300">
        <span class="text-2xl">📞</span>
      </button>
      <Transition name="popup">
        <div
          v-if="showContact"
          class="absolute right-20 top-1/2 -translate-y-1/2 card p-0 bg-white/95 backdrop-blur shadow-2xl overflow-hidden rounded-2xl z-[51]"
          style="width: 200px;"
        >
          <div class="bg-gradient-to-br from-primary-500 to-secondary-500 p-4 text-center">
            <svg class="w-8 h-8 mx-auto mb-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <p class="text-white font-bold">联系我们</p>
            <p class="text-white/80 text-xs mt-1">7×24小时在线服务</p>
          </div>
          <div class="p-4 space-y-3">
            <div class="flex items-center gap-3 text-neutral-700 bg-gradient-to-r from-primary-50 to-white rounded-xl p-3 justify-center">
              <p class="text-sm font-bold tracking-wide">400-888-8888</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <button
      @click="scrollToTop"
      class="w-14 h-14 bg-white text-neutral-600 rounded-l-xl shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 hover:text-primary-600 transition-all duration-300"
      title="返回顶部"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showQr = ref(false)
const showContact = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: all 0.25s ease-out;
}

.popup-enter-from {
  opacity: 0;
  margin-right: -10px;
}

.popup-leave-to {
  opacity: 0;
  margin-right: -10px;
}
</style>
