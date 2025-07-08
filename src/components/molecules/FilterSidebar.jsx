import { useState } from 'react'
import Button from '@/components/atoms/Button'
import Label from '@/components/atoms/Label'
import ApperIcon from '@/components/ApperIcon'

const FilterSidebar = ({ onFilterChange, categories, priceRange }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [minPrice, setMinPrice] = useState(priceRange.min)
  const [maxPrice, setMaxPrice] = useState(priceRange.max)
  const [inStockOnly, setInStockOnly] = useState(false)

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      minPrice,
      maxPrice,
      inStock: inStockOnly
    })
  }

  const clearFilters = () => {
    setSelectedCategory('all')
    setMinPrice(priceRange.min)
    setMaxPrice(priceRange.max)
    setInStockOnly(false)
    onFilterChange({
      category: 'all',
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      inStock: false
    })
  }

  return (
    <div className="card space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-semibold">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-xs"
        >
          Clear All
        </Button>
      </div>

      {/* Category Filter */}
      <div className="space-y-3">
        <Label>Category</Label>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-primary"
            />
            <span className="text-sm">All Categories</span>
          </label>
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-primary"
              />
              <span className="text-sm capitalize">
                {category.replace('-', ' ')}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label>Price Range</Label>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm">$</span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(parseFloat(e.target.value))}
              className="w-20 px-2 py-1 text-sm border rounded"
              min={priceRange.min}
              max={priceRange.max}
            />
            <span className="text-sm">to</span>
            <span className="text-sm">$</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
              className="w-20 px-2 py-1 text-sm border rounded"
              min={priceRange.min}
              max={priceRange.max}
            />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>${priceRange.min}</span>
            <span>${priceRange.max}</span>
          </div>
        </div>
      </div>

      {/* Stock Filter */}
      <div className="space-y-3">
        <Label>Availability</Label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
            className="text-primary"
          />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>

      <Button
        onClick={handleFilterChange}
        className="w-full flex items-center justify-center gap-2"
      >
        <ApperIcon name="Filter" size={16} />
        Apply Filters
      </Button>
    </div>
  )
}

export default FilterSidebar