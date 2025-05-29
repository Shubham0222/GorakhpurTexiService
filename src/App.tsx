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
import Footer from "./components/Footer";
import PageMetadata from "./components/PageMetadata";

// Import destinations data
const destinations = [
  {
    id: 1,
    slug: "lumbini",
    title: "Gorakhpur to Lumbini Taxi Service",
    description: "Nepal Pilgrim Transfer",
    image: "/assets/image/destinations/lumbini.jpg",
    distance: "120 km from Gorakhpur",
    duration: "3-4 hours",
    bestTime: "October to March"
  },
  {
    id: 2,
    slug: "gorakhnath",
    title: "Gorakhpur to Gorakhnath Temple Taxi Service",
    description: "Ancient temple dedicated to Guru Gorakhnath",
    image: "/assets/image/destinations/gorakhnath-temple.jpg",
    distance: "2 km from city center",
    duration: "30 minutes",
    bestTime: "All year round"
  },
  {
    id: 3,
    slug: "pokhara",
    title: "Gorakhpur to Pokhara Taxi Service",
    description: "Nepal Tourist Route",
    image: "/assets/image/destinations/pokhara.jpg",
    distance: "385 km from Gorakhpur",
    duration: "8-9 hours",
    bestTime: "October to May"
  },
  {
    id: 4,
    slug: "varanasi",
    title: "Gorakhpur to Varanasi Taxi Service",
    description: "Spiritual City",
    image: "/assets/image/destinations/varanasi.jpg",
    distance: "240 km from Gorakhpur",
    duration: "5-6 hours",
    bestTime: "October to March"
  },
  {
    id: 5,
    slug: "lucknow",
    title: "Gorakhpur to Lucknow Taxi Service",
    description: "Uttar Pradesh Capital",
    image: "/assets/image/destinations/lucknow.jpg",
    distance: "270 km from Gorakhpur",
    duration: "6-7 hours",
    bestTime: "October to March"
  },
  {
    id: 6,
    slug: "kathmandu",
    title: "Gorakhpur to Kathmandu Taxi Service",
    description: "Nepal Capital Transfer",
    image: "/assets/image/destinations/kathmandu.jpg",
    distance: "380 km from Gorakhpur",
    duration: "8-9 hours",
    bestTime: "October to May"
  },
  {
    id: 7,
    slug: "ayodhya",
    title: "Gorakhpur to Ayodhya Taxi Service",
    description: "Ram Janmabhoomi Route",
    image: "/assets/image/destinations/ayodhya.jpg"
  },
  {
    id: 8,
    slug: "sonauli",
    title: "Gorakhpur to Sonauli Taxi Service",
    description: "India-Nepal Border Crossing",
    image: "/assets/image/destinations/sonauli.jpg"
  },
  {
    id: 9,
    slug: "butwal",
    title: "Gorakhpur to Butwal Taxi Service",
    description: "Gateway to Western Nepal",
    image: "/assets/image/destinations/butwal.jpg"
  },
  {
    id: 10,
    slug: "deoria",
    title: "Gorakhpur to Deoria Taxi Service",
    description: "Eastern UP Town",
    image: "/assets/image/destinations/deoria.jpg"
  },
  {
    id: 11,
    slug: "bahraich",
    title: "Gorakhpur to Bahraich Taxi Service",
    description: "Near Nepal Border",
    image: "/assets/image/destinations/bahraich.jpg"
  },
  {
    id: 12,
    slug: "gopalganj",
    title: "Gorakhpur to Gopalganj Taxi Service",
    description: "Bihar Border Town",
    image: "/assets/image/destinations/gopalganj.jpg"
  },
  {
    id: 13,
    slug: "muzaffarpur",
    title: "Gorakhpur to Muzaffarpur Taxi Service",
    description: "Litchi Capital of India",
    image: "/assets/image/destinations/muzaffarpur.jpg"
  },
  {
    id: 14,
    slug: "prayagraj",
    title: "Gorakhpur to Prayagraj Taxi Service",
    description: "Sangam City",
    image: "/assets/image/destinations/prayagraj.jpg"
  },
  {
    id: 15,
    slug: "patna",
    title: "Gorakhpur to Patna Taxi Service",
    description: "Bihar Capital",
    image: "/assets/image/destinations/patna.jpg"
  },
  {
    id: 16,
    slug: "ranchi",
    title: "Gorakhpur to Ranchi Taxi Service",
    description: "Jharkhand Capital",
    image: "/assets/image/destinations/ranchi.jpg"
  },
  {
    id: 17,
    slug: "kolkata",
    title: "Gorakhpur to Kolkata Taxi Service",
    description: "City of Joy",
    image: "/assets/image/destinations/kolkata.jpg"
  },
  {
    id: 18,
    slug: "darjeeling-gangtok",
    title: "Gorakhpur to Darjeeling & Gangtok Taxi Service",
    description: "Hill Station Tour",
    image: "/assets/image/destinations/darjeeling.jpg"
  },
  {
    id: 19,
    slug: "noida",
    title: "Gorakhpur to Noida Taxi Service",
    description: "Delhi NCR Business Hub",
    image: "/assets/image/destinations/noida.jpg"
  },
  {
    id: 20,
    slug: "nainital",
    title: "Gorakhpur to Nainital Taxi Service",
    description: "Lake District of India",
    image: "/assets/image/destinations/nainital.jpg"
  },
  {
    id: 21,
    slug: "char-dham",
    title: "Gorakhpur to Char Dham Taxi Service",
    description: "Himalayan Pilgrimage",
    image: "/assets/image/destinations/char-dham.jpg"
  }
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[var(--brand-grey)]">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <PageMetadata 
                title="Best Taxi Service in Gorakhpur | Online Cab Booking"
                description="Need a taxi in Gorakhpur? Book online for airport pickup, wedding car rental, and more. Affordable cab service like Uber and Ola."
              />
              <Home />
            </>
          } />
          <Route path="/about" element={
            <>
              <PageMetadata 
                title="About Us | Best Gorakhpur Taxi Service"
                description="Learn about our premium taxi service in Gorakhpur. Professional drivers, modern fleet, and 24/7 support for all your travel needs."
              />
              <About />
            </>
          } />
          <Route path="/destinations" element={
            <>
              <PageMetadata 
                title="Popular Destinations | Gorakhpur Taxi Service"
                description="Explore popular destinations from Gorakhpur. Book reliable taxi service to Lumbini, Kathmandu, Varanasi, and more."
              />
              <Destinations />
            </>
          } />
          <Route path="/destinations/:slug" element={
            <>
              <PageMetadata />
              <DestinationDetailPage />
            </>
          } />
          <Route path="/adventure" element={
            <>
              <PageMetadata 
                title="Adventure Activities | Gorakhpur Taxi Service"
                description="Discover exciting adventure activities in Nepal. Book our taxi service for comfortable travel to adventure destinations."
              />
              <AdventureActivities />
            </>
          } />
          <Route path="/pokhara" element={
            <>
              <PageMetadata 
                title="Pokhara Adventures | Gorakhpur Taxi Service"
                description="Explore Pokhara's famous tourist points. Book our taxi service for a comfortable journey to Pokhara's attractions."
              />
              <PokharaAdventures />
            </>
          } />
          <Route path="/adventure/:id" element={
            <>
              <PageMetadata />
              <AdventureDetail />
            </>
          } />
          <Route path="/FamousTouristPoints" element={
            <>
              <PageMetadata 
                title="Famous Tourist Points | Gorakhpur Taxi Service"
                description="Visit famous tourist points in Nepal. Book our taxi service for convenient travel to popular attractions."
              />
              <FamousTouristPoints />
            </>
          } />
          <Route path="/fare" element={
            <>
              <PageMetadata 
                title="Fleet Partners | Gorakhpur Taxi Service"
                description="Explore our fleet of modern vehicles. Choose from various car options for your journey from Gorakhpur."
              />
              <ProfessionalDriversSection />
            </>
          } />
          <Route path="/contact" element={
            <>
              <PageMetadata 
                title="Contact Us | Gorakhpur Taxi Service"
                description="Get in touch with us for taxi bookings and inquiries. 24/7 customer support for all your travel needs."
              />
              <Contact />
            </>
          } />
        </Routes>
        <FloatingButtons />
        <section className="w-full bg-gradient-to-r from-yellow-400 to-yellow-200 py-10 px-6 flex flex-col items-center text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--brand-black)] mb-2">The Best Rates & Comfort Journey</h3>
          <p className="md:max-w-2xl text-gray-800 mb-6">
            Gorakhpur Airport Cab, Car Rental, Taxi Hire & Booking, Airport Pickup, Drop,<br/> 24/7 as per your convenience. <br/><b>Call:</b> <a href="tel:+919026793233" className="underline font-bold gold">+91 9026793233</a>
          </p>
          <a href="tel:+919026793233" className="rounded-full px-8 py-3 bg-[var(--brand-black)] text-[var(--brand-gold)] font-bold shadow hover:opacity-90 transition">Call Now</a>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
