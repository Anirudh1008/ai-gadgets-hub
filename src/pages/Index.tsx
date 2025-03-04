
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col bg-background text-foreground subtle-pattern"
    >
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <FeaturedProducts />
        <CategorySection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
