import type { Platform } from '@/types'

import amazonLogo from '@/assets/image/amazon.jpg'
import ebayLogo from '@/assets/image/ebay.jpg'
import shopeeLogo from '@/assets/image/shopee.png'
import ozoneLogo from '@/assets/image/ozone.png'
import tiktokLogo from '@/assets/image/tiktok.jpg'
import temuLogo from '@/assets/image/temu.png'

export const platforms: Platform[] = [
  {
    id: '9',
    name: 'Ozone',
    logo: ozoneLogo,
    status: 'connected',
    ordersToday: 78,
    ordersTotal: 12345
  },
  {
    id: '1',
    name: 'Amazon',
    logo: amazonLogo,
    status: 'connected',
    ordersToday: 156,
    ordersTotal: 45890
  },
  {
    id: '2',
    name: 'eBay',
    logo: ebayLogo,
    status: 'connected',
    ordersToday: 89,
    ordersTotal: 32145
  },
  {
    id: '3',
    name: 'Shopee',
    logo: shopeeLogo,
    status: 'connected',
    ordersToday: 234,
    ordersTotal: 67890
  },
  {
    id: '5',
    name: 'TikTok Shop',
    logo: tiktokLogo,
    status: 'connected',
    ordersToday: 345,
    ordersTotal: 23456
  },
  {
    id: '6',
    name: 'Temu',
    logo: temuLogo,
    status: 'disconnected',
    ordersToday: 0,
    ordersTotal: 0
  }
]

export const platformImages = {
  amazon: amazonLogo,
  ebay: ebayLogo,
  shopee: shopeeLogo,
  ozone: ozoneLogo,
  tiktok: tiktokLogo,
  temu: temuLogo
}
