import { NavItem, Product, Testimonial } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Il Progetto", href: "#chi-siamo" },
  { label: "Le Specialità", href: "#prodotto" },
  { label: "Il Bistrot", href: "#bistrot" },
  { label: "Contatti", href: "#esperienza" },
];

export const HERO_TEXT = {
  headline: "Sfoglia Stella",
  subheadline: "Passione per la cucina e per il gusto. Ricette autentiche emiliane e specialità regionali, preparate a mano ogni giorno.",
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Tortelloni Verdi",
    description: "Sfoglia verde tirata al mattarello con un ricco ripieno di spinaci freschi, ricotta cremosa e parmigiano reggiano.",
    image: "/images/products/img_tortelli_verdi.jpg",
    tag: "Tradizione"
  },
  {
    id: "2",
    name: "Sformato di Verdure",
    description: "Un cuore morbido di verdure di stagione servito su un letto di misticanza fresca e guarnito con scaglie di parmigiano.",
    image: "/images/products/img_insalata.jpg",
    tag: "Antipasti"
  },
  {
    id: "3",
    name: "Balanzoni Gorgonzola e Noci",
    description: "Tortelloni verdi ripieni di mortadella e ricotta, serviti con una vellutata al gorgonzola e noci croccanti.",
    image: "/images/products/img_balanzone.png",
    tag: "Specialità"
  },
  {
    id: "4",
    name: "Pici Cacio e Pepe",
    description: "Pasta fresca fatta a mano secondo la tradizione toscana, condita con pecorino romano DOP e pepe nero tostato.",
    image: "/images/products/img_cacioepepe.jpg",
    tag: "I Primi"
  },
  {
    id: "5",
    name: "Tagliatelle Fresche",
    description: "La vera pasta all'uovo bolognese, ruvida e porosa, ideale per accogliere ogni tipo di condimento tradizionale.",
    image: "/images/experience/img_pasta_fresca.png",
    tag: "Pasta Fresca"
  },
  {
    id: "6",
    name: "Tortelloni Ricotta e Prezzemolo",
    description: "Il sapore delicato della tradizione: tortelloni fatti a mano con ripieno di ricotta fresca e profumato prezzemolo.",
    image: "/images/products/img_tortelloni.jpg",
    tag: "I Primi"
  }
];

export const OPENING_HOURS = {
  kitchen: [
    { day: "Lunedì", hours: "11:30 - 15:00" },
    { day: "Martedì", hours: "11:30 - 15:00" },
    { day: "Mercoledì", hours: "11:30 - 15:00" },
    { day: "Giovedì", hours: "11:30 - 15:00" },
    { day: "Venerdì", hours: "11:30 - 15:00", extra: "18:30 - 22:30" },
    { day: "Sabato", hours: "11:30 - 15:00", extra: "18:30 - 22:30" },
    { day: "Domenica", hours: "11:30 - 14:30" },
  ],
  shop: [
    { day: "Martedì", hours: "10:00 - 15:00" },
    { day: "Mercoledì - Sabato", hours: "10:00 - 15:00", extra: "18:30 - 22:30" },
  ]
};

export const CONTACT_INFO = {
  address: "Via Maria Callas 4/A, Bologna",
  phone: "051 289 0158",
  whatsapp: "380 235 8946",
  email: "info@sfogliastella.it",
  deliveroo: "https://deliveroo.it/it/menu/bologna/pescarola/sfoglia-stella-via-maria-callas-4a",
  googleReserve: "https://www.google.com/maps/reserve/v/dine/c/bYb-0VxjpSA",
  theFork: "https://www.thefork.it/ristorante/risto-bistro-sfoglia-stella-r855894#booking=",
  googleMaps: "https://www.google.com/maps/place/Sfoglia+stella+risto+bistrot/@44.5142212,11.3183493,18z/data=!3m1!4b1!4m6!3m5!1s0x477fd3da97fda7f7:0xce15d58962ce0ae!8m2!3d44.5142212!4d11.3183493!16s%2Fg%2F11lzxd89yg",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.2662!2d11.3183493!3d44.5142212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fd3da97fda7f7%3A0xce15d58962ce0ae!2sSfoglia%20stella%20risto%20bistrot!5e0!3m2!1sit!2sit!4v1737392661555!5m2!1sit!2sit"
};

export const TESTIMONIALS: Testimonial[] = [];
