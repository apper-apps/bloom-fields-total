import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ProductGrid from '@/components/organisms/ProductGrid'
import FilterSidebar from '@/components/molecules/FilterSidebar'
import SearchBar from '@/components/molecules/SearchBar'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import productService from '@/services/api/productService'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('name')
  const location = useLocation()

  const categories = productService.getCategories()
  const priceRange = productService.getPriceRange()

  const loadProducts = async (filters = {}) => {
    try {
      setLoading(true)
      setError('')
      
      // Check URL parameters
      const params = new URLSearchParams(location.search)
      const category = params.get('category')
      const searchQuery = params.get('search')
      
      let productList = []
      
      if (searchQuery) {
        productList = await productService.searchProducts(searchQuery)
      } else if (category) {
        productList = await productService.getByCategory(category)
      } else {
        productList = await productService.filterProducts(filters)
      }
      
      // Apply sorting
      productList = sortProducts(productList, sortBy)
      
      setProducts(productList)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const sortProducts = (productList, sortBy) => {
    const sorted = [...productList]
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return sorted
    }
  }

  useEffect(() => {
    loadProducts()
  }, [location.search, sortBy])

  const handleFilterChange = (filters) => {
    loadProducts(filters)
  }

  const handleSearch = (query) => {
    const params = new URLSearchParams(location.search)
    params.set('search', query)
    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`)
    loadProducts()
  }

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop Fresh Flowers
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our complete collection of farm-fresh flowers and arrangements
          </p>
        </div>

        {/* Search & Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <SearchBar onSearch={handleSearch} />
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={sortBy}
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-petal focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2"
            >
              <ApperIcon name="Filter" size={16} />
              Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar
              categories={categories}
              priceRange={priceRange}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600">
                {loading ? 'Loading...' : `${products.length} products found`}
              </p>
            </div>
            
            <ProductGrid
              products={products}
              loading={loading}
              error={error}
              onRetry={() => loadProducts()}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop