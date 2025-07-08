import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import { useCart } from '@/hooks/useCart'

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart()

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(item.productId, newQuantity)
  }

  const handleRemove = () => {
    removeItem(item.productId)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center space-x-4 p-4 bg-white rounded-petal shadow-card"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-petal"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 truncate">{item.name}</h4>
        <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="p-1 h-8 w-8"
        >
          <ApperIcon name="Minus" size={16} />
        </Button>
        
        <span className="w-8 text-center font-semibold">{item.quantity}</span>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="p-1 h-8 w-8"
        >
          <ApperIcon name="Plus" size={16} />
        </Button>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleRemove}
          className="text-error hover:text-error p-1 mt-1"
        >
          <ApperIcon name="Trash2" size={16} />
        </Button>
      </div>
    </motion.div>
  )
}

export default CartItem