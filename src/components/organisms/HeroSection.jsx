import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const HeroSection = () => {
  return (
    <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
          alt="Beautiful flower field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Fresh Farm Flowers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
            From our fields to your home. Discover the beauty of locally-grown, 
            seasonal blooms that bring nature's wonder to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto">
                <ApperIcon name="Flower" size={20} className="mr-2" />
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white bg-opacity-20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary">
                <ApperIcon name="Heart" size={20} className="mr-2" />
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-8 left-8 hidden lg:block"
      >
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-petal p-4">
          <div className="flex items-center space-x-2 text-white">
            <ApperIcon name="Truck" size={20} />
            <span className="font-semibold">Free Local Delivery</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="absolute bottom-8 right-8 hidden lg:block"
      >
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-petal p-4">
          <div className="flex items-center space-x-2 text-white">
            <ApperIcon name="Leaf" size={20} />
            <span className="font-semibold">Sustainably Grown</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HeroSection