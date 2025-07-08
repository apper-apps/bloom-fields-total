import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const About = () => {
  const features = [
    {
      icon: 'Leaf',
      title: 'Sustainable Farming',
      description: 'We use eco-friendly practices to grow our flowers, ensuring minimal environmental impact while maximizing beauty and freshness.'
    },
    {
      icon: 'Heart',
      title: 'Family Tradition',
      description: 'Four generations of our family have been growing flowers on this land, passing down knowledge and passion for beautiful blooms.'
    },
    {
      icon: 'Truck',
      title: 'Fresh Delivery',
      description: 'Same-day delivery available within our local area. Your flowers are picked fresh and delivered at peak beauty.'
    },
    {
      icon: 'Users',
      title: 'Community Focus',
      description: 'We support our local community by providing jobs, beautifying neighborhoods, and participating in local events.'
    }
  ]

  const timeline = [
    { year: '1985', event: 'Farm established by John and Mary Fields' },
    { year: '1995', event: 'Expanded to include greenhouse operations' },
    { year: '2005', event: 'Second generation takes over operations' },
    { year: '2015', event: 'Launch of online flower delivery service' },
    { year: '2020', event: 'Became fully organic certified' },
    { year: '2024', event: 'Serving over 5,000 happy customers annually' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
            alt="Bloom Fields Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl px-4"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About Bloom Fields
            </h1>
            <p className="text-xl text-white text-opacity-90">
              Growing beautiful flowers and creating lasting memories since 1985
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bloom Fields began as a dream of John and Mary Fields in 1985. What started as a small 
                  family garden has grown into a thriving flower farm that serves our entire community 
                  with fresh, beautiful blooms.
                </p>
                <p>
                  Today, we're proud to be a four-generation family business, with each generation 
                  bringing new ideas while maintaining our commitment to quality, sustainability, and 
                  community service.
                </p>
                <p>
                  Every flower we grow is tended with care, harvested at peak beauty, and delivered 
                  fresh to bring joy to your special moments. From our family to yours, we're honored 
                  to be part of your celebrations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80"
                alt="Farm family"
                className="rounded-petal shadow-organic"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-petal shadow-card">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">39</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              What Makes Us Special
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to growing the most beautiful flowers while caring for our environment and community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="mb-4">
                  <div className="mx-auto w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <ApperIcon name={feature.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our farm's history
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-card"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="card">
                      <div className="font-bold text-primary text-lg">{item.year}</div>
                      <div className="text-gray-600 mt-1">{item.event}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="mb-4">
                <ApperIcon name="MapPin" size={32} className="mx-auto" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Visit Our Farm</h3>
              <p className="text-white text-opacity-90">
                123 Farm Road<br />
                Countryside, CA 90210
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4">
                <ApperIcon name="Clock" size={32} className="mx-auto" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Farm Hours</h3>
              <p className="text-white text-opacity-90">
                Monday - Sunday<br />
                8:00 AM - 6:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="mb-4">
                <ApperIcon name="Phone" size={32} className="mx-auto" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-white text-opacity-90">
                (555) 123-4567<br />
                hello@bloomfields.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About