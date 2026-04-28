import type { Order } from '@/types'

export const orders: Order[] = [
  {
    id: '1',
    orderNo: 'ORD20241227001',
    platform: 'Amazon',
    customer: 'John Smith',
    amount: 125.99,
    currency: 'USD',
    status: 'pending',
    createTime: '2024-12-27 10:30:00',
    updateTime: '2024-12-27 10:30:00'
  },
  {
    id: '2',
    orderNo: 'ORD20241227002',
    platform: 'eBay',
    customer: 'Emma Wilson',
    amount: 89.50,
    currency: 'USD',
    status: 'processing',
    createTime: '2024-12-27 09:15:00',
    updateTime: '2024-12-27 11:20:00'
  },
  {
    id: '3',
    orderNo: 'ORD20241227003',
    platform: 'Shopee',
    customer: '李明',
    amount: 567.00,
    currency: 'SGD',
    status: 'shipped',
    createTime: '2024-12-26 14:20:00',
    updateTime: '2024-12-27 08:45:00'
  },
  {
    id: '4',
    orderNo: 'ORD20241227004',
    platform: 'Amazon',
    customer: 'Maria Garcia',
    amount: 234.75,
    currency: 'EUR',
    status: 'delivered',
    createTime: '2024-12-25 16:45:00',
    updateTime: '2024-12-26 12:30:00'
  },
  {
    id: '5',
    orderNo: 'ORD20241227005',
    platform: 'Lazada',
    customer: 'Ahmad Hassan',
    amount: 178.25,
    currency: 'MYR',
    status: 'cancelled',
    createTime: '2024-12-25 11:20:00',
    updateTime: '2024-12-25 18:00:00'
  },
  {
    id: '6',
    orderNo: 'ORD20241226001',
    platform: 'TikTok Shop',
    customer: 'Chen Xiaoyu',
    amount: 345.00,
    currency: 'USD',
    status: 'pending',
    createTime: '2024-12-26 13:40:00',
    updateTime: '2024-12-26 13:40:00'
  },
  {
    id: '7',
    orderNo: 'ORD20241226002',
    platform: 'Amazon',
    customer: 'David Brown',
    amount: 98.99,
    currency: 'USD',
    status: 'processing',
    createTime: '2024-12-26 10:15:00',
    updateTime: '2024-12-26 14:30:00'
  },
  {
    id: '8',
    orderNo: 'ORD20241226003',
    platform: 'Shopee',
    customer: 'Wang Wei',
    amount: 89.00,
    currency: 'PHP',
    status: 'shipped',
    createTime: '2024-12-25 09:30:00',
    updateTime: '2024-12-26 07:15:00'
  },
  {
    id: '9',
    orderNo: 'ORD20241225001',
    platform: 'eBay',
    customer: 'Sarah Johnson',
    amount: 156.80,
    currency: 'GBP',
    status: 'delivered',
    createTime: '2024-12-24 15:20:00',
    updateTime: '2024-12-25 11:00:00'
  },
  {
    id: '10',
    orderNo: 'ORD20241225002',
    platform: 'Lazada',
    customer: 'Siti Nurhaliza',
    amount: 245.00,
    currency: 'IDR',
    status: 'processing',
    createTime: '2024-12-24 12:45:00',
    updateTime: '2024-12-25 09:20:00'
  }
]

export const getOrderStats = () => {
  return {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    processing: orders.filter(o => o.status === 'processing').length,
    shipped: orders.filter(o => o.status === 'shipped').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    totalAmount: orders.reduce((sum, o) => sum + o.amount, 0)
  }
}
