import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Clock } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Appointments', path: '/appointments' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-blue-dark text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={16} />
              <span>Emergency: +1 (555) 0123</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={16} />
              <span>24/7 Emergency Care</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>📧 info@HKGastro.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">HKGastro</h1>
                <p className="text-sm text-slate-600">
                  Excellence in Gastrology
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 relative ${
                    location.pathname === item.path
                      ? "text-brand-green"
                      : "text-slate-700 hover:text-brand-green"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-green"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/appointments"
                className="bg-brand-green text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 hover:bg-brand-blue"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 pt-2 pb-4 bg-white border-t">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-brand-blue"
                    : "text-slate-700 hover:text-brand-blue"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/appointments"
              className="block mt-4 bg-gradient-to-r from-brand-blue to-brand-green text-white text-center px-6 py-3 rounded-full font-medium"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
