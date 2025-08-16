import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const colors = {
    brand: {
      blue: {
        DEFAULT: '#0095D8',
        dark: '#0073BC',
      },
      green: '#43B649',
      yellow: '#FFD24C',
      teal: '#00B9B0',
      gray: '#6D6E71',
      white: '#FFFFFF',
    },
  };

  const serviceCategories = [
    {
      title: 'Gallbladder & Bile Duct',
      icon: '🔵',
      color: colors.brand.blue.DEFAULT,
      services: [
        'Gallbladder Stones Treatment',
        'Polyps Removal',
        'Laparoscopic Cholecystectomy',
        'Radical Cholecystectomy',
        'CBD Exploration',
        'Whipple\'s Procedure',
        'Choledochal Cyst Excision',
        'Hepaticojejunostomy'
      ]
    },
    {
      title: 'Liver',
      icon: '🟤',
      color: colors.brand.yellow,
      services: [
        'Hydatid Cyst Treatment',
        'Laparoscopic Deroofing',
        'Liver Cancer Resection',
        'Hemangioma Resection',
        'Liver Biopsy',
        'Hepatitis Management',
        'Cirrhosis Treatment',
        'Liver Transplant Consultation'
      ]
    },
    {
      title: 'Pancreas',
      icon: '🟡',
      color: colors.brand.teal,
      services: [
        'Acute Pancreatitis Treatment',
        'Necrosectomy',
        'Chronic Pancreatitis Management',
        'Frey\'s LPJ Procedure',
        'Whipple\'s Procedure',
        'Distal Pancreatico Splenectomy',
        'Pancreatic Cyst Treatment',
        'Pancreatic Cancer Surgery'
      ]
    },
    {
      title: 'Spleen',
      icon: '🟣',
      color: colors.brand.blue.dark,
      services: [
        'Splenic Trauma Surgery',
        'Splenic Tumor Removal',
        'Splenic Cyst Treatment',
        'Splenectomy (Open & Laparoscopic)',
        'Splenic Artery Aneurysm',
        'Hypersplenism Treatment',
        'Emergency Spleen Surgery',
        'Minimally Invasive Procedures'
      ]
    },
    {
      title: 'Esophagus',
      icon: '🟠',
      color: colors.brand.green,
      services: [
        'GERD Treatment',
        'Hiatus Hernia Repair',
        'Laparoscopic Fundoplication',
        'Esophagectomy',
        'Colon Pull-up Surgery',
        'Esophageal Cancer Treatment',
        'Achalasia Treatment',
        'Barrett\'s Esophagus Management'
      ]
    },
    {
      title: 'Stomach',
      icon: '🟢',
      color: colors.brand.teal,
      services: [
        'Acid Peptic Disease Treatment',
        'TV+GJ Procedure',
        'Radical Gastrectomy',
        'Sleeve Gastrectomy',
        'Corrosive Stricture Surgery',
        'Gastric Cancer Surgery',
        'Peptic Ulcer Surgery',
        'Gastric Bypass Surgery'
      ]
    },
    {
      title: 'Colon & Rectum',
      icon: '🔴',
      color: colors.brand.blue.DEFAULT,
      services: [
        'IBD Management',
        'Total Colectomy',
        'Right Hemicolectomy',
        'Left Hemicolectomy',
        'Rectal Cancer Surgery',
        'Segmental Colectomy',
        'Colostomy Procedures',
        'Colorectal Cancer Treatment'
      ]
    },
    {
      title: 'Hernia',
      icon: '⚪',
      color: colors.brand.gray,
      services: [
        'Inguinal Hernia Repair',
        'Laparoscopic TAPP',
        'Umbilical Hernia Repair',
        'Incisional Hernia Repair',
        'Open & Laparoscopic Repair',
        'Diaphragmatic Hernia Surgery',
        'Ventral Hernia Repair',
        'Complex Hernia Surgery'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2563EB] via-[#00B9B0] to-[#43B649] text-brand-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-brand-white/80 max-w-3xl mx-auto">
              Comprehensive gastroenterological and surgical services with expertise 
              in advanced laparoscopic and minimally invasive procedures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-brand-blue-dark mb-4">Specialized Treatment Areas</h2>
            <p className="text-xl text-brand-gray">
              Expert care across all gastroenterological conditions with state-of-the-art techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-brand-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-brand-gray/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="p-6" style={{ backgroundColor: category.color }}>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-brand-white">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center space-x-2 text-brand-gray"
                      >
                        <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      to="/appointments"
                      className="bg-brand-blue-dark text-brand-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center text-sm"
                    >
                      Book Appointment
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                    <button className="border-2 border-brand-gray text-brand-gray hover:bg-brand-gray/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-brand-blue-dark mb-4">Why Choose HKGastro?</h2>
            <p className="text-xl text-brand-gray">Advanced care with proven results</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-brand-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-white">15+</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Years of Experience</h3>
              <p className="text-brand-gray">Proven expertise in gastroenterological care</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-brand-white">5000+</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Successful Surgeries</h3>
              <p className="text-brand-gray">Outstanding surgical outcomes and patient satisfaction</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-white">24/7</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Emergency Care</h3>
              <p className="text-brand-gray">Round-the-clock emergency gastroenterology services</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue-dark">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">Award Winning</h3>
              <p className="text-brand-gray">Recognized for excellence in patient care and innovation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue-dark text-brand-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Expert Gastroenterological Care?</h2>
            <p className="text-xl mb-8 text-brand-white/80">
              Don't wait - schedule your consultation today and take the first step toward better digestive health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-brand-green text-brand-white hover:bg-brand-blue px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Book Appointment Now
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-blue-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;