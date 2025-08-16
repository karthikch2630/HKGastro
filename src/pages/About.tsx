import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Building } from 'lucide-react';

const About = () => {
      const values = [
        {
          icon: <Heart className="text-red-600" size={48} />,
          title: 'Compassionate Care',
          description: 'We treat every patient with empathy, respect, and understanding throughout their healing journey.'
        },
        {
          icon: <Award className="text-amber-500" size={48} />,
          title: 'Excellence',
          description: 'We maintain the highest standards in medical care, continuously improving our services and expertise.'
        },
        {
          icon: <Users className="text-blue-600" size={48} />,
          title: 'Patient-Centered',
          description: 'Every decision we make is guided by what is best for our patients and their families.'
        }
      ];

      const doctors = [
        {
          name: 'Dr. Robert Smith',
          specialty: 'Chief Gastroenterologist & Surgeon',
          qualifications: 'MD, FACS, Johns Hopkins University',
          experience: '15+ years',
          image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
          specialties: ['Laparoscopic Surgery', 'Liver Surgery', 'Pancreatic Surgery']
        },
        {
          name: 'Dr. Emily Johnson',
          specialty: 'Senior Gastroenterologist',
          qualifications: 'MD, FACG, Mayo Clinic',
          experience: '12+ years',
          image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=400',
          specialties: ['Endoscopy', 'IBD Treatment', 'Colonoscopy']
        },
        {
          name: 'Dr. Michael Chen',
          specialty: 'Surgical Gastroenterologist',
          qualifications: 'MD, FACS, Stanford Medical',
          experience: '10+ years',
          image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=400',
          specialties: ['Hernia Surgery', 'Colorectal Surgery', 'Emergency Surgery']
        }
      ];

      const facilities = [
        {
          title: 'State-of-the-Art Operation Theaters',
          description: 'Fully equipped with advanced laparoscopic and robotic surgical systems',
          image: 'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755347745/2128_qpaktj.jpg'
        },
        {
          title: 'Modern ICU Facilities',
          description: '24/7 critical care with advanced monitoring and life support systems',
          image: 'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755347840/3717008_ykb4cj.jpg'
        },
        {
          title: 'Comfortable Patient Rooms',
          description: 'Private rooms with modern amenities for optimal recovery',
          image: 'https://res.cloudinary.com/djnyc9yqk/image/upload/v1755347905/39935_iz96i8.jpg'
        }
      ];

      return (
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 text-white py-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10"></div>
            <div className="relative max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center"
              >
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">About HKGastro</h1>
                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Pioneering gastroenterological care with advanced technology, compassionate service, and a commitment to excellence.
                </p>
              </motion.div>
            </div>
          </section>

          <div className="section-divider max-w-7xl mx-auto"></div>

          {/* Mission, Vision, Values */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {[
                  {
                    icon: <Target className="text-white" size={44} />,
                    title: 'Our Mission',
                    description: 'To provide world-class gastroenterological care through innovative treatments, advanced surgical techniques, and compassionate patient-centered service.'
                  },
                  {
                    icon: <Eye className="text-white" size={44} />,
                    title: 'Our Vision',
                    description: 'To be the leading gastroenterology center recognized for excellence in patient care, medical innovation, and surgical expertise.'
                  },
                  {
                    icon: <Building className="text-white" size={44} />,
                    title: 'Our Commitment',
                    description: 'We are committed to continuous improvement, medical excellence, and personalized care that exceeds expectations.'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="section-divider max-w-7xl mx-auto"></div>

          {/* Values */}
          <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-600">The principles that guide our pursuit of excellence</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex justify-center mb-6">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 text-base">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="section-divider max-w-7xl mx-auto"></div>

          {/* Doctor Profiles */}
          <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
                <p className="text-xl text-gray-600">Dedicated professionals delivering exceptional care</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="text-center">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-36 h-36 rounded-full mx-auto mb-4 object-cover shadow-md border-4 border-teal-100"
                      />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                      <p className="text-teal-600 font-semibold mb-2">{doctor.specialty}</p>
                      <p className="text-gray-600 text-sm mb-3">{doctor.qualifications}</p>
                      <div className="bg-teal-50 rounded-lg p-3 mb-4">
                        <p className="text-gray-700 font-medium">{doctor.experience} of experience</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {doctor.specialties.map((specialty, i) => (
                            <span
                              key={i}
                              className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="section-divider max-w-7xl mx-auto"></div>

          {/* Facilities */}
          <section className="py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Facilities</h2>
                <p className="text-xl text-gray-600">Advanced infrastructure for superior patient care</p>
              </motion.div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    };
export default About;