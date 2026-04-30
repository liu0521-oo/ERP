export function formatScientific(num: number): string {
  if (num >= 100000000) {
    const value = num / 100000000
    return value % 1 === 0 ? `${value}亿` : `${value.toFixed(2)}亿`
  }
  if (num >= 10000) {
    const value = num / 10000
    return value % 1 === 0 ? `${value}万` : `${value.toFixed(2)}万`
  }
  if (num >= 1000) {
    const value = num / 1000
    return value % 1 === 0 ? `${value}千` : `${value.toFixed(2)}千`
  }
  return num.toString()
}

export function formatNumber(num: number): string {
  return formatScientific(num)
}

export function getOrderStatusClass(status: string): string {
  const classes = {
    pending: 'bg-orange-100 text-orange-700',
    processing: 'bg-blue-100 text-blue-700',
    shipped: 'bg-green-100 text-green-700',
    delivered: 'bg-purple-100 text-purple-700',
    cancelled: 'bg-red-100 text-red-700'
  }
  return classes[status as keyof typeof classes] || 'bg-neutral-100 text-neutral-700'
}

export function getOrderStatusText(status: string): string {
  const texts = {
    pending: '待处理',
    processing: '处理中',
    shipped: '已发货',
    delivered: '已送达',
    cancelled: '已取消'
  }
  return texts[status as keyof typeof texts] || status
}

export function getInventoryStatusClass(status: string): string {
  const classes = {
    normal: 'bg-green-100 text-green-700',
    low: 'bg-orange-100 text-orange-700',
    out: 'bg-red-100 text-red-700'
  }
  return classes[status as keyof typeof classes] || 'bg-neutral-100 text-neutral-700'
}

export function getInventoryStatusText(status: string): string {
  const texts = {
    normal: '正常',
    low: '库存不足',
    out: '缺货'
  }
  return texts[status as keyof typeof texts] || status
}
