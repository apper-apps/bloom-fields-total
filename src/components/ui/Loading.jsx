import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-petal shadow-card overflow-hidden"
        >
          {/* Image Skeleton */}
          <div className="w-full h-48 bg-gradient-to-r from-surface via-gray-200 to-surface animate-pulse"></div>
          
          {/* Content Skeleton */}
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
              <div className="h-4 bg-gradient-to-r from-surface via-gray-200 to-surface rounded w-3/4 animate-pulse"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="h-8 w-20 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
              <div className="h-10 w-24 bg-gradient-to-r from-surface via-gray-200 to-surface rounded animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Loading