import React from 'react';
import { m } from 'framer-motion';
import { HERO_TEXT } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flat-bg">
      {/* Background Image - Flat illustration style */}
      <div className="absolute inset-0 z-0">
        <m.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/images/hero/hero-background.png"
          alt="Laboratorio Sfoglia Stella"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        {/* Soft flat illustration overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-sfoglia-cream via-transparent to-sfoglia-pink/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-sfoglia-lavender/5 via-sfoglia-blue/3 to-sfoglia-green/5"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        
        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 inline-block px-4 py-1.5 rounded-full bg-sfoglia-pink/20 border border-sfoglia-pink/30 text-sfoglia-accent font-sans text-xs font-bold uppercase tracking-widest"
        >
          Gastronomia & Bistrot a Bologna
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl text-sfoglia-wood font-black leading-[1.1] mb-8 tracking-tight drop-shadow-soft"
        >
          {HERO_TEXT.headline}
        </m.h1>

        <m.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-1 w-24 md:w-32 bg-sfoglia-accent mb-8 rounded-full"
        />

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-sans text-sfoglia-wood text-lg md:text-2xl font-bold max-w-3xl leading-relaxed"
        >
          {HERO_TEXT.subheadline}
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#prodotto" className="px-8 md:px-10 py-4 bg-sfoglia-wood text-white rounded-full font-bold text-lg hover:bg-sfoglia-accent hover:scale-105 active:scale-95 transition-all shadow-soft text-center">
            Scopri le Specialità
          </a>
          <a href="#bistrot" className="px-8 md:px-10 py-4 bg-white/80 backdrop-blur-sm text-sfoglia-wood border-2 border-sfoglia-wood/10 rounded-full font-bold text-lg hover:border-sfoglia-accent hover:text-sfoglia-accent active:scale-95 transition-all text-center">
            Il nostro Bistrot
          </a>
        </m.div>
      </div>

      {/* Scroll Indicator */}
      <m.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-sfoglia-accent"
      >
        <ChevronDown size={40} />
      </m.div>
    </section>
  );
};

export default Hero;
