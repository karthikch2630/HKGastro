import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { image } from 'framer-motion/client';

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
      image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755345977/13-01_lagbit.png',
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
       image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346249/4-01_xpb7hq.png',
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
       image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346179/14-01_f9fmco.png',
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
       image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346218/7-01_vjxoae.png',
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
       image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346214/10-01_esn2qr.png',
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
       image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346174/15-01_mqoqvv.png',
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
     image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346188/11-01_ptontc.png',
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
       image:'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346263/1-01_hvxdqm.png',
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
              Comprehensive gastroenterological and surgical services with
              expertise in advanced laparoscopic and minimally invasive
              procedures
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[${colors.white}]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#43B649] mb-3">
              Specialized Treatment Areas
            </h2>
            <p className="text-lg text-[${colors.gray}] max-w-2xl mx-auto">
              Expert care for all gastroenterological conditions with advanced
              techniques
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-brand-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-brand-gray/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={category.image}
                      alt={`${category.title} icon`}
                      className="w-16 h-16 object-contain "
                    />
                    <h3 className="text-xl font-semibold text-brand-green">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="flex items-center gap-2 text-brand-gray text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <Link
                      to="/appointments"
                      className="inline-flex items-center px-4 py-2 bg-brand-green text-brand-white text-sm font-medium rounded-lg hover:bg-brand-teal/90 transition-colors duration-200"
                    >
                      Book Appointment
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                    <button className="px-4 py-2 border border-brand-gray text-[${colors.gray}] text-sm font-medium rounded-lg hover:bg-brand-gray/10 transition-colors duration-200">
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
            <h2 className="text-4xl font-bold text-brand-blue-dark mb-4">
              Why Choose HKGastro?
            </h2>
            <p className="text-xl text-brand-gray">
              Advanced care with proven results
            </p>
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
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">
                Years of Experience
              </h3>
              <p className="text-brand-gray">
                Proven expertise in gastroenterological care
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold text-brand-white">
                  5000+
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">
                Successful Surgeries
              </h3>
              <p className="text-brand-gray">
                Outstanding surgical outcomes and patient satisfaction
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-white">
                  24/7
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">
                Emergency Care
              </h3>
              <p className="text-brand-gray">
                Round-the-clock emergency gastroenterology services
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-blue-dark">
                  🏆
                </span>
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-2">
                Award Winning
              </h3>
              <p className="text-brand-gray">
                Recognized for excellence in patient care and innovation
              </p>
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
            <h2 className="text-4xl font-bold mb-6">
              Need Expert Gastroenterological Care?
            </h2>
            <p className="text-xl mb-8 text-brand-white/80">
              Don't wait - schedule your consultation today and take the first
              step toward better digestive health
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