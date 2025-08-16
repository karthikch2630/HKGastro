import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Stethoscope, Heart, Activity, Shield,
  ChevronRight, Star, ArrowRight
} from 'lucide-react';

import DigestiveViewer from '../components/DigestiveModel';

const Home = () => {
  const specialties = [
    {
      name: "Gallbladder",
      slug: "gallbladder",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755345977/13-01_lagbit.png",
      description: "Advanced laparoscopic ",
    },
    {
      name: "Liver",
      slug: "liver",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346249/4-01_xpb7hq.png",
      description: "Comprehensive liver care",
    },
    {
      name: "Pancreas",
      slug: "pancreas",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346179/14-01_f9fmco.png",
      description: "Specialized pancreatic surgery",
    },
    {
      name: "Stomach",
      slug: "stomach",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346174/15-01_mqoqvv.png",
      description: "Gastric surgery & treatment",
    },
    {
      name: "Colon",
      slug: "colon",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346188/11-01_ptontc.png",
      description: "Colorectal surgery expertise",
    },
    {
      name: "Hernia",
      slug: "hernia",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346263/1-01_hvxdqm.png",
      description: "Minimally invasive repair",
    },
    {
      name: "Esophagus",
      slug: "esophagus",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346214/10-01_esn2qr.png",
      description: "Esophageal surgery & care",
    },
    {
      name: "Spleen",
      slug: "spleen",
      icon: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1755346218/7-01_vjxoae.png",
      description: "Splenic surgery & treatment",
    },
  ];



  const testimonials = [
    {
      name: 'Ramesh Reddy',
      text: 'The doctors at HKGastro took excellent care of me during my gallbladder surgery. Very professional, caring, and skilled team.',
      rating: 5
    },
    {
      name: 'Sana Fatima',
      text: 'Dr. Prasad’s expertise in liver surgery gave me a new life. The staff were extremely supportive throughout my treatment.',
      rating: 5
    },
    {
      name: 'Krishna Murthy',
      text: 'One of the best hospitals in Hyderabad. The laparoscopic procedure was smooth, and my recovery was much faster than expected.',
      rating: 5
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2563EB] via-[#00B9B0] to-[#43B649] text-white overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 lg:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left-side text, vertically centered */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Advanced <span className="text-[#43B649]">Gastrology Care</span>
              <br />
              with Compassion
            </h1>
            <p className="text-base sm:text-lg mb-6 text-blue-100">
              Comprehensive gastrointestinal surgery and treatment with cutting-edge technology and personalized care for every patient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/appointments"
                className="bg-[#43B649] hover:bg-[#0095D8] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Book Appointment <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-center transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Right-side 3D model */}
          <motion.div
            className="relative w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DigestiveViewer />
          </motion.div>
        </div>
      </div>
    </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Key Specialties</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive gastroenterology and surgical services with expertise across all major GI conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {specialties.map((specialty, index) => (
              <Link to={`/specialties/${specialty.slug}`} key={specialty.slug}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group cursor-pointer flex flex-col items-center text-center h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-2">
                    <img
                      src={specialty.icon}
                      alt={specialty.name}
                      className="w-28 h-28 object-contain mx-auto transition-transform group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {specialty.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{specialty.description}</p>
                  <p className='text-blue-600 text-1xl mb-2>'>Learn More...</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-3xl p-8 text-white">
                <img
                  src="https://images.pexels.com/photos/5452295/pexels-photo-5452295.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Dr. Prasad Reddy"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white"
                />
                <h3 className="text-2xl font-bold text-center mb-2">Dr. Prasad Reddy</h3>
                <p className="text-center text-blue-100 mb-4">Chief Gastroenterologist & Surgeon</p>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <ul className="text-sm space-y-1">
                    <li>• MS, MCh in Surgical Gastroenterology - Osmania Medical College</li>
                    <li>• 18+ years of surgical expertise</li>
                    <li>• 6000+ successful laparoscopic & robotic procedures</li>
                    <li>• Member of Indian Association of Surgical Gastroenterology (IASG)</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Meet Our Expert</h2>
              <p className="text-lg text-slate-600 mb-6">
                Dr. Prasad Reddy leads our team with extensive experience in advanced laparoscopic and robotic surgery.
                He specializes in complex gastroenterological procedures with a focus on minimally invasive techniques
                for faster recovery and better outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700">Specialized in Advanced Laparoscopic Surgery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700">Expert in Liver, Pancreas & Gallbladder Procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-slate-700">Published Research in National & International Journals</span>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More About Our Team
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Patient Testimonials</h2>
            <p className="text-xl text-slate-600">What our patients say about their experience</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-semibold text-slate-900">- {testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule your consultation today and take the first step towards better gastrointestinal health
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="bg-brand-green hover:bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Appointment
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;