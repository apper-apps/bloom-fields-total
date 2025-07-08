import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = "Something went wrong", onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-12 px-4"
    >
      <div className="text-center max-w-md">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-error bg-opacity-10 rounded-full flex items-center justify-center">
            <ApperIcon name="AlertCircle" size={32} className="text-error" />
          </div>
        </div>
        
        <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
          Oops! Something went wrong
        </h3>
        
        <p className="text-gray-600 mb-6">
          {message}. We're sorry for the inconvenience. Please try again.
        </p>
        
        {onRetry && (
          <Button
            onClick={onRetry}
            className="flex items-center gap-2"
          >
            <ApperIcon name="RefreshCw" size={16} />
            Try Again
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export default Error