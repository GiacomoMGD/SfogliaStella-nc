import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { GraduationCap, Info, X, CheckCircle2 } from 'lucide-react';

const StudentDiscountSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-r from-sfoglia-yellow/10 to-sfoglia-pink/10 relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-flat p-8 md:p-12 relative overflow-hidden illustration-element border-2 border-sfoglia-pink/20"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sfoglia-pink/10 rounded-full -translate-y-16 translate-x-16 blur-xl"></div>
          
          <div className="relative z-10">
            <m.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-sfoglia-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft"
            >
              <GraduationCap size={40} />
            </m.div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-sfoglia-wood mb-4">
              Sei uno studente UniBo?
            </h2>

            <div className="text-5xl md:text-7xl font-black text-sfoglia-accent mb-6 drop-shadow-sm">
              15% SCONTO
            </div>

            <p className="font-sans text-lg text-sfoglia-wood/80 mb-10 max-w-2xl mx-auto font-medium">
              Sfoglia Stella sostiene la comunità universitaria bolognese. Mangi bene, spendi meno e studi con più energia!
            </p>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="group bg-sfoglia-wood text-white px-10 py-4 rounded-full font-display font-bold text-lg hover:bg-sfoglia-accent transition-all shadow-soft flex items-center gap-3 mx-auto"
            >
              SCOPRI COME OTTENERLO
              <Info size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </m.div>
      </div>

      {/* Modal / Section Dedicata Pop-up */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-sfoglia-wood/60 backdrop-blur-sm"
            ></m.div>
            
            <m.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-sfoglia-cream w-full max-w-2xl rounded-3xl shadow-soft-xl relative z-10 overflow-hidden border-4 border-sfoglia-pink/30"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-sfoglia-wood/40 hover:text-sfoglia-accent transition-colors"
                >
                  <X size={32} />
                </button>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-sfoglia-accent text-white rounded-full flex items-center justify-center shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-sfoglia-wood">Promozione Studenti</h3>
                </div>

                <div className="space-y-6 text-sfoglia-wood/80 font-sans text-lg">
                  <p className="font-bold text-sfoglia-accent italic">"A pancia piena si studia meglio!"</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-display font-bold text-sfoglia-wood text-xl">Come funziona:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-sfoglia-green shrink-0 mt-1" />
                        <span>Lo sconto del **15%** è valido su tutto il menu alla carta (escluse bevande alcoliche se non accompagnate dal pasto).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-sfoglia-green shrink-0 mt-1" />
                        <span>Presenta il tuo **Tesserino Universitario UniBo** in corso di validità al momento del pagamento.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-sfoglia-green shrink-0 mt-1" />
                        <span>Promozione valida tutti i giorni di apertura, sia a pranzo che a cena.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="text-sfoglia-green shrink-0 mt-1" />
                        <span>Valido sia per il consumo nel **Bistrot** che per l'asporto (ritiro in negozio).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-sfoglia-pink/10 p-6 rounded-2xl border border-sfoglia-pink/20 mt-8">
                    <p className="text-sm leading-relaxed">
                      *Nota: Lo sconto non è cumulabile con altre promozioni in corso o con i servizi di delivery esterni (Deliveroo).*
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-full mt-10 bg-sfoglia-accent text-white py-4 rounded-xl font-display font-bold text-lg hover:bg-sfoglia-wood transition-all"
                >
                  HO CAPITO, CI VEDIAMO DA STELLA!
                </button>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StudentDiscountSection;
