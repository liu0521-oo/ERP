import type { Platform } from '@/types'

export const platforms: Platform[] = [
  {
    id: '1',
    name: 'Amazon',
    icon: '🛒',
    status: 'connected',
    ordersToday: 156,
    ordersTotal: 45890
  },
  {
    id: '2',
    name: 'eBay',
    icon: '🏪',
    status: 'connected',
    ordersToday: 89,
    ordersTotal: 32145
  },
  {
    id: '3',
    name: 'Shopee',
    icon: '🛍️',
    status: 'connected',
    ordersToday: 234,
    ordersTotal: 67890
  },
  {
    id: '4',
    name: 'Lazada',
    icon: '🌏',
    status: 'connected',
    ordersToday: 123,
    ordersTotal: 34567
  },
  {
    id: '5',
    name: 'TikTok Shop',
    icon: '📱',
    status: 'connected',
    ordersToday: 345,
    ordersTotal: 23456
  },
  {
    id: '6',
    name: 'Temu',
    icon: '🎁',
    status: 'disconnected',
    ordersToday: 0,
    ordersTotal: 0
  },
  {
    id: '7',
    name: 'AliExpress',
    icon: '🌐',
    status: 'connected',
    ordersToday: 67,
    ordersTotal: 28900
  },
  {
    id: '8',
    name: 'Walmart',
    icon: '🏬',
    status: 'disconnected',
    ordersToday: 0,
    ordersTotal: 0
  }
]
