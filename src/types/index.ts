// 订单类型
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

// 库存类型
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

// 平台对接类型
export interface Platform {
  id: string
  name: string
  icon: string
  status: 'connected' | 'disconnected'
  ordersToday: number
  ordersTotal: number
}

// 数据分析类型
export interface Analytics {
  date: string
  orders: number
  revenue: number
  visitors: number
  conversionRate: number
}

// 菜单项类型
export interface MenuItem {
  id: string
  label: string
  path: string
  icon: string
}

// 页面元数据类型
export interface PageMeta {
  title: string
  description?: string
}
