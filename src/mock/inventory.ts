import type { Inventory } from '@/types'

export const inventory: Inventory[] = [
  {
    id: '1',
    sku: 'SKU-CT-001',
    name: '智能手表 Pro',
    category: '电子产品',
    stock: 245,
    warehouse: '深圳仓',
    minStock: 50,
    unit: '台',
    price: 199.99,
    status: 'normal',
    updateTime: '2024-12-27 10:00:00'
  },
  {
    id: '2',
    sku: 'SKU-CT-002',
    name: '无线蓝牙耳机',
    category: '电子产品',
    stock: 18,
    warehouse: '广州仓',
    minStock: 30,
    unit: '套',
    price: 59.99,
    status: 'low',
    updateTime: '2024-12-27 09:30:00'
  },
  {
    id: '3',
    sku: 'SKU-CT-003',
    name: '便携充电宝 10000mAh',
    category: '电子产品',
    stock: 567,
    warehouse: '深圳仓',
    minStock: 100,
    unit: '个',
    price: 29.99,
    status: 'normal',
    updateTime: '2024-12-27 08:45:00'
  },
  {
    id: '4',
    sku: 'SKU-CT-004',
    name: '运动健身套装',
    category: '服装配饰',
    stock: 0,
    warehouse: '东莞仓',
    minStock: 50,
    unit: '套',
    price: 79.99,
    status: 'out',
    updateTime: '2024-12-27 08:00:00'
  },
  {
    id: '5',
    sku: 'SKU-CT-005',
    name: '智能家居网关',
    category: '智能家居',
    stock: 123,
    warehouse: '深圳仓',
    minStock: 40,
    unit: '个',
    price: 89.99,
    status: 'normal',
    updateTime: '2024-12-27 07:30:00'
  },
  {
    id: '6',
    sku: 'SKU-CT-006',
    name: 'LED台灯护眼版',
    category: '家居用品',
    stock: 12,
    warehouse: '广州仓',
    minStock: 20,
    unit: '盏',
    price: 45.99,
    status: 'low',
    updateTime: '2024-12-26 22:15:00'
  },
  {
    id: '7',
    sku: 'SKU-CT-007',
    name: '不锈钢保温杯',
    category: '家居用品',
    stock: 432,
    warehouse: '东莞仓',
    minStock: 80,
    unit: '个',
    price: 24.99,
    status: 'normal',
    updateTime: '2024-12-26 21:00:00'
  },
  {
    id: '8',
    sku: 'SKU-CT-008',
    name: '瑜伽垫防滑加厚',
    category: '运动户外',
    stock: 278,
    warehouse: '深圳仓',
    minStock: 60,
    unit: '张',
    price: 35.99,
    status: 'normal',
    updateTime: '2024-12-26 20:30:00'
  },
  {
    id: '9',
    sku: 'SKU-CT-009',
    name: '无线充电器',
    category: '电子产品',
    stock: 8,
    warehouse: '广州仓',
    minStock: 25,
    unit: '个',
    price: 39.99,
    status: 'low',
    updateTime: '2024-12-26 19:45:00'
  },
  {
    id: '10',
    sku: 'SKU-CT-010',
    name: '折叠背包旅行款',
    category: '箱包配件',
    stock: 156,
    warehouse: '东莞仓',
    minStock: 40,
    unit: '个',
    price: 49.99,
    status: 'normal',
    updateTime: '2024-12-26 18:20:00'
  }
]

export const getInventoryStats = () => {
  return {
    total: inventory.length,
    normal: inventory.filter(i => i.status === 'normal').length,
    low: inventory.filter(i => i.status === 'low').length,
    out: inventory.filter(i => i.status === 'out').length,
    totalStock: inventory.reduce((sum, i) => sum + i.stock, 0),
    totalValue: inventory.reduce((sum, i) => sum + (i.stock * i.price), 0)
  }
}
