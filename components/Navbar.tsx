import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed w-full z-[60] transition-all duration-300 ease-in-out px-6 md:px-12 py-4
        ${scrolled ? 'bg-sfoglia-cream/90 shadow-soft-lg backdrop-blur-md py-3' : 'bg-transparent text-sfoglia-wood'}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className={`font-display text-2xl md:text-3xl font-bold tracking-tight transition-colors ${scrolled ? 'text-sfoglia-wood' : 'text-sfoglia-wood'}`}>
            Sfoglia<span className="text-sfoglia-accent">Stella</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans font-semibold text-sm tracking-widest uppercase hover:text-sfoglia-accent transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sfoglia-accent transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="bg-sfoglia-wood text-sfoglia-cream px-6 py-2 rounded-full text-sm font-bold hover:bg-sfoglia-accent hover:scale-105 transition-all"
            >
              PRENOTA
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-sfoglia-wood hover:bg-sfoglia-pink/20 rounded-full transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-sfoglia-cream z-[70] md:hidden flex flex-col items-center justify-center p-8"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-sfoglia-wood p-2"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center space-y-10">
              <div className="font-display text-4xl font-bold mb-4">
                Sfoglia<span className="text-sfoglia-accent">Stella</span>
              </div>
              
              {NAV_ITEMS.map((item, idx) => (
                <m.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-3xl font-medium text-sfoglia-wood hover:text-sfoglia-accent transition-colors"
                >
                  {item.label}
                </m.a>
              ))}
              
              <m.a 
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-sfoglia-accent text-white px-10 py-4 rounded-full text-xl font-bold shadow-soft"
              >
                CHIAMA ORA
              </m.a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
