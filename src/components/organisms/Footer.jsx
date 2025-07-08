import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-white bg-opacity-20 rounded-petal">
                <ApperIcon name="Flower" size={24} />
              </div>
              <span className="font-display text-2xl font-bold">
                Bloom Fields
              </span>
            </div>
            <p className="text-white text-opacity-90">
              Fresh, locally-grown flowers bringing nature's beauty directly to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white text-opacity-90 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-white text-opacity-90 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-opacity-90 hover:text-white transition-colors">
                  About Farm
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-opacity-90 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Farm Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Farm Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <ApperIcon name="MapPin" size={16} />
                <span className="text-white text-opacity-90">
                  123 Farm Road, Countryside, CA 90210
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Clock" size={16} />
                <span className="text-white text-opacity-90">
                  Open 8am - 6pm Daily
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Phone" size={16} />
                <span className="text-white text-opacity-90">
                  (555) 123-4567
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-white text-opacity-90 mb-4">
              Get updates on seasonal blooms and special offers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-opacity-90 hover:text-white transition-colors">
                <ApperIcon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-white text-opacity-90 hover:text-white transition-colors">
                <ApperIcon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white text-opacity-90 hover:text-white transition-colors">
                <ApperIcon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center">
          <p className="text-white text-opacity-90">
            © 2024 Bloom Fields. All rights reserved. Made with 💚 for flower lovers.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer