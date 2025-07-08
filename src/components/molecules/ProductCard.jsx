import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import { useCart } from '@/hooks/useCart'

const ProductCard = ({ product }) => {
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="card group overflow-hidden"
    >
      <Link to={`/product/${product.Id}`}>
        <div className="relative overflow-hidden rounded-petal mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute top-2 left-2">
              <Badge variant="error">Out of Stock</Badge>
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge variant="secondary">
              {product.category.replace('-', ' ')}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-display text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gradient">
              ${product.price.toFixed(2)}
            </span>
            
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              size="sm"
              className="flex items-center gap-2"
            >
              <ApperIcon name="ShoppingCart" size={16} />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProductCard