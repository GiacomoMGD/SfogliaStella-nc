import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="esperienza" className="py-24 bg-sfoglia-cream text-sfoglia-wood relative flat-bg overlay-soft illustration-element scroll-mt-20">
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="font-display text-4xl md:text-6xl font-semibold leading-none text-sfoglia-wood">
              Nel cuore di<br/>
              <span className="text-sfoglia-accent">Bologna</span>
            </h2>

            <div className="space-y-6 text-lg font-light text-readable">
              <p>
                In pieno centro storico di Bologna, Sfoglia Stella è più di un ristorante: è un pezzo di tradizione emiliana viva.
                Qui la cucina è a vista, il profumo del ragù alla bolognese ti accoglie appena entri, e ogni piatto racconta una storia.
              </p>
              <p>
                Siediti al nostro bancone in marmo e guarda Stella e le sue sfogline mentre tirano la sfoglia e chiudono i tortellini.
                Oppure accomodati ai tavoli in legno massello con una bottiglia di Lambrusco dell'Emilia.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-sfoglia-yellow"></div>
                  <span>Centro storico di Bologna</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-sfoglia-yellow"></div>
                  <span>Cucina tradizionale emiliana</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-sfoglia-yellow"></div>
                  <span>Ambiente caldo e conviviale</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-sfoglia-yellow"></div>
                  <span>Produzione artigianale a vista</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
             <img src="/images/experience/img_pasta_fresca.png" alt="Interior Sfoglia Stella" className="rounded-lg w-full h-full object-cover translate-y-8 shadow-xl" loading="lazy" />
             <img src="/images/experience/img_tigelle.png" alt="Piatti tradizionali emiliani" className="rounded-lg w-full h-full object-cover -translate-y-8 shadow-xl" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
