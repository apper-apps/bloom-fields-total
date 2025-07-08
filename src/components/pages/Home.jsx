import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import HeroSection from '@/components/organisms/HeroSection'
import ProductGrid from '@/components/organisms/ProductGrid'
import CategoryCard from '@/components/molecules/CategoryCard'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import productService from '@/services/api/productService'
import { Link } from 'react-router-dom'

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const loadFeaturedProducts = async () => {
    try {
      setLoading(true)
      setError('')
      const products = await productService.getFeatured()
      setFeaturedProducts(products)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFeaturedProducts()
  }, [])

  const categories = [
    {
      category: 'bouquets',
      title: 'Bouquets',
      description: 'Stunning arrangements for every occasion',
      icon: 'Heart',
      gradient: 'linear-gradient(135deg, #E8B4B8 0%, #C85450 100%)'
    },
    {
      category: 'single-stems',
      title: 'Single Stems',
      description: 'Individual blooms for simple elegance',
      icon: 'Flower',
      gradient: 'linear-gradient(135deg, #4A7C4E 0%, #2D5016 100%)'
    },
    {
      category: 'potted-plants',
      title: 'Potted Plants',
      description: 'Living plants for lasting beauty',
      icon: 'Leaf',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #D4A574 100%)'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured Flowers
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our handpicked selection of the most beautiful, fresh flowers 
              currently blooming in our fields.
            </p>
          </motion.div>

          <ProductGrid
            products={featuredProducts}
            loading={loading}
            error={error}
            onRetry={loadFeaturedProducts}
          />

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" className="flex items-center gap-2 mx-auto">
                <ApperIcon name="ArrowRight" size={20} />
                View All Flowers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Whether you're looking for a complete arrangement or individual stems, 
              we have something beautiful for every need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <CategoryCard {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Farm Promise
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                At Bloom Fields, we're committed to bringing you the freshest, 
                most beautiful flowers while caring for our environment and community.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-success bg-opacity-10 rounded-petal">
                    <ApperIcon name="Leaf" size={24} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sustainably Grown</h4>
                    <p className="text-gray-600">Eco-friendly farming practices</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary bg-opacity-10 rounded-petal">
                    <ApperIcon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Fresh Delivery</h4>
                    <p className="text-gray-600">Same-day local delivery available</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-accent bg-opacity-10 rounded-petal">
                    <ApperIcon name="Heart" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Support</h4>
                    <p className="text-gray-600">Supporting local families since 1985</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
                alt="Farm workers in flower field"
                className="rounded-petal shadow-organic"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-petal shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">35+</div>
                  <div className="text-sm text-gray-600">Years of Experience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home