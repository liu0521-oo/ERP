<template>
  <component :is="logoComponents[platformName]" class="w-10 h-10" />
</template>

<script setup lang="ts">
import { h } from 'vue'

const platforms: Record<string, any> = {
  Ozone: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('circle', { cx: '12', cy: '12', r: '10', fill: '#F05A28' }),
    h('path', {
      d: 'M8 12h8v2H8v-2zm2-3h4v2H10V9zm-2 6h8v2H8v-2z',
      fill: 'white'
    })
  ]),

  Amazon: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('path', {
      d: 'M13.8 4.5c-3.5 0-4.6 2.4-4.6 4.3v2.6H7.6c-.6 0-1.1.5-1.1 1.1v3.1c0 .6.5 1.1 1.1 1.1h1.6v5.3c0 .6.5 1.1 1.1 1.1h3.3c.6 0 1.1-.5 1.1-1.1v-5.3h2.6c.5 0 1-.4 1.1-.9l.6-3.1c.1-.6-.3-1.1-.9-1.1h-3.4V9.2c0-.6.5-1.1 1.1-1.1h2.3c.6 0 1.1-.5 1.1-1.1V5.6c0-.6-.5-1.1-1.1-1.1h-3.5z',
      fill: '#232F3E'
    }),
    h('path', {
      d: 'M3 19.2c.5.4 3.5 2.7 9 2.7 5.5 0 8.5-2.3 9-2.7l-.3-.4c-.3.2-3.5 2.4-8.7 2.4-5.2 0-8.4-2.2-8.7-2.4l-.3.4z',
      fill: '#FF9900'
    })
  ]),

  eBay: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('path', {
      d: 'M3.5 8h3.2l1.8 6 1.8-6h3.2l-3.5 10h-3L3.5 8zm9.5 0h3.2v10h-3.2V8zm5.5 0h3.2v6.5c0 1.5.8 2 1.8 2s1.8-.5 1.8-2V8h3.2v6.5c0 3-1.8 4-5 4s-5-1-5-4V8z',
      fill: '#E53238'
    })
  ]),

  Shopee: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('path', {
      d: 'M12 3C9.8 3 8 4.8 8 7v1H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-4V7c0-2.2-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2v1H10V7c0-1.1.9-2 2-2z',
      fill: '#EE4D2D'
    }),
    h('circle', { cx: '12', cy: '14', r: '2', fill: '#EE4D2D' })
  ]),

  Lazada: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('circle', { cx: '12', cy: '12', r: '10', fill: '#0F146D' }),
    h('path', {
      d: 'M7 9h10v6H7V9zm2 2v2h6v-2H9z',
      fill: '#FF6B00'
    })
  ]),

  TikTok: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('path', {
      d: 'M12.5 2.2c.3 2.3 1.9 3.8 4 4.1v3c-1.3-.1-2.7-.7-3.5-1.5v6.7c0 3.6-2.9 6.5-6.5 6.5S0 18.1 0 14.5 2.9 8 6.5 8c.4 0 .8 0 1.2.1V11c-.4-.1-.8-.2-1.2-.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5V2.2h2.5z',
      fill: '#000000'
    })
  ]),

  Temu: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '4', fill: '#FB7701' }),
    h('text', {
      x: '12',
      y: '16',
      'text-anchor': 'middle',
      fill: 'white',
      'font-size': '10',
      'font-weight': 'bold',
      'font-family': 'sans-serif'
    }, 'T')
  ]),

  AliExpress: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('rect', { x: '1', y: '1', width: '22', height: '22', rx: '4', fill: '#FF4747' }),
    h('path', {
      d: 'M6 8h3l1.5 5 1.5-5h3l-2.5 8H8.5L6 8zm7 0h5v2h-3v1h3v2h-3v1h3v2h-5V8z',
      fill: 'white'
    })
  ]),

  Walmart: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('path', {
      d: 'M12 2L2 12h20L12 2zm0 3.5l6.5 6.5h-13L12 5.5zM4 15h16v5H4v-5z',
      fill: '#0071DC'
    })
  ]),

  Rakuten: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('circle', { cx: '12', cy: '12', r: '10', fill: '#BF0000' }),
    h('text', {
      x: '12',
      y: '16',
      'text-anchor': 'middle',
      fill: 'white',
      'font-size': '9',
      'font-weight': 'bold',
      'font-family': 'sans-serif'
    }, 'R')
  ]),

  Coupang: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('rect', { x: '2', y: '2', width: '20', height: '20', rx: '4', fill: '#004098' }),
    h('text', {
      x: '12',
      y: '16',
      'text-anchor': 'middle',
      fill: 'white',
      'font-size': '8',
      'font-weight': 'bold',
      'font-family': 'sans-serif'
    }, 'C')
  ]),

  MercadoLibre: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('rect', { x: '1', y: '1', width: '22', height: '22', rx: '4', fill: '#FFF159' }),
    h('path', {
      d: 'M6 8h4l1 4 1-4h4l-2 8H8L6 8z',
      fill: '#2D3277'
    })
  ]),

  '更多平台': () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg'
  }, [
    h('circle', { cx: '12', cy: '12', r: '10', fill: '#E5E7EB' }),
    h('path', {
      d: 'M12 7v10M7 12h10',
      stroke: '#9CA3AF',
      'stroke-width': '2',
      'stroke-linecap': 'round'
    })
  ])
}

const logoComponents = {
  'Ozone': platforms.Ozone,
  'Amazon': platforms.Amazon,
  'eBay': platforms.eBay,
  'Shopee': platforms.Shopee,
  'Lazada': platforms.Lazada,
  'TikTok Shop': platforms.TikTok,
  'Temu': platforms.Temu,
  'AliExpress': platforms.AliExpress,
  'Walmart': platforms.Walmart,
  'Rakuten': platforms.Rakuten,
  'Coupang': platforms.Coupang,
  'Mercado Libre': platforms.MercadoLibre,
  '更多平台': platforms['更多平台']
}

defineProps<{
  platformName: string
}>()
</script>
