import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.3 5.36.103 11.78.103c3.17 0 6.155 1.237 8.4 3.484a11.82 11.82 0 013.49 8.413c-.003 6.42-5.2 11.62-11.622 11.62a11.9 11.9 0 01-5.95-1.596L.057 24zM6.64 20.452c1.78.995 3.17 1.591 5.14 1.593 5.448 0 9.89-4.444 9.893-9.892.002-5.462-4.415-9.88-9.88-9.88-5.45 0-9.89 4.437-9.89 9.887 0 2.226.73 3.998 1.952 5.64l-.999 3.648 3.784-.996zm11.387-5.464c-.074-.123-.272-.198-.57-.347-.297-.148-1.758-.867-2.03-.967-.272-.099-.47-.148-.668.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.074-.148-.668-1.611-.916-2.207-.242-.579-.487-.5-.668-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.08 4.487.71.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.289.173-1.412z" />
  </svg>
);

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const message = 'Hello! I would like to inquire about your gastrology services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 relative"
        onClick={handleWhatsAppClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />

        {/* Tooltip */}
        <motion.div
          className="absolute -top-12 -left-20 bg-slate-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.3 }}
        >
          Need Help? Chat with us!
          <div className="absolute bottom-[-4px] left-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;
