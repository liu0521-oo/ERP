<template>
  <div class="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pr-2">
    <button @click="openWeComWork"
      class="w-14 h-14 bg-gradient-to-br from-primary-600 to-secondary-600 text-white rounded-l-xl shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-300"
      title="企业微信">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h8M8 14h5" />
      </svg>
    </button>

    <button @click="scrollToTop"
      class="w-14 h-14 bg-white text-neutral-600 rounded-l-xl shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 hover:text-primary-600 transition-all duration-300"
      title="返回顶部">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
const openWeComWork = () => {
  window.open('https://work.weixin.qq.com/ca/cawcdea4c0b300ded5', '_blank')
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
</style>
