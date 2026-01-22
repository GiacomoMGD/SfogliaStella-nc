import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Info, X } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

  return (
    <section id="prodotto" className="py-24 bg-[#FDFBF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-sfoglia-wood mb-6 leading-tight">I Nostri Capolavori</h2>
          <p className="text-sfoglia-wood/70 font-sans text-xl font-medium">
            Pochi piatti, fatti in modo straordinario. Clicca su ogni specialità per scoprire il segreto della nostra ricetta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <m.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer relative"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 shadow-soft border-4 border-white transition-all group-hover:border-sfoglia-pink/50 group-hover:shadow-soft-lg">
                {/* Badge */}
                <div className="absolute top-6 left-6 z-20 bg-sfoglia-accent text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-soft">
                  {product.tag}
                </div>
                
                {/* Info Icon Hover Indicator */}
                <div className="absolute inset-0 bg-sfoglia-wood/0 group-hover:bg-sfoglia-wood/20 z-10 transition-all flex items-center justify-center">
                  <m.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white/90 p-4 rounded-full text-sfoglia-accent shadow-soft-xl"
                  >
                    <Info size={32} />
                  </m.div>
                </div>

                <img 
                  src={product.image} 
                  alt={product.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              
              <div className="text-center px-4">
                <h3 className="font-display text-2xl font-bold text-sfoglia-wood mb-2 group-hover:text-sfoglia-accent transition-colors">
                  {product.name}
                </h3>
                <p className="font-sans text-sfoglia-wood/60 font-medium">
                  Clicca per i dettagli
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[250] flex items-center justify-center px-4">
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-sfoglia-wood/70 backdrop-blur-md"
            ></m.div>
            
            <m.div 
              layoutId={selectedProduct.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-sfoglia-cream w-full max-w-4xl rounded-[3rem] shadow-soft-xl relative z-10 overflow-hidden border-4 border-sfoglia-pink/30 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-6 right-6 text-sfoglia-wood/30 hover:text-sfoglia-accent transition-colors"
                >
                  <X size={32} />
                </button>

                <div className="inline-block px-4 py-1.5 rounded-full bg-sfoglia-pink/20 text-sfoglia-accent text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                  {selectedProduct.tag}
                </div>

                <h3 className="font-display text-4xl md:text-5xl font-bold text-sfoglia-wood mb-6">
                  {selectedProduct.name}
                </h3>

                <div className="h-1 w-20 bg-sfoglia-accent mb-8 rounded-full"></div>

                <p className="font-sans text-xl text-sfoglia-wood/80 leading-relaxed mb-8 font-medium">
                  {selectedProduct.description}
                </p>

                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-sfoglia-wood/60">
                     <span className="w-2 h-2 bg-sfoglia-accent rounded-full"></span>
                     <span className="font-bold">Ingredienti 100% Emiliani</span>
                   </div>
                   <div className="flex items-center gap-3 text-sfoglia-wood/60">
                     <span className="w-2 h-2 bg-sfoglia-accent rounded-full"></span>
                     <span className="font-bold">Lavorazione a mano oggi</span>
                   </div>
                </div>

                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="mt-10 bg-sfoglia-wood text-white py-4 px-8 rounded-2xl font-display font-bold text-lg hover:bg-sfoglia-accent transition-all w-fit"
                >
                  CHIUDI DETTAGLI
                </button>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductSection;
