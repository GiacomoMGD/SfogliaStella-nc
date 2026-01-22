import React, { Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy load non-critical sections
const AboutSection = lazy(() => import('./components/AboutSection'));
const ProductSection = lazy(() => import('./components/ProductSection'));
const StudentDiscountSection = lazy(() => import('./components/StudentDiscountSection'));
const OpeningHoursSection = lazy(() => import('./components/OpeningHoursSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const Footer = lazy(() => import('./components/Footer'));
const TigellaBooking = lazy(() => import('./components/TigellaBooking'));

const App: React.FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="bg-sfoglia-cream min-h-screen flat-bg">
        <Navbar />
        
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20" />}>
            <AboutSection />
            <ProductSection />
            <StudentDiscountSection />
            <OpeningHoursSection />
            <ExperienceSection />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
          <TigellaBooking />
        </Suspense>
      </div>
    </LazyMotion>
  );
};

export default App;
