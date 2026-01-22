import React from 'react';
import { m } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-24 px-4 bg-sfoglia-cream text-sfoglia-wood relative flat-bg overlay-soft illustration-element">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Content */}
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-sfoglia-wood">
            Tradizione bolognese<br/>
            con un tocco di Stella
          </h2>

          <div className="space-y-6 font-sans text-lg leading-relaxed text-readable">
            <p>
              Sfoglia Stella nasce dalla passione per la cucina e dalla volontà di preservare le ricette tradizionali e valorizzare le specialità regionali. Ogni giorno Stella prepara prodotti freschi che potrai ordinare, acquistare oppure degustare nel nostro locale.
            </p>
            <p>
              Dalla cucina emiliana alle ricette tipiche regionali, ogni proposta nasce dal rispetto per la qualità e la genuinità. In vetrina trovi un menù che cambia con le stagioni e tante bontà pronte da gustare.
            </p>
          </div>

          <div className="pt-8 border-t border-sfoglia-wood/10 grid grid-cols-2 gap-8">
            <div>
              <span className="block font-bold text-lg mb-1">Ingredienti</span>
              <span className="text-sm text-sfoglia-wood/70">100% organici e di stagione</span>
            </div>
            <div>
              <span className="block font-bold text-lg mb-1">Produzione</span>
              <span className="text-sm text-sfoglia-wood/70">Artigianale quotidiana</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 md:order-2">
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-[#E5E0D0] rounded-3xl overflow-hidden shadow-soft-lg"
          >
            <img
              src="/images/about/img_balanzone.png"
              alt="Produzione pasta fresca Sfoglia Stella"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </m.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;