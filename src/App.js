import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import KostMarketplace from './components/KostMarketplace';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import ProductOverview from './pages/ProductOverview';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/About" element={<AboutPage/>} />
        <Route path="/Cari Kost" element={<KostMarketplace/>} />
        <Route path="/ProductOverview" element={<ProductOverview/>} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
