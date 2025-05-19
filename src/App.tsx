import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import AdventureActivities from "./components/AdventureActivities";
import AdventureDetail from "./components/AdventureDetail";
import Fare from "./components/Fare";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./pages/Home";
import PokharaAdventures from "./components/PokharaAdventures";
import FamousTouristPoints from "./components/FamousTouristPoints";
import ScrollToTop from './components/ScrollToTop';
import DestinationDetailPage from './components/DestinationDetailPage';
import FloatingButtons from './components/FloatingButtons';
import ProfessionalDriversSection from "./components/ProfessionalDriversSection";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--brand-grey)]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/adventure" element={<AdventureActivities />} />
          <Route path="/pokhara" element={<PokharaAdventures />} />
          <Route path="/adventure/:id" element={<AdventureDetail />} />
          <Route path="/FamousTouristPoints" element={<FamousTouristPoints />} />
          <Route path="/fare" element={<ProfessionalDriversSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FloatingButtons />
        <section className="w-full bg-gradient-to-r from-yellow-400 to-yellow-200 py-10 px-6 flex flex-col items-center text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-black)] mb-2">The Best Rates & Comfort Journey</h3>
        <p className="md:max-w-2xl text-gray-800 mb-6">
          Gorakhpur Airport Cab, Car Rental, Taxi Hire & Booking, Airport Pickup, Drop,<br/> 24/7 as per your convenience. <br/><b>Call:</b> <a href="tel:+918887537960" className="underline font-bold gold">+91 8887537960</a>
        </p>
        <a href="tel:+918887537960" className="rounded-full px-8 py-3 bg-[var(--brand-black)] text-[var(--brand-gold)] font-bold shadow hover:opacity-90 transition">Call Now</a>
      </section>
        <footer className="bg-[var(--brand-black)] text-[var(--brand-gold)] py-8 mt-auto">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Gorakhpur Taxi Booking</h3>
                <p className="text-sm text-gray-400">Your trusted partner for safe and comfortable travel in Gorakhpur and beyond.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-sm text-gray-400 hover:text-[var(--brand-gold)]">Home</a></li>
                  <li><a href="/about" className="text-sm text-gray-400 hover:text-[var(--brand-gold)]">About Us</a></li>
                  <li><a href="/destinations" className="text-sm text-gray-400 hover:text-[var(--brand-gold)]">Destinations</a></li>
                  <li><a href="/fare" className="text-sm text-gray-400 hover:text-[var(--brand-gold)]">Fare</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-400">Phone: +91 8887537960</li>
                  <li className="text-sm text-gray-400">Email: service@gorakhpurtaxibooking.com</li>
                  <li className="text-sm text-gray-400">Address: Sanik Kunj, Sector B, Nandanagar, Gorakhpur</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center">
              <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Gorakhpur Taxi Booking. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
