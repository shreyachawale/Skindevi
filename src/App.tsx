import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import SimplePage from './pages/SimplePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/bestsellers/:category" element={<ProductListing />} />

          <Route path="/face/category" element={<SimplePage title="Face Care" description="Discover our range of Ayurvedic face care products designed to bring out your natural radiance." />} />
          <Route path="/face/concern" element={<SimplePage title="Shop by Concern" description="Find targeted solutions for your specific skin concerns with our specialized formulations." />} />

          <Route path="/hair/category" element={<SimplePage title="Hair Care" description="Nurture your hair with ancient Ayurvedic wisdom and botanical nourishment." />} />
          <Route path="/hair/concern" element={<SimplePage title="Shop by Concern" description="Address your hair concerns with our targeted Ayurvedic treatments." />} />

          <Route path="/body/category" element={<SimplePage title="Body Care" description="Pamper your body with luxurious Ayurvedic formulations from head to toe." />} />
          <Route path="/body/concern" element={<SimplePage title="Shop by Concern" description="Find the perfect body care solution for your specific needs." />} />

          <Route path="/wellness" element={<SimplePage title="Wellness" description="Holistic wellness begins from within. Explore our range of Ayurvedic wellness products." />} />
          <Route path="/discover" element={<SimplePage title="Discover SKINDEVI" description="Learn about our journey, our values, and our commitment to authentic Ayurvedic beauty." />} />
          <Route path="/gifting" element={<SimplePage title="Gifting" description="Share the gift of Ayurvedic wellness with beautifully curated gift sets." />} />
          <Route path="/best-sellers" element={<SimplePage title="Best Sellers" description="Our most beloved formulations, trusted by wellness professionals worldwide." />} />
          <Route path="/contact" element={<SimplePage title="Contact Us" description="Get in touch with us for wholesale inquiries, partnerships, or any questions." />} />
          <Route path="/try-before-buy" element={<SimplePage title="Try Before You Buy" description="Experience our products firsthand with our sample program for wholesale partners." />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
