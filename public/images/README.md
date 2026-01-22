# 📸 Immagini del Sito Sfoglia Stella

Questa cartella contiene tutte le immagini attualmente utilizzate nel sito web.

## 📁 Struttura Attuale delle Immagini

```
public/images/
├── hero/
│   └── hero-background.png        # Sfondo hero (pasta fresca)
├── about/
│   ├── img_balanzone.png          # Lavorazione balanzoni
│   └── img_tigelle.png            # Tigelle (anche in experience)
├── products/
│   ├── img_balanzone.png          # Balanzoni (copia da about)
│   ├── img_cacioepepe.jpg         # Pici cacio e pepe
│   ├── img_insalata.jpg           # Carbonara
│   ├── img_tortelli_verdi.jpg     # Tortellini
│   └── img_tortelloni.jpg         # Tagliatelle
├── experience/
│   ├── img_pasta_fresca.png       # Interno laboratorio
│   └── img_tigelle.png            # Piatti serviti
└── README.md                      # Questo file
```

## 🎯 Assegnazione Immagini ai Prodotti

| Prodotto | Immagine Utilizzata | File |
|----------|-------------------|------|
| Tortellini | Tortelli verdi | `img_tortelli_verdi.jpg` |
| Tagliatelle | Tortelloni | `img_tortelloni.jpg` |
| Balanzoni | Balanzoni | `img_balanzone.png` |
| Pici Cacio e Pepe | Cacio e pepe | `img_cacioepepe.jpg` |
| Carbonara | Insalata | `img_insalata.jpg` |
| Pasta Secca | Pasta fresca | `img_pasta_fresca.png` |

## 📐 Dimensioni e Formati Attuali

- **Hero**: PNG (~dimensioni originali)
- **About**: PNG (lavorazione pasta)
- **Products**: JPG/PNG misti (~600x400px)
- **Experience**: PNG (varie dimensioni)

## 🎨 Formati supportati
- **JPG** - Per fotografie di alta qualità
- **WebP** - Per prestazioni ottimali (se supportato)
- **PNG** - Per immagini con trasparenza

## 💡 Suggerimenti per le immagini
- **Risoluzione**: Alta qualità ma ottimizzate per il web
- **Taglio**: Centrate sui soggetti principali
- **Colori**: Caldi e invitanti (tonalità alimentari)
- **Dimensione file**: Max 500KB per immagine per velocità di caricamento

## 🔧 Come utilizzare le immagini

Una volta inserite le immagini nelle cartelle appropriate, aggiorna i percorsi nel file `constants.ts`:

```typescript
// Esempio per prodotti
{
  id: "1",
  name: "Tortellini",
  image: "/images/products/tortellini.jpg", // Nuovo percorso
  // ... altri campi
}
```

## 📍 Dove inserire le immagini
1. Copia le tue immagini nelle cartelle appropriate sopra
2. Rinomina i file in modo descrittivo
3. Aggiorna i percorsi nel codice come mostrato sopra
4. Ricarica il browser per vedere le modifiche