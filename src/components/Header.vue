<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80 shadow-sm transition-all duration-300" :class="{ 'shadow-md': scrolled }">
    <div class="container px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-[72px]">
        <router-link to="/" class="flex items-center space-x-3 group">
          <img :src="logoUrl" alt="桓晟" class="h-9 lg:h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          <span class="font-bold text-lg lg:text-xl text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">桓晟</span>
        </router-link>

        <nav class="hidden lg:flex items-center gap-1">
          <router-link
            v-for="item in menuItems"
            :key="item.id"
            :to="item.path"
            class="px-4 lg:px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group"
            :class="isPathActive(item.path)
              ? 'text-primary-600 bg-primary-50'
              : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'"
          >
            <span class="relative z-10">{{ item.label }}</span>
            <span
              v-if="isPathActive(item.path)"
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-primary-500 rounded-full transition-all duration-300"
            />
            <span
              v-else
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 rounded-full group-hover:w-6 transition-all duration-300"
            />
          </router-link>
        </nav>

        <div class="flex items-center gap-2">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 rounded-xl text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 transition-all duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            <Transition mode="out-in">
              <svg v-if="!mobileMenuOpen" key="menu" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else key="close" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Transition>
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav v-if="mobileMenuOpen" class="lg:hidden pb-4 border-t border-neutral-200 mt-2 pt-2">
          <div class="flex flex-col gap-1">
            <router-link
              v-for="item in menuItems"
              :key="item.id"
              :to="item.path"
              @click="mobileMenuOpen = false"
              class="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between group"
              :class="isPathActive(item.path)
                ? 'text-primary-600 bg-primary-50'
                : 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'"
            >
              <span>{{ item.label }}</span>
              <svg
                v-if="isPathActive(item.path)"
                class="w-4 h-4 text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </router-link>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logoUrl from '@/assets/image/logo.png'

const route = useRoute()
const mobileMenuOpen = ref(false)
const scrolled = ref(false)

const isPathActive = (path: string): boolean => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

interface MenuItem {
  id: string
  label: string
  path: string
}

const menuItems: MenuItem[] = [
  { id: '1', label: '首页', path: '/' },
  { id: '2', label: '订单管理', path: '/orders' },
  { id: '3', label: '库存管理', path: '/inventory' },
  { id: '4', label: '数据分析', path: '/analytics' },
  { id: '5', label: '多平台对接', path: '/platforms' },
  { id: '6', label: '关于我们', path: '/about' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
