import type { Inventory } from '@/types'

const categories = ['电子产品', '服装配饰', '家居用品', '运动户外', '智能家居', '箱包配件']
const warehouses = ['深圳仓', '广州仓', '东莞仓', '杭州仓', '上海仓']
const baseProducts = [
  { name: '智能手表', unit: '台', price: 199.99 },
  { name: '无线蓝牙耳机', unit: '套', price: 59.99 },
  { name: '便携充电宝', unit: '个', price: 29.99 },
  { name: '运动健身套装', unit: '套', price: 79.99 },
  { name: '智能家居网关', unit: '个', price: 89.99 },
  { name: 'LED台灯', unit: '盏', price: 45.99 },
  { name: '不锈钢保温杯', unit: '个', price: 24.99 },
  { name: '瑜伽垫', unit: '张', price: 35.99 },
  { name: '无线充电器', unit: '个', price: 39.99 },
  { name: '折叠背包', unit: '个', price: 49.99 },
  { name: '智能音箱', unit: '台', price: 129.99 },
  { name: '蓝牙键盘', unit: '个', price: 69.99 },
  { name: '鼠标垫', unit: '个', price: 19.99 },
  { name: '数据线', unit: '根', price: 9.99 },
  { name: '手机支架', unit: '个', price: 15.99 },
  { name: '收纳盒', unit: '个', price: 25.99 },
  { name: '坐垫', unit: '个', price: 49.99 },
  { name: '窗帘', unit: '套', price: 129.99 },
  { name: '抱枕', unit: '个', price: 39.99 },
  { name: '地毯', unit: '张', price: 89.99 }
]

export const inventory: Inventory[] = []

for (let i = 1; i <= 28560; i++) {
  const baseProduct = baseProducts[Math.floor(Math.random() * baseProducts.length)]
  const category = categories[Math.floor(Math.random() * categories.length)]
  const stock = Math.floor(Math.random() * 5000) + 10
  const minStock = Math.floor(Math.random() * 100) + 20
  const status = stock === 0 ? 'out' : stock < minStock ? 'low' : 'normal'
  const num = i.toString().padStart(5, '0')
  const catCode = category.substring(0, 2)
  const hours = Math.floor(Math.random() * 24).toString().padStart(2, '0')
  const minutes = Math.floor(Math.random() * 60).toString().padStart(2, '0')

  inventory.push({
    id: i.toString(),
    sku: `SKU-${catCode}-${num}`,
    name: `${baseProduct.name} ${i % 3 === 0 ? 'Pro' : i % 3 === 1 ? 'Plus' : 'Lite'}`,
    category,
    stock,
    warehouse: warehouses[Math.floor(Math.random() * warehouses.length)],
    minStock,
    unit: baseProduct.unit,
    price: baseProduct.price,
    status,
    updateTime: `2024-12-${Math.floor(Math.random() * 30 + 1).toString().padStart(2, '0')} ${hours}:${minutes}:00`
  })
}

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
