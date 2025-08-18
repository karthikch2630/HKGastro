import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
  <div className="max-w-7xl mx-auto px-4 pt-12"> {/* ✅ only top padding */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0095D8] to-[#43B649] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">HKG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">HK Surgical Gastro</h3>
                <p className="text-sm text-slate-400">Expert Care for Your Digestive System</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4">
              Advanced Gastrology Care with Compassion. Your trusted partner for comprehensive gastrointestinal health solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook aria-label="Facebook" className="w-5 h-5 text-slate-400 hover:text-[#0095D8] cursor-pointer transition-colors" />
              <Twitter aria-label="Twitter" className="w-5 h-5 text-slate-400 hover:text-[#0095D8] cursor-pointer transition-colors" />
              <Instagram aria-label="Instagram" className="w-5 h-5 text-slate-400 hover:text-[#FFD24C] cursor-pointer transition-colors" />
              <Linkedin aria-label="LinkedIn" className="w-5 h-5 text-slate-400 hover:text-[#0095D8] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD24C]">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Book Appointment', 'Contact', 'Blog'].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-slate-400 hover:text-[#43B649] hover:underline transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD24C]">Our Services</h4>
            <ul className="space-y-2">
              {['Gallbladder Surgery', 'Liver Surgery', 'Pancreatic Surgery', 'Stomach Surgery', 'Colon & Rectum', 'Hernia Repair'].map((service, idx) => (
                <li key={idx} className="text-slate-400 hover:text-[#0095D8] hover:underline cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#FFD24C]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#43B649] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">123 Medical Center Drive</p>
                  <p className="text-slate-400">Healthcare City, HC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#43B649]" />
                <p className="text-slate-400">+91 1234567890</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#43B649]" />
                <p className="text-slate-400">info@HKGastro.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#43B649]" />
                <p className="text-slate-400">24/7 Emergency Care</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 py-2 text-center text-slate-400 text-xs sm:text-sm">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
        <span>© 2025 HKGastro Hospital. All rights reserved.</span>
        <span className="hidden sm:inline">|</span>
        <span className="sm:hidden">•</span>
        <span className="flex items-center gap-1">
          Designed by
          <a
            href="https://www.tactadvertising.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[#0095D8] transition-colors"
            aria-label="Tact Advertising Website"
          >
            <img
              src="https://res.cloudinary.com/diqux3y0a/image/upload/v1752647568/tact_favicon_z3qdye.png"
              alt="Tact Advertising Logo"
              className="w-4 h-4 object-contain"
            />
            <span>Tact Advertising</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
