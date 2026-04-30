<template>
  <div class="min-h-screen">
    <Header />

    <main class="pt-16 lg:pt-20">
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingContact />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import FloatingContact from '@/components/FloatingContact.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import PlatformsSection from '@/components/home/PlatformsSection.vue'
import CTASection from '@/components/home/CTASection.vue'
</script>
