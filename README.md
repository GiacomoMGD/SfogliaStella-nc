# 🍝 Sfoglia Stella - Gastronomia Emiliana

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.3-blue" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8.2-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2.0-yellow" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-Local-06B6D4" alt="TailwindCSS" />
</div>

## 📖 Descrizione

**Sfoglia Stella** è il sito web della gastronomia emiliana di Bologna che offre pasta fresca artigianale, piatti tradizionali e servizio bistrot. Il sito esprime l'autentica tradizione culinaria bolognese attraverso un design elegante che combina ingredienti locali, passione per la cucina e calore familiare.

Il progetto è stato recentemente **ottimizzato** per garantire migliori performance, una struttura più pulita e una gestione semplificata dei contenuti.

### 🌟 Caratteristiche Principali

- **🍝 Pasta Fresca Artigianale**: Tortellini, Tagliatelle, Balanzoni e pasta secca
- **🏠 Bistrot Tradizionale**: Ambiente caldo e conviviale nel cuore di Bologna
- **🎓 Sconto Studenti**: 15% di sconto per gli studenti universitari
- **🚚 Consegna a Domicilio**: Servizio tramite Deliveroo
- **⏰ Orari Trasparenti**: Cucina aperta e vendita pasta con orari gestiti via codice
- **📱 Design Responsivo**: Completamente ottimizzato per desktop, tablet e smartphone

---

## 🚀 Come Far Partire il Progetto in Locale

Il progetto utilizza **Vite** come build tool e **Tailwind CSS** configurato localmente per massime prestazioni.

### Prerequisiti
- **Node.js** (versione 18 o superiore raccomandata)
- **npm** (incluso con Node.js)

### Passaggi per l'avvio

1.  **Scarica o clona il progetto** sul tuo computer.
2.  **Apri il terminale** (o PowerShell su Windows) nella cartella del progetto.
3.  **Installa le dipendenze**:
    ```bash
    npm install
    ```
4.  **Avvia il server di sviluppo**:
    ```bash
    npm run dev
    ```
5.  **Apri il browser** all'indirizzo che apparirà nel terminale (solitamente `http://localhost:3000`).

---

## 🏗️ Architettura del Progetto (Ottimizzata)

```
sfoglia-stella/
├── index.html              # Punto di ingresso HTML
├── index.css               # Stili globali e configurazione Tailwind (Locale)
├── tailwind.config.js      # Configurazione personalizzata di Tailwind
├── postcss.config.js       # Configurazione PostCSS per Tailwind
├── index.tsx               # Entry point React
├── App.tsx                 # Componente principale
├── constants.ts            # CENTRALIZZATO: Testi, orari, prodotti e contatti
├── types.ts                # Definizioni TypeScript
├── components/             # Componenti React (Riorganizzati)
│   ├── Hero.tsx           # Sezione hero con animazioni avanzate
│   ├── AboutSection.tsx   # Chi siamo e filosofia
│   ├── ProductSection.tsx # Catalogo prodotti dinamico
│   ├── StudentDiscountSection.tsx # Promo studenti
│   ├── OpeningHoursSection.tsx    # Orari e servizi dinamici
│   ├── ExperienceSection.tsx      # Esperienza bistrot
│   ├── Footer.tsx        # Footer con social e contatti centralizzati
│   ├── Navbar.tsx        # Navigazione responsive con blur effect
│   └── TigellaBooking.tsx # Elemento interattivo per prenotazioni
├── package.json           # Dipendenze e script (Aggiornato)
├── tsconfig.json          # Configurazione TypeScript
├── vite.config.ts         # Configurazione Vite (con alias e proxy)
└── public/                # Asset statici
    └── images/            # Struttura organizzata delle immagini
        ├── about/
        ├── experience/
        ├── hero/
        └── products/
```

---

## 🛠️ Cosa è Stato Ottimizzato

1.  **Tailwind CSS Locale**: Sostituita la CDN con un'installazione locale. Questo riduce i tempi di caricamento e permette l'uso di tutte le funzionalità avanzate di Tailwind.
2.  **Centralizzazione dei Dati**: Tutti i testi, gli orari e le informazioni di contatto sono ora in `constants.ts`. Modificare il sito è ora semplicissimo: basta cambiare un valore in quel file.
3.  **Naming Standard**: Cartelle e file sono stati rinominati seguendo le convenzioni standard del settore (minuscolo per le cartelle degli asset e dei componenti).
4.  **Design & UX**: Migliorate le animazioni di `Navbar` e `Hero`, aggiunto l'effetto vetro (backdrop-blur) e rifiniti i colori per un'estetica "Flat Illustration" più coerente.
5.  **Performance**: Ottimizzata la gestione degli asset e rimossi file ridondanti nella cartella `public`.

---

## 📞 Gestione Contatti e Contenuti

Per aggiornare i contenuti del sito (es. orari di apertura, nuovi prodotti o numeri di telefono), modifica il file:
👉 `constants.ts`

Le immagini possono essere sostituite nelle rispettive sottocartelle in `public/images/`.

---

## 📜 Licenza

© 2026 Sfoglia Stella - P.IVA 04263031207. Fatto con ❤️ a Bologna.
