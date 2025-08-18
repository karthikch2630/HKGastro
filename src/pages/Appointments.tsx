import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle } from 'lucide-react';

const Appointments = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const services = [
    'Gallbladder & Bile Duct Surgery',
    'Liver Treatment & Surgery',
    'Pancreatic Surgery',
    'Spleen Surgery',
    'Esophageal Surgery',
    'Gastric Surgery',
    'Colon & Rectum Surgery',
    'Hernia Repair',
    'General Consultation',
    'Emergency Consultation'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://hkgastro.onrender.com/api/send-appointment-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send appointment emails');
      }

      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            service: '',
            preferredDate: '',
            preferredTime: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error(result.message || 'Error processing appointment');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting your appointment. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Book Your Appointment</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Schedule your consultation with our expert gastroenterologists and take the first step 
              toward better digestive health
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Form Section */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-6 sm:p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Appointment Request</h2>
                    <p className="text-gray-600 text-sm sm:text-base">Fill out the form below and we'll contact you to confirm your appointment</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                        {error}
                      </div>
                    )}

                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Select Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                      >
                        <option value="">Choose a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={formData.preferredTime}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                          >
                            <option value="">Select time...</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-4 text-gray-400" size={20} />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
                          placeholder="Tell us about your symptoms or any specific concerns..."
                        ></textarea>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Processing...
                        </div>
                      ) : (
                        'Book Appointment'
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  className="text-center py-8 sm:py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="mx-auto mb-4 sm:mb-6 text-green-500" size={60} />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Appointment Request Submitted!</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                    Thank you for choosing HKGastro. We've received your appointment request and will contact you within 24 hours to confirm your appointment details.
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-semibold text-sm sm:text-base">What's Next?</p>
                    <ul className="text-green-700 text-xs sm:text-sm mt-2 space-y-1">
                      <li>• Our team will review your request</li>
                      <li>• We'll call you to confirm the appointment</li>
                      <li>• You'll receive email confirmation</li>
                      <li>• Appointment reminders will be sent</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Information Panel */}
            <motion.div
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Info */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Phone className="text-red-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Emergency Hotline</p>
                      <p className="text-red-600 font-bold text-sm sm:text-base">+1 (555) 0123</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Phone className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">General Inquiries</p>
                      <p className="text-blue-600 font-bold text-sm sm:text-base">+1 (555) 0124</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Mail className="text-emerald-600" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Email Us</p>
                      <p className="text-emerald-600 font-bold text-sm sm:text-base">appointments@HKGastro.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hospital Hours */}
              <div className="bg-gradient-to-br from-blue-600 via-teal-500 to-green-500 rounded-3xl shadow-xl p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Hospital Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="border-t border-white/20 pt-3 mt-4">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span>Emergency Care</span>
                      <span className="font-semibold text-red-300">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Before Your Visit</h3>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={16} />
                    <span>Bring your insurance card and ID</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={16} />
                    <span>List all current medications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={16} />
                    <span>Prepare questions about your condition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="text-emerald-500 flex-shrink-0 mt-1" size={16} />
                    <span>Arrive 15 minutes early</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
