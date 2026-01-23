import React from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, Utensils, Award, Beer, CakeSlice } from 'lucide-react';
import { FULL_MENU } from '../menuData';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getCategoryIcon = (category: string) => {
  if (category.includes('Antipasti')) return <Award size={24} />;
  if (category.includes('Primi')) return <Utensils size={24} />;
  if (category.includes('Secondi')) return <Utensils size={24} />;
  if (category.includes('Contorni')) return <Utensils size={24} />;
  if (category.includes('Dolci')) return <CakeSlice size={24} />;
  if (category.includes('Bevande')) return <Beer size={24} />;
  if (category.includes('Birre')) return <Beer size={24} />;
  return <Utensils size={24} />;
};

const FullMenuModal: React.FC<FullMenuModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8">
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-sfoglia-wood/80 backdrop-blur-lg"
          ></m.div>
          
          <m.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="bg-sfoglia-cream w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] md:rounded-[4rem] shadow-soft-xl relative z-10 overflow-hidden border-4 border-sfoglia-pink/30 flex flex-col"
          >
            {/* Header */}
            <div className="p-8 md:p-12 pb-6 flex justify-between items-center border-b border-sfoglia-pink/10 bg-white/50 sticky top-0 z-20 backdrop-blur-md">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-sfoglia-wood">Il Menù</h2>
                <p className="text-sfoglia-accent font-sans font-bold uppercase tracking-[0.2em] mt-2">Sfoglia Stella Bologna</p>
              </div>
              <button 
                onClick={onClose}
                className="bg-sfoglia-wood text-white p-3 md:p-4 rounded-full hover:bg-sfoglia-accent transition-all shadow-soft active:scale-95"
              >
                <X size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
                {FULL_MENU.map((cat, idx) => (
                  <div key={idx} className="space-y-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-sfoglia-pink/20 text-sfoglia-accent rounded-full flex items-center justify-center">
                        {getCategoryIcon(cat.category)}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-sfoglia-wood relative">
                        {cat.category}
                        <span className="absolute -bottom-2 left-0 w-12 h-1 bg-sfoglia-accent rounded-full"></span>
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {cat.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="group">
                          <div className="flex justify-between items-baseline gap-4 mb-1">
                            <h4 className="font-display text-lg md:text-xl font-bold text-sfoglia-wood group-hover:text-sfoglia-accent transition-colors">
                              {item.name}
                            </h4>
                            <div className="flex-1 border-b-2 border-dotted border-sfoglia-pink/20 mx-2 mb-1"></div>
                            <span className="font-display text-lg font-bold text-sfoglia-wood">€{item.price}</span>
                          </div>
                          {item.description && (
                            <p className="font-sans text-sm md:text-base text-sfoglia-wood/60 leading-relaxed max-w-[85%]">
                              {item.description}
                            </p>
                          )}
                          {item.tags && (
                            <div className="flex gap-2 mt-2">
                              {item.tags.map((tag, tagIdx) => (
                                <span key={tagIdx} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-sfoglia-green/30 text-sfoglia-wood/70 rounded-md">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer info in modal */}
              <div className="mt-16 pt-8 border-t border-sfoglia-pink/10 text-center">
                <p className="text-sfoglia-wood/40 font-sans text-sm italic">
                  * Coperto e pane artigianale €2.50. Alcuni prodotti potrebbero essere surgelati all'origine se non disponibili freschi.
                </p>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FullMenuModal;
