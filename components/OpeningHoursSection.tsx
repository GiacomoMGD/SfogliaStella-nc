import React from 'react';
import { m } from 'framer-motion';
import { Clock, MapPin, Truck, Phone } from 'lucide-react';
import { OPENING_HOURS, CONTACT_INFO } from '../constants';

const OpeningHoursSection: React.FC = () => {
  return (
    <section id="bistrot" className="py-20 bg-sfoglia-wood text-sfoglia-cream overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Vieni a Trovarci
          </m.h2>
          <p className="text-sfoglia-cream/80 font-sans text-lg max-w-2xl mx-auto">
            La nostra cucina lavora con passione ogni giorno per portarti il meglio della tradizione.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Opening Hours */}
          <m.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="card-flat p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sfoglia-yellow rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-sfoglia-wood w-5 h-5 md:w-6 md:h-6" size={24} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">Orari Cucina</h3>
              </div>

              <div className="space-y-2 font-sans">
                {OPENING_HOURS.kitchen.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-white/20 last:border-0">
                    <span className="font-bold text-white text-sm md:text-base">{item.day}</span>
                    <div className="text-right">
                      <div className="text-white font-bold text-sm md:text-base">{item.hours}</div>
                      {item.extra && <div className="text-sfoglia-yellow font-bold text-[10px] md:text-sm">{item.extra}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-flat p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sfoglia-accent rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-sfoglia-wood w-5 h-5 md:w-6 md:h-6" size={24} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">Vendita Pasta Fresca</h3>
              </div>

              <div className="space-y-2 font-sans">
                {OPENING_HOURS.shop.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-white/10 last:border-0">
                    <span className="font-medium text-sm md:text-base">{item.day}</span>
                    <div className="text-right">
                      <div className="text-white/90 text-sm md:text-base">{item.hours}</div>
                      {item.extra && <div className="text-white/60 text-[10px] md:text-sm">{item.extra}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </m.div>

          {/* Services */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card-flat p-6 md:p-8 bg-white/5 border-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sfoglia-yellow rounded-full flex items-center justify-center shrink-0">
                  <Truck className="text-sfoglia-wood w-5 h-5 md:w-6 md:h-6" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold">Consegna a Domicilio</h3>
                  <p className="text-[10px] md:text-sm text-white/60">Servizio Deliveroo</p>
                </div>
              </div>
              <p className="font-sans text-white/80 mb-4 text-sm md:text-base">
                Ricevi i nostri piatti caldi o la pasta fresca da cucinare direttamente a casa tua.
              </p>
              <a 
                href={CONTACT_INFO.deliveroo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-sfoglia-yellow text-sfoglia-wood rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-sm md:text-base"
              >
                Ordina su Deliveroo
              </a>
            </div>

            <div className="bg-sfoglia-accent/20 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-sfoglia-accent rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-sfoglia-wood w-5 h-5 md:w-6 md:h-6" size={24} />
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold">Prenotazioni e Ritiro</h3>
                  <p className="text-[10px] md:text-sm text-white/60">Chiama in negozio</p>
                </div>
              </div>
              <p className="font-sans text-white/80 text-sm md:text-base">
                Chiamaci al <span className="font-bold">{CONTACT_INFO.phone}</span> per prenotare il tuo ritiro o riservare un tavolo.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group">
              <div className="p-6 md:p-8 pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-sfoglia-blue rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-sfoglia-wood w-5 h-5 md:w-6 md:h-6" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-bold">Posizione</h3>
                    <p className="text-[10px] md:text-sm text-white/60">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <p className="font-sans text-white/80 text-sm">
                  Ci trovi in Via Maria Callas 4/A, nel cuore di Bologna (zona Pescarola).
                </p>
              </div>
              
              {/* Mini Mappa Google */}
              <div className="h-40 md:h-48 w-full relative">
                <iframe 
                  src={CONTACT_INFO.mapsEmbed}
                  className="w-full h-full border-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_2px_10px_rgba(0,0,0,0.1)]"></div>
              </div>

              <div className="p-4">
                <a 
                  href={CONTACT_INFO.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-sfoglia-blue text-sfoglia-wood rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-soft text-sm md:text-base"
                >
                  <MapPin size={18} />
                  Ottieni Indicazioni
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHoursSection;
