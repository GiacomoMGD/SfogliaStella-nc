import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sfoglia-cream text-sfoglia-wood pt-24 pb-12 border-t border-sfoglia-pink/20 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sfoglia-pink/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sfoglia-blue/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Social */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-4xl font-bold mb-6 inline-block">
              Sfoglia<span className="text-sfoglia-accent">Stella</span>
            </a>
            <p className="text-sfoglia-wood max-w-sm mb-8 text-lg leading-relaxed font-medium">
              "Chi cucina con amore, nutre il cuore." Custodi della tradizione gastronomica emiliana, 
              portiamo l'autenticità di Bologna in ogni piatto.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com/sfogliastella" },
                { icon: Instagram, href: "https://instagram.com/sfogliastella" },
                { icon: MessageCircle, href: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\s/g, '')}` }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full bg-white border border-sfoglia-pink/20 flex items-center justify-center hover:bg-sfoglia-accent hover:text-white hover:scale-110 transition-all shadow-soft"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-display text-xl font-bold mb-8 relative inline-block">
              Contatti
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sfoglia-accent rounded-full"></span>
            </h4>
            <ul className="space-y-6 text-sfoglia-wood/80">
              <li className="flex items-start gap-4">
                <MapPin size={22} className="text-sfoglia-accent shrink-0 mt-1" />
                <span className="font-medium">{CONTACT_INFO.address}<br/>40131 Bologna (BO)</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={22} className="text-sfoglia-accent" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="font-medium hover:text-sfoglia-accent transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={22} className="text-sfoglia-accent" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium hover:text-sfoglia-accent transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl font-bold mb-8 relative inline-block">
              Esplora
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-sfoglia-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#chi-siamo" className="text-sfoglia-wood/70 hover:text-sfoglia-accent font-medium transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sfoglia-pink/40"></span>
                  Il Progetto
                </a>
              </li>
              <li>
                <a href="#prodotto" className="text-sfoglia-wood/70 hover:text-sfoglia-accent font-medium transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sfoglia-pink/40"></span>
                  Le Specialità
                </a>
              </li>
              <li>
                <a href="#bistrot" className="text-sfoglia-wood/70 hover:text-sfoglia-accent font-medium transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sfoglia-pink/40"></span>
                  Il Bistrot
                </a>
              </li>
              <li>
                <a href="#esperienza" className="text-sfoglia-wood/70 hover:text-sfoglia-accent font-medium transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sfoglia-pink/40"></span>
                  Contatti
                </a>
              </li>
              <li>
                <a href="#" className="text-sfoglia-wood/70 hover:text-sfoglia-accent font-medium transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sfoglia-pink/40"></span>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-sfoglia-pink/20 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-sfoglia-wood/50">
          <p>© {new Date().getFullYear()} Sfoglia Stella - P.IVA 04263031207. Fatto con ❤️ a Bologna.</p>
          <div className="flex gap-8 mt-6 md:mt-0 uppercase tracking-widest text-[10px]">
            <span>Tradizione</span>
            <span>Qualità</span>
            <span>Passione</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
