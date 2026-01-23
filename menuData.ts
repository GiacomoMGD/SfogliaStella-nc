export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tags?: string[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const FULL_MENU: MenuCategory[] = [
  {
    category: "ANTIPASTI",
    items: [
      { 
        name: "Affettato misto con tigelle", 
        description: "Prosciutto crudo di Parma, mortadella, salame nostrano, coppa stagionata, squacquerone, tigelle", 
        price: "15" 
      },
      { 
        name: "Rosa emiliana", 
        description: "Prosciutto crudo di Parma, Parmigiano Reggiano 24 mesi, rucola, aceto balsamico di Modena", 
        price: "14" 
      },
      { 
        name: "Tortino di patate", 
        description: "Con fonduta di Parmigiano Reggiano e noci", 
        price: "12" 
      }
    ]
  },
  {
    category: "PRIMI PIATTI",
    items: [
      { name: "Tortellini in brodo", price: "13" },
      { name: "Tortellini in crema di Parmigiano", price: "13" },
      { name: "Tagliatelle al ragù bolognese", price: "9" },
      { name: "Tagliatelle ai funghi porcini", price: "13" },
      { name: "Gramigna paglia e fieno al ragù bolognese o ragù di salsiccia", price: "10" },
      { name: "Tortelloni Ricotta e prezzemolo burro e salvia o pomodoro", price: "12" },
      { name: "Tortelloni Ricotta e prezzemolo con crema di Parmigiano", price: "13" },
      { name: "Balanzoni Gorgonzola e noci", price: "13" },
      { name: "Balanzoni Burro e salvia", price: "12" },
      { name: "Lasagna alla bolognese", price: "12" },
      { name: "Lasagna vegetariana", price: "12" },
      { name: "Passatelli in brodo", price: "10" },
      { name: "Casarecce speck, porcini e rucola", price: "13" },
      { name: "Ravioli ricotta e spinaci burro e salvia", price: "12" },
      { name: "Ravioli di patate al ragù", price: "11" },
      { name: "Spaghetti alla carbonara", price: "11" }
    ]
  },
  {
    category: "SECONDI PIATTI",
    items: [
      { name: "Cotoletta alla bolognese", price: "16" },
      { name: "Straccetti di manzo", description: "Con rucola, pomodorini, salsa Worcester e scaglie di Grana", price: "15" },
      { name: "Polpette della nonna in umido", price: "12" },
      { name: "Tagliata di manzo", description: "Con sale e rosmarino", price: "18" }
    ]
  },
  {
    category: "CONTORNI",
    items: [
      { name: "Patate al forno", price: "5" },
      { name: "Spinaci al vapore", price: "5" },
      { name: "Insalata mista", price: "5" },
      { name: "Verdure miste gratinate", price: "5" }
    ]
  },
  {
    category: "DOLCI",
    items: [
      { name: "Dolci della casa", price: "6" }
    ]
  },
  {
    category: "BEVANDE",
    items: [
      { name: "Acqua naturale/frizzante vetro 0,75 L", price: "3" },
      { name: "Acqua naturale/frizzante plastica 0,50 L", price: "1" },
      { name: "Bibite in lattina", description: "Coca-Cola, Coca-Cola Zero, Fanta, Lemon Soda, tè pesca, tè limone", price: "2,50" },
      { name: "Spritz (Aperol o Campari)", price: "7" },
      { name: "Hugo", price: "7" },
      { name: "Gin tonic", price: "8" },
      { name: "Crodino", price: "4" },
      { name: "Cocktail analcolico", price: "5" },
      { name: "Caffè", price: "1" },
      { name: "Caffè corretto", price: "1,50" },
      { name: "Amari", price: "4" }
    ]
  },
  {
    category: "BIRRE",
    items: [
      { name: "Ichnusa non filtrata", price: "5" },
      { name: "Corona 33 cl", price: "5" },
      { name: "Weiss Paulaner 0,50 L", price: "5" },
      { name: "Leffe bionda 33 cl", price: "5" },
      { name: "Leffe rossa 33 cl", price: "5" },
      { name: "Tourtel analcolica 33 cl", price: "4" }
    ]
  }
];
