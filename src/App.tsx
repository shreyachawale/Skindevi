import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import SimplePage from './pages/SimplePage';
import Gifting from './pages/gifting';
import Trialkits from './pages/TrialKits';
import FaceProducts from './pages/FaceProducts';
import Ubtan from './pages/Ubtan';
import Serums from './pages/Serums';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/bestsellers/:category" element={<ProductListing />} />

          <Route path="/face" element={<FaceProducts />} />
          <Route path="/face/ubtans" element={<Ubtan />} />
          <Route path="/face/serums" element={<Serums />} />
          
          <Route path="/wellness" element={<SimplePage title="Wellness" description="Holistic wellness begins from within. Explore our range of Ayurvedic wellness products." />} />
          <Route path="/discover" element={<SimplePage title="Discover SKINDEVI" description="Learn about our journey, our values, and our commitment to authentic Ayurvedic beauty." />} />
          <Route path="/gifting" element={<Gifting />} />
          <Route path="/best-sellers" element={<SimplePage title="Best Sellers" description="Our most beloved formulations, trusted by wellness professionals worldwide." />} />
          <Route path="/contact" element={<SimplePage title="Contact Us" description="Get in touch with us for wholesale inquiries, partnerships, or any questions." />} />
          <Route path="/try-before-buy" element={<Trialkits />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
