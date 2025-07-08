import productsData from '@/services/mockData/products.json'

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

class ProductService {
  async getAll() {
    await delay(300)
    return [...productsData]
  }

  async getById(id) {
    await delay(200)
    const product = productsData.find(p => p.Id === parseInt(id))
    if (!product) {
      throw new Error('Product not found')
    }
    return { ...product }
  }

  async getByCategory(category) {
    await delay(250)
    return productsData
      .filter(p => p.category === category)
      .map(p => ({ ...p }))
  }

  async getFeatured() {
    await delay(200)
    // Return first 6 products as featured
    return productsData.slice(0, 6).map(p => ({ ...p }))
  }

  async searchProducts(query) {
    await delay(300)
    const lowercaseQuery = query.toLowerCase()
    return productsData
      .filter(p => 
        p.name.toLowerCase().includes(lowercaseQuery) ||
        p.description.toLowerCase().includes(lowercaseQuery) ||
        p.category.toLowerCase().includes(lowercaseQuery)
      )
      .map(p => ({ ...p }))
  }

  async filterProducts(filters) {
    await delay(300)
    let filtered = [...productsData]

    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category)
    }

    if (filters.minPrice !== undefined) {
      filtered = filtered.filter(p => p.price >= filters.minPrice)
    }

    if (filters.maxPrice !== undefined) {
      filtered = filtered.filter(p => p.price <= filters.maxPrice)
    }

    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock)
    }

    return filtered.map(p => ({ ...p }))
  }

  getCategories() {
    const categories = [...new Set(productsData.map(p => p.category))]
    return categories
  }

  getPriceRange() {
    const prices = productsData.map(p => p.price)
    return {
      min: Math.min(...prices),
      max: Math.max(...prices)
    }
  }
}

export default new ProductService()