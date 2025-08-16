import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    mobile: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnquiryData({
      ...enquiryData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would send this data to your backend
    console.log('Enquiry Data:', enquiryData);

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEnquiryData({
        name: '',
        mobile: '',
        message: ''
      });
    }, 5000);
  };

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
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our team for appointments, inquiries, or emergency care. 
              We're here to help you with all your gastroenterological needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Address */}
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 border border-blue-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Hospital Address</h3>
                    <p className="text-slate-700">
                      123 Medical Center Drive<br />
                      Healthcare City, HC 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Phone Numbers</h3>
                    <div className="space-y-2 text-slate-700">
                      <p><strong className="text-red-600">Emergency:</strong> +1 (555) 0123</p>
                      <p><strong className="text-blue-600">Appointments:</strong> +1 (555) 0124</p>
                      <p><strong className="text-emerald-600">General Inquiries:</strong> +1 (555) 0125</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Addresses</h3>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>General:</strong> info@HKGastro.com</p>
                      <p><strong>Appointments:</strong> appointments@HKGastro.com</p>
                      <p><strong>Emergency:</strong> emergency@HKGastro.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Hospital Hours</h3>
                    <div className="space-y-2 text-slate-700">
                      <p><strong>Mon-Fri:</strong> 9:00 AM - 5:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                      <p className="text-red-600 font-semibold">Emergency Care: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enquiry Form and Map */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Quick Enquiry Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Quick Enquiry</h2>
                <p className="text-slate-600 mb-8">Send us a message and we'll get back to you shortly</p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={enquiryData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-semibold text-slate-700 mb-2">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={enquiryData.mobile}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={enquiryData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="mx-auto mb-6 text-green-500" size={80} />
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for your enquiry. Our team will get back to you within 24 hours.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                      <p className="text-green-800 font-semibold">We've received your message</p>
                      <p className="text-green-700 text-sm mt-1">
                        You'll also receive an SMS confirmation on your mobile number shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Google Maps */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Find Us</h3>
                  <p className="text-slate-600">Located in the heart of Healthcare City</p>
                </div>
                <div className="h-96 bg-slate-200 rounded-b-3xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0060123456789!3d40.7128123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA0JzM2LjEiTiA3NMKwMDInMjEuNyJX!5e0!3m2!1sen!2sus!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HKGastro Hospital Location"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Emergency Care Available 24/7</h2>
            <p className="text-xl mb-8 text-red-100">
              If you're experiencing a gastroenterological emergency, don't wait. 
              Call our emergency hotline immediately for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15550123"
                className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Call Emergency: +1 (555) 0123
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Emergency Services Info
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;