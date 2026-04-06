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
    description: '(escluso sommier, trasporto e montaggio) Versione ignifuga certificazioni “Bando Turismo 2026” in classe B-s1, D0 Arredi sostenibili',
    priceFrom: 'da 3.211 € a camera',
    imageUrl: '/immagini/camereHomePage/1-hotel-rialto-suisse.PNG',
    imageAlt: 'Hotel Rialto Suisse'
  },
  {
    title: 'HOTEL BOSTON',
    description: 'Legno olmo con testata a ponte e cabina armadio, completamente su misura spessore cm.3,6 compeleta di illuminazione',
    priceFrom: 'da 4.700 € a camera',
    imageUrl: '/immagini/camereHomePage/2-hotel-boston.PNG',
    imageAlt: 'Hotel Boston'
  },
  {
    title: 'HOTEL BOSTON',
    description: 'Camera modello hotel Boston in noce con testata in legno a ponte, Sommier singolo in pelle',
    priceFrom: 'da 3.211 € a camera',
    imageUrl: '/immagini/camereHomePage/3-hotel-boston.PNG',
    imageAlt: 'Hotel Boston'
  },
  {
    title: 'HOTEL BOSTON',
    description: 'Camera modello hotel Boston in noce con testata in legno e cabina armadio, tutto su misura, in versione ignifuga spessore cm.3,6 o in nobilitato.',
    priceFrom: 'da 3.211 € a camera',
    imageUrl: '/immagini/camereHomePage/4-hotel-boston.png',
    imageAlt: 'Hotel Boston'
  },
  {
    title: 'GRUPPO SERVIZI BOSTON',
    description: 'Gruppo servizi con cabina armadio spessore cm.3,6 h.225 in profondita cm.44 o 56 con vano porta guanciali tubo appendiabiti con illuminazione.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/5-gruppo-servizi-boston.PNG',
    imageAlt: 'Gruppo servizi Boston'
  },
  {
    title: 'TESTATA A CABINA',
    description: 'Testata letto a cabina armadio hotel Boston in legno. Ideali per camere singole business molto piccole.',
    priceFrom: 'da 1.250 €',
    imageUrl: '/immagini/camereHomePage/6-testata-letto-a-cabina-armadio.png',
    imageAlt: 'Testata cabina'
  },
  {
    title: 'PARTICOLARE',
    description: 'Testata elettrificata da spessore cm.5 con vano tecnico e cornice da cm.10. Dimensione massima in pezzo unico cm.310',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/7-particolare.jpeg',
    imageAlt: 'Dettaglio testata'
  },
  {
    title: 'TESTATA A CABINA ARMADIO',
    description: 'Testata a cabina armadio su misura della camera var. B in rovere. Rilievo a nostro carico in cantiere o in hotel. Progettazione gratuita e senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/8-testata-a-cabina-armadio.PNG',
    imageAlt: 'Testata cabina armadio'
  },
  {
    title: 'TESTATA LETTO A CABINA ARMADIO',
    description: 'Testata a cabina armadio su misura della camera VARIANTE C in NOCE. Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/9-testata-letto-a-cabina-armadio.PNG',
    imageAlt: 'Testata cabina armadio noce'
  },
  {
    title: 'CAMERETTA GIRL',
    description: 'Cameretta GIRL in melaminico con grande rapporto prezzo/qualità (solo per grandi quantità)',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/10.png',
    imageAlt: 'Cameretta Girl'
  },
  {
    title: 'CAMERETTA CANARINI',
    description: 'Cameretta CANARINI in melaminico con grande rapporto prezzo/qualità',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/11.png',
    imageAlt: 'Cameretta Canarini'
  },
  {
    title: 'CAMERA OLMO',
    description: 'Costo 2.050,00 solo stutture lignee. 2 sommier in pelle 1IM con materasso ignifugo euro 900,00, trasporto e montaggio euro 450,00',
    priceFrom: 'da 2.050 € a camera',
    imageUrl: '/immagini/camereHomePage/12.png',
    imageAlt: 'Camera Olmo'
  },
  {
    title: 'HOTEL FERRARI MARANELLO',
    description: 'dimensioni superiori in 2 pezzi. Comodino in forte spessore senza fondo per lavaggio pavimento. Faretto orientabile a led.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/13-hotel-ferrari-maranello.png',
    imageAlt: 'Hotel Ferrari Maranello'
  },
  {
    title: 'CAMERA SARTO',
    description: 'Camera Sarto in frassino bianco con bordi noce. , trasporto e montaggio euro 450,00 Su richiesta in classe B-s1, D0 Arredi sostenibili',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/14.png',
    imageAlt: 'Camera Sarto'
  },
  {
    title: 'HOTEL AIRONE',
    description: 'Cameretta in melaminico con grande rapporto prezzo/qualità da euro',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/15-hotel-airone.png',
    imageAlt: 'Hotel Airone'
  },
  {
    title: 'HOTEL FELLINI',
    description: 'Camera custom made disegna da architetto esterno. Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/16.png',
    imageAlt: 'Hotel Fellini'
  },
  {
    title: 'CAMERA CON SERVIZI SOSPESI',
    description: 'Camera con gruppo servizi sospeso con struttura in alluminio e testata letto in legno. Comodino a cubo Cassaforte digitale triplo passe-par-tout.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/17.png',
    imageAlt: 'Camera servizi sospesi'
  },
  {
    title: 'CAMERA SOSPIROLO',
    description: 'Camera modello Sospirolo con retro comodini da 60x140, inserto in pelle da cm.180x160 e comodini in forte spessore',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/18.png',
    imageAlt: 'Camera Sospirolo'
  },
  {
    title: 'CAMERA SIXTY',
    description: 'Camera modello SIXTY con testata in legno e comodini sospesi. Gruppo servizi sospeso con montanti in alluminio vintage anni 60\'',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/19.png',
    imageAlt: 'Camera Sixty'
  },
  {
    title: 'CAMERA STAND',
    description: 'Camera modello STAND con carta da parati GLAMORA Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/20.png',
    imageAlt: 'Camera Stand'
  },
  {
    title: 'CAMERA MANSARDATA',
    description: 'Camera mansardata con testata a fascie color. (trasporto e montaggio) Su richiesta certificazioni “Bando Turismo 2026” in classe B-s1, D0',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/21.png',
    imageAlt: 'Camera mansardata'
  },
  {
    title: 'HOTEL DELTA',
    description: 'Camera hotel Delta con testata legno con cornice, comodino a cubo e gruppo servizi a sopralzo pensile',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/22.png',
    imageAlt: 'Hotel Delta'
  },
  {
    title: 'TESTATA BEST WESTERN',
    description: 'Testata letto business Best Western Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/23.PNG',
    imageAlt: 'Testata Best Western'
  },
  {
    title: 'TESTATA BEST WESTERN VARIANTE',
    description: 'Testata letto business Best Western variante in forte spessore e testata con inserto pelle',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/24.PNG',
    imageAlt: 'Testata Best Western pelle'
  },
  {
    title: 'TESTATA CABINA BOSTON',
    description: 'Testata letto a cabina armadio hotel Boston in legno. Ideali per camere singole business molto piccole.',
    priceFrom: 'da 1.250 €',
    imageUrl: '/immagini/camereHomePage/25.PNG',
    imageAlt: 'Testata cabina Boston'
  },
  {
    title: 'TESTATA BEST WESTERN MATRIMONIALE',
    description: 'Testata letto business Best Western variante matrimoniale fissa con testata con inserto pelle',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/26.PNG',
    imageAlt: 'Testata matrimoniale'
  },
  {
    title: 'AREE COMUNI PARK HOTEL',
    description: 'AREE COMUNI reception Park Hotel. Rilievo a nostro carico in cantiere o in hotel. Progettazione gratuita e senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/27-aree-comuni.PNG',
    imageAlt: 'Reception Park Hotel'
  },
  {
    title: 'CAMERA EMIRATI ARABI',
    description: 'Camera custon made Emirati Arabi Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/28.PNG',
    imageAlt: 'Camera Emirati'
  },
  {
    title: 'RECEPTION BEST WESTERN',
    description: 'Raception Best Western Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/29.PNG',
    imageAlt: 'Reception Best Western'
  },
  {
    title: 'HOTEL RESIDENCE ALPEN',
    description: 'Hotel Residence Alpen in faggio con armadio a 2 ante e riporto a 7 bianco',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/30.PNG',
    imageAlt: 'Hotel Alpen'
  },
  {
    title: 'CAMERA MOGANO',
    description: 'Camera in Mogano 1990 testata in legno bassa, comodini con cassetti, armadio a 2 ante, scrivania con alzatina, appendiabiti e posavalige sagomato',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/31.PNG',
    imageAlt: 'Camera mogano'
  },
  {
    title: 'HOTEL GERMANIA',
    description: 'Camera hotel Germania in rovere ignifugo Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/32.PNG',
    imageAlt: 'Hotel Germania'
  },
  {
    title: 'APART HOTEL MYRA',
    description: 'Apart Hotel Myra 1995 Rilievo e progettazione nostro carico senza impegno.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/33-camere-myra.png',
    imageAlt: 'Apart Hotel Myra'
  },
  {
    title: 'CAMERA MODERNA',
    description: 'Camera moderna e funzionale con armadio a giorno, scrivania sospesa, toni grigi e letto matrimoniale tessile hotel coordinato.',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/34.PNG',
    imageAlt: 'Camera moderna'
  },
  {
    title: 'CAMERA ELEGANTE',
    description: 'Elegante camera hotel dai toni caldi, testata letto capitonné, boiserie luminosa e arredi in legno dal design essenziale',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/35.PNG',
    imageAlt: 'Camera elegante'
  },
  {
    title: 'CAMERA SMART',
    description: 'Stanza smart con domotica avanzata, arredi in rovere, carta da parati a righe e testata imbottita per un comfort hotel high-tech',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/36.PNG',
    imageAlt: 'Camera smart'
  },
  {
    title: 'CAMERA INDUSTRIAL',
    description: 'Ambiente industrial con pavimenti in cotto, pareti a fasce colorate e arredi minimali in legno dal carattere urbano',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/37-edelvise-village.png',
    imageAlt: 'Camera industrial'
  },
  {
    title: 'CAMERA BUSINESS',
    description: 'Spazio hotel business moderno con scrivania attrezzata, coffee station, armadio a giorno e finiture materiche scure e legnose',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/38-gruppo-servizi-business.PNG',
    imageAlt: 'Camera business'
  },
  {
    title: 'CAMERA NOCE',
    description: 'Arredo classico-contemporaneo in noce con scrivania integrata, specchiera, panca portabagagli e dettagli in ecopelle nera',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/39-gruppo-servizi-noce.PNG',
    imageAlt: 'Camera noce'
  },
  {
    title: 'CAMERA PANORAMICA',
    description: 'Luminosa camera doppia con vista panoramica su costiera e mare, arredi moderni e accogliente parete color ruggine',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/40-hotel-geneve.PNG',
    imageAlt: 'Camera vista mare'
  },
  {
    title: 'HOTEL SANREMO',
    description: 'Camera Hotel Sanremo sartoriale in frassino con bordi noce. Accogliente stanza hotel dai toni sabbia, carta da parati a righe',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/41-hotel-sarto.png',
    imageAlt: 'Hotel Sanremo'
  },
  {
    title: 'CAMERA MINIMAL',
    description: 'Camera hotel dal design sobrio e lineare, testiera in legno con inserti in pelle nera e comodini sospesi minimalisti',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/42-london.PNG',
    imageAlt: 'Camera minimal'
  },
  {
    title: 'CAMERA ALPINA',
    description: 'Camera hotel twin dai toni naturali con boiserie in legno, parete verde bosco e tessili coordinati per un\'atmosfera alpina',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/43-modello-svizzera.PNG',
    imageAlt: 'Camera alpina'
  },
  {
    title: 'CAMERA BORDEAUX',
    description: 'Camera moderna con testata bordeaux trapuntata, boiserie in legno, specchi decorativi e panca fondo letto coordinata',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/44-motel-bergamo.png',
    imageAlt: 'Camera bordeaux'
  },
  {
    title: 'CAMERA MOTEL',
    description: 'Luminosa camera Motel moderna con vivaci accenti giallo senape, arredi in legno chiaro, testata capitonné e balcone panoramico',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/45-motel-rovigo.PNG',
    imageAlt: 'Camera motel'
  },
  {
    title: 'CAMERA RUSSIA CLASSIC',
    description: 'Camera Hotel Russia custom Made. Elegante zona servizi in stile barocco con finiture in oro, mobili in legno scuro lucido e specchiere monumentali',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/46-russian-gruppo-servizi.PNG',
    imageAlt: 'Camera Russia classica'
  },
  {
    title: 'CAMERA RUSSIA LUXURY',
    description: 'Camera hotel cuastom made Russia. Lussuosa camera barocca russa con mobili intarsiati in foglia oro, tappeti pregiati e ricca testiera in tessuto damascato',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/47-russian-suite.PNG',
    imageAlt: 'Camera Russia luxury'
  },
  {
    title: 'SUITE IMPERIALE',
    description: 'Hotel room custom made for Russian. Suite imperiale con testata monumentale, ricami araldici in oro su velluto blu e arredi neoclassici di estremo lusso',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/48-russian.PNG',
    imageAlt: 'Suite imperiale'
  },
  {
    title: 'CAMERA ROMANTICA',
    description: 'Cameretta hotel in melaminico con grande rapporto prezzo/qualità.',
    priceFrom: 'da 1.900 € a camera',
    imageUrl: '/immagini/camereHomePage/49-sexy-hotel.PNG',
    imageAlt: 'Camera romantica'
  },
  {
    title: 'CAMERA DOPPIA MODERNA',
    description: 'Camera doppia moderna e funzionale, arredi in rovere, runner color petrolio coordinati e zona desk essenziale',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/50.PNG',
    imageAlt: 'Camera doppia moderna'
  },
  {
    title: 'CAMERA HOTEL 3 STELLE',
    description: 'Camera hotel 3 stelle di design con parete verde lucida, testata in legno naturale, lampade a sospensione nere e dettagli artistici',
    priceFrom: '',
    imageUrl: '/immagini/camereHomePage/51.PNG',
    imageAlt: 'Camera hotel design'
  }
];


