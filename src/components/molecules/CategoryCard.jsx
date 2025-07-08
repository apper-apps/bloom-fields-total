import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const CategoryCard = ({ category, title, description, icon, gradient }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-hidden rounded-petal p-8 text-white"
      style={{
        background: gradient || 'linear-gradient(135deg, #2D5016 0%, #4A7C4E 100%)'
      }}
    >
      <Link to={`/shop?category=${category}`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-white bg-opacity-20 rounded-petal">
            <ApperIcon name={icon} size={32} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold">{title}</h3>
            <p className="text-white text-opacity-90">{description}</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm font-medium">
          <span>Shop Now</span>
          <ApperIcon name="ArrowRight" size={16} className="ml-2" />
        </div>
      </Link>
    </motion.div>
  )
}

export default CategoryCard