import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import GallBladderPage from './pages/GallBladderPage';
import LiverPage from './pages/LiverPage';
import PancreasPage from './pages/PancreasPage';
import SpleenPage from './pages/SpleenPage';
import EsophagusPage from './pages/EsophagusPage';
import StomachPage from './pages/StomachPage';
import ColonRectumPage from './pages/ColonRectumPage';
import HerniaPage from './pages/HerniaPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

          {/* Specialties Routes */}
          <Route
            path="/specialties/gallbladder"
            element={<GallBladderPage />}
          />
          <Route path="/specialties/liver" element={<LiverPage />} />
          <Route path="/specialties/pancreas" element={<PancreasPage />} />
          <Route path="/specialties/spleen" element={<SpleenPage />} />
          <Route path="/specialties/esophagus" element={<EsophagusPage />} />
          <Route path="/specialties/stomach" element={<StomachPage />} />
          <Route path="/specialties/colon" element={<ColonRectumPage />} />
          <Route path="/specialties/hernia" element={<HerniaPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;