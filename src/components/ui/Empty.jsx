import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = "No flowers found", 
  description = "We couldn't find any flowers matching your search. Try adjusting your filters or browse our categories.",
  action = "Browse All Flowers",
  actionLink = "/shop"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 px-4"
    >
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="mx-auto w-24 h-24 bg-gradient-organic rounded-full flex items-center justify-center">
            <ApperIcon name="Flower" size={48} className="text-primary" />
          </div>
        </div>
        
        <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        <Link to={actionLink}>
          <Button className="flex items-center gap-2">
            <ApperIcon name="Search" size={16} />
            {action}
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

export default Empty