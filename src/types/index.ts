export interface Order {
  id: string
  orderNo: string
  platform: string
  customer: string
  amount: number
  currency: string
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  createTime: string
  updateTime: string
}

export interface Inventory {
  id: string
  sku: string
  name: string
  category: string
  stock: number
  warehouse: string
  minStock: number
  unit: string
  price: number
  status: 'normal' | 'low' | 'out'
  updateTime: string
}

export interface Platform {
  id: string
  name: string
  logo?: string
  status: 'connected' | 'disconnected'
  ordersToday: number
  ordersTotal: number
}

export interface Analytics {
  date: string
  orders: number
  revenue: number
  visitors: number
  conversionRate: number
}
