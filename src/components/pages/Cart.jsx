import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '@/components/atoms/Button'
import CartItem from '@/components/molecules/CartItem'
import ApperIcon from '@/components/ApperIcon'
import { useCart } from '@/hooks/useCart'

const Cart = () => {
  const { items, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Your Cart
          </h1>
          
          <div className="text-center py-12">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 bg-gradient-organic rounded-full flex items-center justify-center">
                <ApperIcon name="ShoppingCart" size={48} className="text-primary" />
              </div>
            </div>
            
            <h3 className="font-display text-2xl font-semibold text-gray-800 mb-2">
              Your cart is empty
            </h3>
            
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any beautiful flowers to your cart yet.
            </p>
            
            <Link to="/shop">
              <Button size="lg" className="flex items-center gap-2 mx-auto">
                <ApperIcon name="Flower" size={20} />
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gray-800">
            Your Cart
          </h1>
          
          <Button
            variant="outline"
            onClick={clearCart}
            className="flex items-center gap-2"
          >
            <ApperIcon name="Trash2" size={16} />
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <CartItem key={item.productId} item={item} />
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card sticky top-4"
            >
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Delivery</span>
                  <span className="text-success">Free</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-bold text-2xl text-gradient">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <Link to="/checkout">
                  <Button size="lg" className="w-full flex items-center justify-center gap-2">
                    <ApperIcon name="CreditCard" size={20} />
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <Link to="/shop">
                  <Button variant="outline" size="lg" className="w-full flex items-center justify-center gap-2">
                    <ApperIcon name="ArrowLeft" size={20} />
                    Continue Shopping
                  </Button>
                </Link>
              </div>
              
              {/* Delivery Info */}
              <div className="mt-6 p-4 bg-surface rounded-petal">
                <div className="flex items-center space-x-2 mb-2">
                  <ApperIcon name="Truck" size={16} className="text-primary" />
                  <span className="font-semibold text-sm">Free Local Delivery</span>
                </div>
                <p className="text-xs text-gray-600">
                  Orders placed before 2 PM are delivered the same day within our local area.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart