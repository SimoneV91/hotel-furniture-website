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
    title: 'HOTEL RIALTO SUISSE',
    description: 'Camera in noce e grigio cemento goffrato con retrocomodini h.290, armadio a battenti e illuminazione integrata. Realizzazione su misura anche in versione ignifuga.',
    priceFrom: 'da 3.211 € a camera',
    // Nota: la directory in `public` è `immagini/camereHomePage` (Home, non Hotel)
    imageUrl: '/immagini/camereHomePage/1-hotel-rialto-suisse.PNG',
    imageAlt: 'Hotel Rialto Suisse'
  },
  {
    title: 'HOTEL BOSTON',
    description: 'Camera in legno olmo con testata a ponte e cabina armadio, realizzata su misura con illuminazione inclusa.',
    priceFrom: 'da 4.700 € a camera',
    imageUrl: '/immagini/camereHomePage/2-hotel-boston.PNG',
    imageAlt: 'Hotel Boston'
  },
  {
    title: 'HOTEL BOSTON',
    description: 'Camera in noce con testata a ponte, disponibile in versione ignifuga o nobilitato.',
    priceFrom: 'da 3.211 € a camera',
    imageUrl: '/immagini/camereHomePage/3-hotel-boston.PNG',
    imageAlt: 'Hotel Boston'
  },
  {
    title: 'HOTEL BOSTON',
    description: 'Camera in noce con testata in legno e cabina armadio, su misura con illuminazione.',
    priceFrom: 'da 3.211 € a camera',
    imageUrl: '/immagini/camereHomePage/4-hotel-boston.png',
    imageAlt: 'Hotel Boston'
  },
  {
    title: 'GRUPPO SERVIZI BOSTON',
    description: 'Gruppo servizi in legno olmo con scrivania e cabina armadio attrezzata con cassaforte e illuminazione.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/5-gruppo-servizi-boston.PNG',
    imageAlt: 'Gruppo servizi Boston'
  },
  {
    title: 'TESTATA A CABINA',
    description: 'Testata letto con cabina armadio integrata, ideale per camere business compatte.',
    priceFrom: 'da 1.250 €',
    imageUrl: '/immagini/camereHomePage/6-testata-letto-a-cabina-armadio.png',
    imageAlt: 'Testata cabina'
  },
  {
    title: 'PARTICOLARE',
    description: 'Testata elettrificata con vano tecnico, cornice e illuminazione LED.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/7-particolare.jpeg',
    imageAlt: 'Dettaglio testata'
  },
  {
    title: 'TESTATA A CABINA ARMADIO',
    description: 'Testata a cabina armadio su misura in rovere o olmo.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/8-testata-a-cabina-armadio.PNG',
    imageAlt: 'Testata cabina armadio'
  },
  {
    title: 'TESTATA LETTO A CABINA ARMADIO',
    description: 'Testata a cabina armadio su misura in noce.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/9-testata-letto-a-cabina-armadio.PNG',
    imageAlt: 'Testata cabina armadio noce'
  },
  {
    title: 'CAMERETTA GIRL',
    description: 'Cameretta in melaminico con ottimo rapporto qualità/prezzo.',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/10.png',
    imageAlt: 'Cameretta Girl'
  },
  {
    title: 'CAMERETTA CANARINI',
    description: 'Cameretta in melaminico con ottimo rapporto qualità/prezzo.',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/11.png',
    imageAlt: 'Cameretta Canarini'
  },
  {
    title: 'CAMERA OLMO',
    description: 'Camera in laminato HPL ad alto spessore con struttura lignea.',
    priceFrom: 'da 2.050 € a camera',
    imageUrl: '/immagini/camereHomePage/12.png',
    imageAlt: 'Camera Olmo'
  },
  {
    title: 'HOTEL FERRARI MARANELLO',
    description: 'Progetto camera hotel su misura.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/13-hotel-ferrari-maranello.png',
    imageAlt: 'Hotel Ferrari Maranello'
  },
  {
    title: 'CAMERA SARTO',
    description: 'Camera in frassino bianco con dettagli in noce.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/14.png',
    imageAlt: 'Camera Sarto'
  },
  {
    title: 'HOTEL AIRONE',
    description: 'Cameretta in melaminico con ottimo rapporto qualità/prezzo.',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/15-hotel-airone.png',
    imageAlt: 'Hotel Airone'
  },
  {
    title: 'HOTEL FELLINI',
    description: 'Progetto camera hotel su misura.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/16.png',
    imageAlt: 'Hotel Fellini'
  },
  {
    title: 'CAMERA CON SERVIZI SOSPESI',
    description: 'Camera con gruppo servizi sospeso in alluminio e testata in legno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/17.png',
    imageAlt: 'Camera servizi sospesi'
  },
  {
    title: 'CAMERA SOSPIROLO',
    description: 'Camera con retrocomodini, inserto in pelle e comodini in forte spessore.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/18.png',
    imageAlt: 'Camera Sospirolo'
  },
  {
    title: 'CAMERA SIXTY',
    description: 'Camera con testata in legno, comodini sospesi e gruppo servizi stile vintage anni 60.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/19.png',
    imageAlt: 'Camera Sixty'
  },
  {
    title: 'CAMERA STAND',
    description: 'Camera con carta da parati Glamora e design contemporaneo.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/20.png',
    imageAlt: 'Camera Stand'
  },
  {
    title: 'CAMERA MANSARDATA',
    description: 'Camera mansardata con testata a fasce colorate.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/21.png',
    imageAlt: 'Camera mansardata'
  },
  {
    title: 'HOTEL DELTA',
    description: 'Camera con testata in legno, comodino a cubo e gruppo servizi sospeso.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/22.png',
    imageAlt: 'Hotel Delta'
  },
  {
    title: 'TESTATA BEST WESTERN',
    description: 'Testata letto business per hotel.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/23.PNG',
    imageAlt: 'Testata Best Western'
  },
  {
    title: 'TESTATA BEST WESTERN VARIANTE',
    description: 'Testata letto con inserto in pelle e forte spessore.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/24.PNG',
    imageAlt: 'Testata Best Western pelle'
  },
  {
    title: 'TESTATA CABINA BOSTON',
    description: 'Testata a cabina armadio ideale per camere business compatte.',
    priceFrom: 'da 1.250 €',
    imageUrl: '/immagini/camereHomePage/25.PNG',
    imageAlt: 'Testata cabina Boston'
  },
  {
    title: 'TESTATA BEST WESTERN MATRIMONIALE',
    description: 'Testata matrimoniale con inserto in pelle.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/26.PNG',
    imageAlt: 'Testata matrimoniale'
  },
  {
    title: 'AREE COMUNI PARK HOTEL',
    description: 'Progetto aree comuni e reception.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/27-aree-comuni.PNG',
    imageAlt: 'Reception Park Hotel'
  },
  {
    title: 'CAMERA EMIRATI ARABI',
    description: 'Camera custom made per mercato internazionale.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/28.PNG',
    imageAlt: 'Camera Emirati'
  },
  {
    title: 'RECEPTION BEST WESTERN',
    description: 'Progetto reception hotel.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/29.PNG',
    imageAlt: 'Reception Best Western'
  },
  {
    title: 'HOTEL RESIDENCE ALPEN',
    description: 'Camera in faggio con armadio a due ante e finiture bianche.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/30.PNG',
    imageAlt: 'Hotel Alpen'
  },
  {
    title: 'CAMERA MOGANO',
    description: 'Camera classica in mogano con arredi completi.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/31.PNG',
    imageAlt: 'Camera mogano'
  },
  {
    title: 'HOTEL GERMANIA',
    description: 'Camera in rovere ignifugo.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/32.PNG',
    imageAlt: 'Hotel Germania'
  },
  {
    title: 'APART HOTEL MYRA',
    description: 'Progetto apart hotel.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/33-camere-myra.png',
    imageAlt: 'Apart Hotel Myra'
  },
  {
    title: 'CAMERA MODERNA',
    description: 'Camera con armadio a giorno e scrivania sospesa.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/34.PNG',
    imageAlt: 'Camera moderna'
  },
  {
    title: 'CAMERA ELEGANTE',
    description: 'Camera elegante con testata capitonné e boiserie luminosa.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/35.PNG',
    imageAlt: 'Camera elegante'
  },
  {
    title: 'CAMERA SMART',
    description: 'Camera con domotica avanzata e arredi in rovere.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/36.PNG',
    imageAlt: 'Camera smart'
  },
  {
    title: 'CAMERA INDUSTRIAL',
    description: 'Camera stile industrial con arredi minimali e pavimenti in cotto.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/37-edelvise-village.png',
    imageAlt: 'Camera industrial'
  },
  {
    title: 'CAMERA BUSINESS',
    description: 'Camera business con scrivania attrezzata e coffee station.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/38-gruppo-servizi-business.PNG',
    imageAlt: 'Camera business'
  },
  {
    title: 'CAMERA NOCE',
    description: 'Camera classico-contemporanea in noce con dettagli in ecopelle.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/39-gruppo-servizi-noce.PNG',
    imageAlt: 'Camera noce'
  },
  {
    title: 'CAMERA PANORAMICA',
    description: 'Camera doppia luminosa con vista mare e arredi moderni.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/40-hotel-geneve.PNG',
    imageAlt: 'Camera vista mare'
  },
  {
    title: 'HOTEL SANREMO',
    description: 'Camera sartoriale in frassino con dettagli in noce.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/41-hotel-sarto.png',
    imageAlt: 'Hotel Sanremo'
  },
  {
    title: 'CAMERA MINIMAL',
    description: 'Camera con design lineare e inserti in pelle nera.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/42-london.PNG',
    imageAlt: 'Camera minimal'
  },
  {
    title: 'CAMERA ALPINA',
    description: 'Camera twin con boiserie in legno e toni naturali.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/43-modello-svizzera.PNG',
    imageAlt: 'Camera alpina'
  },
  {
    title: 'CAMERA BORDEAUX',
    description: 'Camera con testata trapuntata e boiserie in legno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/44-motel-bergamo.png',
    imageAlt: 'Camera bordeaux'
  },
  {
    title: 'CAMERA MOTEL',
    description: 'Camera moderna con accenti giallo senape e balcone.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/45-motel-rovigo.PNG',
    imageAlt: 'Camera motel'
  },
  {
    title: 'CAMERA RUSSIA CLASSIC',
    description: 'Camera con zona servizi in stile barocco e finiture oro.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/46-russian-gruppo-servizi.PNG',
    imageAlt: 'Camera Russia classica'
  },
  {
    title: 'CAMERA RUSSIA LUXURY',
    description: 'Camera barocca con mobili intarsiati e tessuti damascati.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/47-russian-suite.PNG',
    imageAlt: 'Camera Russia luxury'
  },
  {
    title: 'SUITE IMPERIALE',
    description: 'Suite di lusso con testata monumentale e dettagli in oro.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/48-russian.PNG',
    imageAlt: 'Suite imperiale'
  },
  {
    title: 'CAMERA ROMANTICA',
    description: 'Suite romantica con atmosfera elegante e dettagli raffinati.',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/49-sexy-hotel.PNG',
    imageAlt: 'Camera romantica'
  },
  {
    title: 'CAMERA DOPPIA MODERNA',
    description: 'Camera doppia moderna con arredi in rovere e zona desk.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/50.PNG',
    imageAlt: 'Camera doppia moderna'
  },
  {
    title: 'CAMERA HOTEL 3 STELLE',
    description: 'Camera design con testata in legno e dettagli contemporanei.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/51.PNG',
    imageAlt: 'Camera hotel design'
  }
];

