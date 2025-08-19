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
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-blue-dark text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[16px]">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={18} />
              <span>Emergency: +91 63092 42320</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock size={18} />
              <span>24/7 Emergency Care</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>📧 hksurgicalgastro@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg" : "bg-white"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" onClick={handleClick} className="flex items-center">
              <img
                src="https://res.cloudinary.com/djnyc9yqk/image/upload/v1755577422/HK_Surgical_Gastro_logo_fwqq5h.png" // replace with your actual logo path
                alt="HKGastro Logo"
                className="w-48 h-48 object-contain cursor-pointer"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 relative ${location.pathname === item.path
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
                className="relative inline-block px-6 py-3 font-semibold text-white rounded-full overflow-hidden
             bg-gradient-to-r from-[#43B649] via-[#FFD24C] to-[#00B9B0] bg-[length:300%_300%] animate-gradient
             shadow-[0_0_20px_rgba(255,210,76,0.7)] group"
              >
                {/* Rotating border */}
                <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#43B649] via-[#FFD24C] to-[#00B9B0]
                   opacity-0 group-hover:opacity-100 animate-rotate-border transition-opacity duration-300">

                </span>

                {/* Button text */}
                <span className="relative z-10">Book Appointment</span>

                {/* Sparkle shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent
                   animate-shine"></span>
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
                className={`block py-3 font-medium transition-colors ${location.pathname === item.path
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
