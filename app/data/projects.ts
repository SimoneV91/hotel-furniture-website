/**
 * Projects data - Array of all available room projects
 */

export interface Project {
  title: string;
  description: string;
  priceFrom: string;
  imageUrl: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Camere e reception per hotel 4 stelle a Bologna nel centro storico.',
    priceFrom: 'da 2.400 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Bologna'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Camere e spazi comuni su misura per un hotel 5 stelle nel cuore di Milano.',
    priceFrom: 'da 2.500 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
    imageAlt: 'Grand Hotel Milano'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Arredi funzionali per hotel 3 stelle a Bergamo con design pratico.',
    priceFrom: 'da 1.800 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Bergamo'
  },
  {
    title: 'B&B',
    description: 'Camere accoglienti in stile alpino per una struttura B&B in Trentino.',
    priceFrom: 'da 1.800 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    imageAlt: 'B&B Trentino'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Arredamento completo per hotel 4 stelle a Napoli con stile contemporaneo.',
    priceFrom: 'da 2.600 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Napoli'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Suite di lusso e aree comuni per resort esclusivo sulla Costiera Amalfitana.',
    priceFrom: 'da 3.800 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    imageAlt: 'Resort Costiera Amalfitana'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Camere e spazi comuni per hotel 3 stelle a Brescia con comfort essenziale.',
    priceFrom: 'da 1.700 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Brescia'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Soluzioni contract per hotel 4 stelle a Verona con design elegante.',
    priceFrom: 'da 2.500 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Verona'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Soluzioni contract per un boutique hotel nel centro storico di Roma.',
    priceFrom: 'da 2.800 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    imageAlt: 'Boutique Hotel Roma'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Soluzioni contract per hotel 3 stelle a Parma con stile moderno.',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Parma'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Arredi per camere, suite e aree lounge con vista sulla Costiera Amalfitana.',
    priceFrom: 'da 3.200 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    imageAlt: 'Resort Costiera Amalfitana'
  },
  {
    title: 'B&B',
    description: 'Arredi rustici e accoglienti per B&B in Umbria con vista sulla campagna.',
    priceFrom: 'da 1.500 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    imageAlt: 'B&B Umbria'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Arredi di pregio per hotel di lusso a Firenze con design contemporaneo.',
    priceFrom: 'da 3.200 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Firenze Centro'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Arredi per hotel 3 stelle a Modena con design funzionale e accogliente.',
    priceFrom: 'da 1.800 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Modena'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Camere e spazi comuni per hotel 4 stelle a Padova con comfort moderno.',
    priceFrom: 'da 2.300 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Padova'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Camere e suite esclusive per resort 5 stelle sul Lago di Como.',
    priceFrom: 'da 3.500 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    imageAlt: 'Resort Lago di Como'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Camere e reception per hotel 3 stelle a Reggio Emilia con comfort moderno.',
    priceFrom: 'da 1.750 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Reggio Emilia'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Arredi per hotel 4 stelle a Rimini con vista sul mare Adriatico.',
    priceFrom: 'da 2.700 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Rimini'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Arredamento contract per hotel di lusso a Venezia con vista sui canali.',
    priceFrom: 'da 3.600 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Venezia'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Arredamento per hotel 3 stelle a Ferrara con stile contemporaneo.',
    priceFrom: 'da 1.850 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Ferrara'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Camere e aree comuni per hotel 4 stelle a Pisa con stile moderno.',
    priceFrom: 'da 2.400 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1595576508898-0a8ef5c27a08?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Pisa'
  },
  {
    title: 'B&B',
    description: 'Camere e spazi comuni per B&B in Puglia con design mediterraneo.',
    priceFrom: 'da 1.400 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
    imageAlt: 'B&B Puglia'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Soluzioni su misura per resort esclusivo in Toscana con spa e wellness.',
    priceFrom: 'da 4.000 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
    imageAlt: 'Resort Toscana'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Soluzioni contract per hotel 3 stelle a Ravenna con design pratico.',
    priceFrom: 'da 1.700 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Ravenna'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Soluzioni contract per hotel 4 stelle a Genova nel centro storico.',
    priceFrom: 'da 2.500 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Genova'
  },
  {
    title: 'Camera ⭐⭐⭐⭐⭐',
    description: 'Camere e aree comuni per hotel 5 stelle a Torino con design moderno.',
    priceFrom: 'da 2.900 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1595576508898-0a8ef5c27a08?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Torino'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Camere e aree comuni per hotel 3 stelle a Forlì con comfort essenziale.',
    priceFrom: 'da 1.650 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Forlì'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Arredamento per hotel 4 stelle a Palermo con design mediterraneo.',
    priceFrom: 'da 2.600 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Palermo'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Camere e suite per hotel 4 stelle a Catania con vista sull\'Etna.',
    priceFrom: 'da 2.800 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Catania'
  },
  {
    title: 'B&B',
    description: 'Soluzioni contract per B&B in Marche con stile country elegante.',
    priceFrom: 'da 1.600 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop',
    imageAlt: 'B&B Marche'
  },
  {
    title: 'Camera ⭐⭐⭐⭐',
    description: 'Arredi per hotel 4 stelle a Lucca con design elegante e raffinato.',
    priceFrom: 'da 2.550 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1595576508898-0a8ef5c27a08?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Lucca'
  },
  {
    title: 'Camera ⭐⭐⭐',
    description: 'Arredamento funzionale per hotel 3 stelle a Cremona con comfort moderno.',
    priceFrom: 'da 1.720 € a camera',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    imageAlt: 'Hotel Cremona'
  }
];
