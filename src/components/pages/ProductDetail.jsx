import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { useCart } from '@/hooks/useCart'
import productService from '@/services/api/productService'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem, getItemQuantity } = useCart()

  const loadProduct = async () => {
    try {
      setLoading(true)
      setError('')
      const productData = await productService.getById(id)
      setProduct(productData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity)
    }
  }

  const handleQuantityChange = (delta) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full h-96 bg-gradient-to-r from-surface via-gray-200 to-surface rounded-petal animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
              <div className="h-6 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
              <div className="h-24 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
              <div className="h-12 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message={error} onRetry={loadProduct} />
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Error message="Product not found" />
        </div>
      </div>
    )
  }

  const currentQuantityInCart = getItemQuantity(product.Id)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ApperIcon name="ChevronRight" size={16} />
            <Link to="/shop" className="hover:text-primary">Shop</Link>
            <ApperIcon name="ChevronRight" size={16} />
            <span className="text-gray-800">{product.name}</span>
          </div>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative overflow-hidden rounded-petal"
            >
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {!product.inStock && (
                <div className="absolute top-4 left-4">
                  <Badge variant="error">Out of Stock</Badge>
                </div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-petal overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category.replace('-', ' ')}
              </Badge>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-gradient">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Care Instructions */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Care Instructions</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.careInstructions}
              </p>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-gray-800">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                    className="w-10 h-10 p-0"
                  >
                    <ApperIcon name="Minus" size={16} />
                  </Button>
                  <span className="w-12 text-center font-semibold">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 p-0"
                  >
                    <ApperIcon name="Plus" size={16} />
                  </Button>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <ApperIcon name="ShoppingCart" size={20} />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>

              {currentQuantityInCart > 0 && (
                <p className="text-sm text-success text-center">
                  {currentQuantityInCart} of this item in your cart
                </p>
              )}
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-success bg-opacity-10 rounded-petal">
                  <ApperIcon name="Leaf" size={20} className="text-success" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Fresh & Local</p>
                  <p className="text-sm text-gray-600">Farm-grown flowers</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary bg-opacity-10 rounded-petal">
                  <ApperIcon name="Truck" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Fast Delivery</p>
                  <p className="text-sm text-gray-600">Same-day available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail