import React from 'react';
import { motion } from 'framer-motion';
import WelcomeCarsSection from '../components/WelcomeCarsSection';
import AdventurePreview from '../components/AdventurePreview';
import styles from './Home.module.css';
import HeroSection from "../components/HeroSection";
import AssistanceCtaBand from "../components/AssistanceCtaBand";
import CarGallerySection from "../components/CarGallerySection";
import Header from "../components/Header";
import Destinations from "../components/Destinations";
import HomeFamousTouristPoints from '../components/HomeFamousTouristPoints';
import MiddleBanner from '@/components/MiddleBanner';
import PopularDestinationsHome from '@/components/PopularDestinationsHome';
import ServicesSection from '@/components/ServicesSection';
import StatStrip from '@/components/StatStrip';


const Home = () => {
    return (
      <div className={styles.home}>
        <HeroSection />
        <ServicesSection/>
        
        <AssistanceCtaBand />
        <PopularDestinationsHome />
        <MiddleBanner />
        <CarGallerySection />
        {/* <WelcomeCarsSection /> */}
        <HomeFamousTouristPoints />
        <AdventurePreview />
      </div>
    );
  };

export default Home; 