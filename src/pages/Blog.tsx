import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'When Should You See a Gastroenterologist?',
      excerpt: 'Learn about the warning signs and symptoms that indicate you should consult with a gastroenterology specialist for proper diagnosis and treatment.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Robert Smith',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Health Tips',
      content: 'Early detection and proper care are crucial for maintaining good digestive health...'
    },
    {
      title: 'Diet After Gallbladder Surgery: What You Need to Know',
      excerpt: 'Complete guide to nutrition and dietary adjustments following gallbladder removal surgery to ensure smooth recovery and optimal health.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Emily Johnson',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Post-Surgery Care',
      content: 'Proper nutrition after gallbladder surgery helps your body adapt to changes...'
    },
    {
      title: 'Understanding Laparoscopic Surgery: Benefits and Recovery',
      excerpt: 'Discover the advantages of minimally invasive surgical techniques and what to expect during your recovery process.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Michael Chen',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Surgery',
      content: 'Laparoscopic surgery offers numerous benefits including smaller incisions...'
    },
    {
      title: 'Managing GERD: Lifestyle Changes That Make a Difference',
      excerpt: 'Practical tips and lifestyle modifications to help manage gastroesophageal reflux disease and improve your quality of life.',
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Robert Smith',
      date: '2025-01-08',
      readTime: '4 min read',
      category: 'Condition Management',
      content: 'Simple lifestyle changes can significantly improve GERD symptoms...'
    },
    {
      title: 'Colon Cancer Screening: Early Detection Saves Lives',
      excerpt: 'Learn about the importance of regular colon cancer screening and the different methods available for early detection.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Emily Johnson',
      date: '2025-01-05',
      readTime: '8 min read',
      category: 'Prevention',
      content: 'Regular screening can detect colon cancer in its early stages when treatment is most effective...'
    },
    {
      title: 'Hernia Prevention: Exercises and Lifestyle Tips',
      excerpt: 'Discover effective ways to prevent hernias through proper exercise techniques and healthy lifestyle choices.',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dr. Michael Chen',
      date: '2025-01-03',
      readTime: '5 min read',
      category: 'Prevention',
      content: 'Understanding hernia risk factors and prevention strategies can help maintain your health...'
    }
  ];

  const categories = [
    'All Posts',
    'Health Tips',
    'Surgery',
    'Post-Surgery Care',
    'Condition Management',
    'Prevention'
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Posts');

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Patient Resources & Health Blog</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Stay informed about gastroenterological health with expert insights, treatment guides, 
              and wellness tips from our medical professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Stay Updated with Health Tips</h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to our newsletter and receive the latest health insights and medical updates directly in your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Additional Resources</h2>
            <p className="text-xl text-slate-600">Helpful information for your health journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl border border-blue-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Pre-Surgery Guidelines</h3>
              <p className="text-slate-600">
                Comprehensive preparation guides for various surgical procedures
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl border border-emerald-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Nutrition Guides</h3>
              <p className="text-slate-600">
                Dietary recommendations for optimal digestive health and recovery
              </p>
            </motion.div>

            <motion.div
              className="text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl border border-purple-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">❓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">FAQ Section</h3>
              <p className="text-slate-600">
                Answers to commonly asked questions about gastroenterological care
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;