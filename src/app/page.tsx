'use client';
import React from 'react';
import Layout from './components/layout/page';
import HeroSection from './pages/hero/page';
import ServicesSection from './pages/services/page';
import PortfolioSection from './pages/portfolio/page';
import ContactSection from './pages/contact/page';
import Footer from './components/footer/page';

const Home = () => {
  return (
    <Layout>
      <HeroSection/>
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </Layout>
  );
};

export default Home;