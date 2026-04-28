<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="p-6 border-b border-neutral-100">
      <slot name="header" />
    </div>
    <div :class="bodyClasses">
      <slot />
    </div>
    <div v-if="$slots.footer" class="p-6 border-t border-neutral-100">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  padding: 'md',
  hover: false
})

const cardClasses = computed(() => {
  let classes = 'card'
  if (props.hover) {
    classes += ' hover:shadow-medium transition-shadow duration-300'
  }
  return classes
})

const bodyClasses = computed(() => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  return paddings[props.padding]
})
</script>
