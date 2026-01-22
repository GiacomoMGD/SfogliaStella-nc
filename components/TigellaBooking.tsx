import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, UtensilsCrossed, Globe } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const TigellaBooking: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-x-0 bottom-8 z-[100] h-24 flex items-center justify-center pointer-events-none">
      <div className="relative w-full max-w-5xl mx-auto h-full flex items-center pointer-events-auto px-4">
        
        {/* The "Rolling" Panel - Unrolls from the center to the left */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: "100%", 
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }}
              exit={{ 
                width: 0, 
                opacity: 0,
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
              className="absolute right-0 md:right-12 top-0 bottom-0 bg-white border-2 border-sfoglia-pink/30 rounded-2xl md:rounded-l-3xl md:rounded-r-none shadow-soft-xl overflow-hidden flex origin-right"
              style={{ marginRight: '40px' }}
            >
               <m.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
                 className="flex-1 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 min-w-[280px] md:min-w-[700px] py-4 md:py-0"
               >
                 <div className="flex flex-col shrink-0 items-center md:items-start mb-4 md:mb-0">
                   <h3 className="font-display text-lg md:text-xl font-bold text-sfoglia-wood leading-none">Prenota Online</h3>
                   <p className="text-[10px] md:text-sm text-sfoglia-accent font-bold uppercase tracking-tighter mt-1">Sfoglia Stella Bologna</p>
                 </div>

                 <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                    {/* TheFork Link */}
                    <a 
                      href={CONTACT_INFO.theFork} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-[#00645A] text-white hover:scale-105 active:scale-95 transition-all shadow-soft"
                    >
                      <UtensilsCrossed size={14} className="md:w-4 md:h-4" />
                      <span className="font-sans text-[10px] md:text-xs font-bold">TheFork</span>
                    </a>

                    {/* Google Reserve Link */}
                    <a 
                      href={CONTACT_INFO.googleReserve} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white border border-sfoglia-wood/20 text-sfoglia-wood hover:bg-sfoglia-wood hover:text-white active:scale-95 transition-all shadow-soft"
                    >
                      <Globe size={14} className="md:w-4 md:h-4" />
                      <span className="font-sans text-[10px] md:text-xs font-bold">Google</span>
                    </a>

                    <div className="hidden md:block h-8 w-[1px] bg-sfoglia-pink/30 mx-1"></div>

                    {/* WhatsApp */}
                    <a 
                      href={`https://wa.me/39${CONTACT_INFO.whatsapp.replace(/\s/g, '')}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-soft"
                    >
                      <MessageCircle size={18} className="md:w-5 md:h-5" />
                    </a>

                    {/* Phone Call */}
                    <a 
                      href={`tel:+39${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                      className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-sfoglia-wood text-white hover:bg-sfoglia-accent active:scale-95 transition-all shadow-soft"
                    >
                      <Phone size={14} className="md:w-4 md:h-4" />
                      <span className="font-sans text-[10px] md:text-xs font-bold">{CONTACT_INFO.phone}</span>
                    </a>
                 </div>
               </m.div>
            </m.div>
          )}
        </AnimatePresence>

        {/* The Rolling Tigella Button - Moves from center to right */}
        <m.button
          onClick={toggleOpen}
          className="absolute z-20 h-24 w-24 group outline-none select-none"
          initial={false}
          animate={{
            left: isOpen ? "auto" : "50%",
            right: isOpen ? "0px" : "auto",
            translateX: isOpen ? "0%" : "-50%",
            rotate: isOpen ? 360 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            mass: 1
          }}
        >
          {/* Close indicator */}
          <AnimatePresence>
            {isOpen && (
              <m.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -top-1 -right-1 z-30 bg-sfoglia-accent text-white p-1.5 rounded-full shadow-lg"
              >
                <X size={16} />
              </m.div>
            )}
          </AnimatePresence>

          {/* Real Tigella Image */}
          <div className="w-full h-full relative">
            <div className="absolute inset-2 bg-black/10 blur-xl rounded-full translate-y-2 group-hover:bg-black/20 transition-all"></div>
            <img 
              src="/images/TigellaBooking.png" 
              alt="Tigella" 
              className="w-full h-full object-contain relative z-10 drop-shadow-md"
              loading="lazy"
            />
          </div>

          {/* Floating Label (closed) */}
          <AnimatePresence>
            {!isOpen && (
              <m.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute -top-12 left-0 right-0 flex justify-center z-30 pointer-events-none"
              >
                <span className="bg-sfoglia-accent text-white px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-soft whitespace-nowrap">
                  Prenota un tavolo
                </span>
              </m.div>
            )}
          </AnimatePresence>
        </m.button>

      </div>
    </div>
  );
};

export default TigellaBooking;
