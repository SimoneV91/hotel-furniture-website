  interface Reference {
  hotelName: string;
  city: string;
}

interface RegionReferences {
  region: string;
  references: Reference[];
}
  
  const referencesByRegion: RegionReferences[] = [
{
    region: 'Veneto',
    references: [
      { hotelName: 'Ice Delfino', city: 'Preganziol' },
      { hotelName: 'GHV Hotel & Spa', city: 'Creazzo' },
      { hotelName: 'Antica Locanda al Gambero', city: 'Soave' },
      { hotelName: 'Restructura', city: 'Belluno' },
      { hotelName: 'Motel Karibe', city: 'Fratta Polesine' },
      { hotelName: 'Hotel Villa Cipro', city: 'Lido di Venezia' },
      { hotelName: 'Il Sole nel Mare', city: 'Lido di Volano' },
      { hotelName: 'Hotel Corte Foscara', city: 'Malcontenta di Mira' },
      { hotelName: 'B&B Consortio', city: 'Lamon' },
      { hotelName: 'Aeroporto', city: 'Istrana' },
      { hotelName: 'B&B Scrovegni', city: 'Padova' },
      { hotelName: 'B&B Zuccarello', city: 'Marcon' },
      { hotelName: 'Hotel Posta', city: 'Abano Terme' },
      { hotelName: 'Hotel Formula', city: 'Rosolina' },
      { hotelName: 'Hotel Ariston', city: 'Sottomarina' },
      { hotelName: 'Hotel Garibaldi', city: 'Padova' },
      { hotelName: 'Hotel Rivus', city: 'Peschiera del Garda' },
      { hotelName: 'Hotel Domus Ciliota', city: 'Venezia' },
      { hotelName: 'Hotel Kriss', city: 'Bardolino' },
      { hotelName: 'Hotel Antica Postumia', city: 'Vedelago' },
      { hotelName: 'Hotel La Torre', city: 'Thiene' },
      { hotelName: 'B&B Porto Vecchio', city: 'Malcesine' },
      { hotelName: 'House Garden', city: 'Venezia' },
      { hotelName: 'Villa delle Rogge', city: 'Pordenone' },
      { hotelName: 'Park Hotel Bolognese', city: 'Preganziol' },
      { hotelName: 'C’è Gigi', city: 'Spresiano' },
      { hotelName: 'Hotel Soranza', city: 'Castelfranco Veneto' },
      { hotelName: 'Hotel La Torre', city: 'Castelfranco Veneto' }
    ]
  },
    {
    region: 'Friuli Venezia Giulia',
    references: [
      { hotelName: 'Albergo Frio Frio', city: 'Ronchi dei Legionari' },
      { hotelName: 'Hotel Centrale', city: 'Trieste' },
      { hotelName: 'Hotel ai 2 Leoni', city: 'Farra d’Isonzo' },
      { hotelName: 'Hotel Milano', city: 'Trieste' },
      { hotelName: 'Hotel Leon Bianco', city: 'Gonars' },
      { hotelName: 'Hotel Tommaso', city: 'Gorizia' },
      { hotelName: 'Villa delle Rogge', city: 'Pordenone' },
      { hotelName: 'Hotel Tommaso', city: 'Savogna' }
    ]
  },
  {
  region: 'Trentino Alto Adige',
  references: [
    { hotelName: 'Park Hotel Werth', city: 'Bolzano' },
    { hotelName: 'Hotel Florida', city: 'Molveno' },
    { hotelName: 'Hotel Bellevue', city: 'Merano' },
    { hotelName: 'B&B Casa da Carmen', city: 'Mezzolombardo' },
    { hotelName: 'Hotel Bologna', city: 'Brunico' }
  ]
},
{
  region: 'Lombardia',
  references: [
    { hotelName: 'B&B Emma', city: 'Rho' },
    { hotelName: 'Hotel Rex', city: 'Milano' },
    { hotelName: 'Hotel Elys', city: 'Pieve Emanuele' },
    { hotelName: 'Green Motel', city: 'Vergiate' },
    { hotelName: 'Hotel Gamma', city: 'Milano' },
    { hotelName: 'Locanda Osteria Roncate', city: 'Osnago' },
    { hotelName: 'Hotel Palazzo Marignano', city: 'Melegnano' },
    { hotelName: 'Aparthotel Navigli', city: 'Milano' },
    { hotelName: 'Hotel Adam', city: 'Milano' },
    { hotelName: 'Hotel Arizona', city: 'Milano' },
    { hotelName: 'Hotel Eolo', city: 'Sermide' },
    { hotelName: 'Hotel Rosengarden', city: 'Pavia' },
    { hotelName: 'Trust Medical Cliniche', city: 'Milano' },
    { hotelName: 'Hotel Venini', city: 'Milano' },
    { hotelName: 'B&B Wolkowieź', city: 'Milano' },
    { hotelName: 'B&B Via Soderini 44', city: 'Milano' },
    { hotelName: 'Hotel Chezromyk', city: 'Milano' },
    { hotelName: 'Hotel Wang', city: 'Milano' },
    { hotelName: 'Hotel Picaflor Art & Room', city: 'Milano' },
    { hotelName: 'Albergo La Corte', city: 'Desio' },
    { hotelName: 'Edifa SRL', city: 'Milano' },
    { hotelName: 'B&B Ad Hoc', city: 'San Paolo d\'Argon' },
    { hotelName: 'Cascina Cantalupo', city: 'Monza' },
    { hotelName: 'Istituto La Casa', city: 'Milano' },
    { hotelName: 'Hotel Italia', city: 'Abbiategrasso' },
    { hotelName: 'Hotel Aurora', city: 'Pavia' },
    { hotelName: 'Hotel Derby', city: 'Sirmione' },
    { hotelName: 'Hotel Mayer e Splendid', city: 'Desenzano del Garda' },
    { hotelName: 'Hotel Sunflower', city: 'Milano' },
    { hotelName: 'Hotel Santa Libera', city: 'Lago di Como' },
    { hotelName: 'Hotel Siena', city: 'Milano' },
    { hotelName: 'Relais Sant\'Emiliano', city: 'Padenghe' },
    { hotelName: 'B&B Govone 100', city: 'Milano' },
    { hotelName: 'Hotel Panizza', city: 'Milano' },
    { hotelName: 'Hotel Gran Sasso', city: 'Milano' },
    { hotelName: 'Hotel Corte di Santa Libera', city: 'San Fedele Intelvi' },
    { hotelName: 'Porcao', city: 'Milano' },
    { hotelName: 'Caserma Carcere Bollate', city: 'Milano' },
    { hotelName: 'Caserma Carcere Opera', city: 'Milano' },
    { hotelName: 'Teatro alla Scala', city: 'Milano' }
  ]
},
{
  region: 'Piemonte',
  references: [
    { hotelName: 'Hotel Castello Rosso', city: 'Costiglione Saluzzo' },
    { hotelName: 'Hotel Lis', city: 'Asti' },
    { hotelName: 'Villa Mary', city: 'Casale Monferrato' },
    { hotelName: 'Hotel Sant\'Anna', city: 'Verbania' },
    { hotelName: 'Albergo d\'Italia', city: 'Chivasso' },
    { hotelName: 'Hotel Regina', city: 'Acqui Terme' },
    { hotelName: 'B&B Romita', city: 'Domodossola' },
    { hotelName: 'Flying Hotel', city: 'San Maurizio Canavese' },
    { hotelName: 'Hotel Flora', city: 'Baveno' },
    { hotelName: 'Hotel Villa Petra', city: 'Moncalieri' },
    { hotelName: 'Berio Caravaggio 42', city: 'Verbania' },
    { hotelName: 'Hotel Due Mondi', city: 'Torino' },
    { hotelName: 'Hotel Europa', city: 'Novara' },
    { hotelName: 'Wine Bike Hotel', city: 'Ovada' },
    { hotelName: 'Hotel Guarene', city: 'Alba' },
    { hotelName: 'Hotel Piemonte', city: 'Acqui Terme' },
    { hotelName: 'Hotel Primavera', city: 'Moncalieri' },
    { hotelName: 'Hotel Rosa', city: 'Baveno' },
    { hotelName: 'Hotel Villa Ester', city: 'Tagliolo' },
    { hotelName: 'Villa Sassi', city: 'Alessandria' },
    { hotelName: 'Bar ai Due Farabutti', city: 'Ovada' }
  ]
},
{
  region: 'Liguria',
  references: [
    { hotelName: 'Hotel Assarotti', city: 'Genova' },
    { hotelName: 'Arianna Hill House', city: 'La Spezia' },
    { hotelName: 'Grand Hotel Savoia', city: 'Genova' },
    { hotelName: 'Hotel Astro', city: 'Genova' },
    { hotelName: 'Hotel Eco del Mare', city: 'Cogoleto' },
    { hotelName: 'Hotel Barone', city: 'Genova' },
    { hotelName: 'Hotel Puntabella', city: 'Varazze' },
    { hotelName: 'Hotel Villa Adele', city: 'Celle Ligure' },
    { hotelName: 'Il Saraceno Residence', city: 'Albenga' },
    { hotelName: 'Hotel Chopin', city: 'Genova' },
    { hotelName: 'Hotel Mirò', city: 'Savona' },
    { hotelName: 'Hotel Festival', city: 'Sanremo' },
    { hotelName: 'Hotel Ines', city: 'Noli' },
    { hotelName: 'Hotel Lido Giovanna', city: 'Loano' },
    { hotelName: 'Hotel Premuda', city: 'Spotorno' },
    { hotelName: 'Hotel Serafino', city: 'Genova' },
    { hotelName: 'Hotel Villa Bianca', city: 'Laigueglia' },
    { hotelName: 'Hotel Villa Sylvia', city: 'Sanremo' },
    { hotelName: 'La Dolce Vita', city: 'Arma di Taggia' },
    { hotelName: 'Residence al Saraceno', city: 'Albenga' },
    { hotelName: 'B&B Lifestyle', city: 'La Spezia' },
    { hotelName: 'Residence il Monello', city: 'Loano' },
    { hotelName: 'Hotel Ermitage', city: 'Genova' }
  ]
},
{
  region: 'Emilia-Romagna',
  references: [
    { hotelName: 'Hotel Cristallo', city: 'Cerreto Laghi' },
    { hotelName: 'Hotel Meta', city: 'Granarolo' },
    { hotelName: 'Hotel Vecchio Casello', city: 'Castelleone' },
    { hotelName: 'Hotel Planet Ferrari', city: 'Maranello' },
    { hotelName: 'Hotel Astoria', city: 'Tabiano Terme' },
    { hotelName: 'Hotel Elvira', city: 'Tabiano Terme' },
    { hotelName: 'Hotel Hyknusa', city: 'Reggio Emilia' },
    { hotelName: 'Hotel Ritz', city: 'Piacenza' },
    { hotelName: 'Palazzo Grassi', city: 'Bologna' },
    { hotelName: 'IAL Scuola Ristorazione', city: 'Serramazzoni' },
    { hotelName: 'Hotel Formula', city: 'Rosolina' }
  ]
},
{
  region: 'Toscana',
  references: [
    { hotelName: 'Hotel Rialto & Suisse', city: 'Lido di Camaiore' },
    { hotelName: 'Lormart B&B', city: 'Pontevecchio' },
    { hotelName: 'Hotel Carignano', city: 'Lucca' },
    { hotelName: 'Hotel Villaggio Paradiso', city: 'Isola d\'Elba' },
    { hotelName: 'Hotel Verde Sole Mare', city: 'Marina di Pietrasanta' },
    { hotelName: 'Hotel Bellavista', city: 'Firenze' },
    { hotelName: 'Hotel Cecco', city: 'Arezzo' },
    { hotelName: 'Hotel Chianti', city: 'Firenze' },
    { hotelName: 'Albergo del Chianti', city: 'Greve in Chianti' },
    { hotelName: 'Hotel Divino', city: 'Cecina' },
    { hotelName: 'Hotel La Badia', city: 'Orvieto' },
    { hotelName: 'Hotel Marinella', city: 'Isola d\'Elba' }
  ]
},
{
  region: 'Lazio',
  references: [
    { hotelName: 'Lormart B&B', city: 'Roma' },
    { hotelName: 'Hotel Domus Castrense', city: 'Roma' },
    { hotelName: 'Hotel Medici', city: 'Roma' },
    { hotelName: 'Hotel Philia', city: 'Roma' },
    { hotelName: 'L. Ventura SRL', city: 'Roma' },
    { hotelName: 'Minerva SRL', city: 'Roma' },
    { hotelName: 'B&B Cave di Pietralata', city: 'Roma' },
    { hotelName: 'B&B Rotella', city: 'Roma' },
    { hotelName: 'B&B Via Giannone 10', city: 'Roma' },
    { hotelName: 'B&B Vicolo del Fico', city: 'Roma' },
    { hotelName: 'Suore di Cristo', city: 'Roma' },
    { hotelName: 'Hotel della Consulta', city: 'Roma' },
    { hotelName: 'Hotel Orazia', city: 'Roma' },
    { hotelName: 'B&B Via Bonincotri 92 - Avv. Guerra', city: 'Roma' },
    { hotelName: 'Hotel Palace', city: 'Roma' },
    { hotelName: 'Hotel Paolo II', city: 'Roma' },
    { hotelName: 'B&B Esquilino', city: 'Roma' },
    { hotelName: 'Hotel Principe Eugenio', city: 'Roma' },
    { hotelName: 'Hotel Scacciapensieri', city: 'Nettuno' },
    { hotelName: 'Il Sogno di Roma', city: 'Roma' },
    { hotelName: 'InAndOut', city: 'Roma' },
    { hotelName: 'Hotel il Monte delle Quaglie', city: 'Fermo' },
    { hotelName: 'Andrea Doria Resort', city: 'Roma' },
    { hotelName: 'Maison Colosseo', city: 'Roma' },
    { hotelName: 'Le Griffe Vatican Luxury', city: 'Roma' }
  ]
},
{
  region: 'Marche',
  references: [
    { hotelName: 'Hotel Monte delle Quaglie', city: 'Fermo' },
    { hotelName: 'Hotel Cecco', city: 'Arezzo' }
  ]
},
{
  region: 'Campania',
  references: [
    { hotelName: 'Hotel Deda & Fove', city: 'Napoli' },
    { hotelName: 'Hotel Weber Ambassador', city: 'Capri' },
    { hotelName: 'B&B San Lorenzo', city: 'Napoli' },
    { hotelName: 'Grand Hotel Villa le Zagare', city: 'Gragnano' },
    { hotelName: 'Hotel Ecumano Space', city: 'Napoli' },
    { hotelName: 'B&B Garibaldi 54', city: 'Santa Maria Capua Vetere' },
    { hotelName: 'Mariella\'s House', city: 'Santa Maria Capua Vetere' },
    { hotelName: 'B&B degli Aranci', city: 'Sorrento' },
    { hotelName: 'B&B I Venti del Golfo', city: 'Napoli' },
    { hotelName: 'B&B Via Chiaia 32', city: 'Napoli' },
    { hotelName: 'B&B Via Gaetani', city: 'Napoli' },
    { hotelName: 'Hotel Quadrifoglio', city: 'Pomigliano' },
    { hotelName: 'Rian', city: 'San Pietro Ariano Irpino' },
    { hotelName: 'Quinson Motel', city: 'Somma Vesuviana' }
  ]
},
{
  region: 'Puglia',
  references: [
    { hotelName: 'Villa Nascente', city: 'Bitetto' },
    { hotelName: 'Hotel della Murge', city: 'Corato' },
    { hotelName: 'B&B Liddo', city: 'Barletta' },
    { hotelName: 'La Casa di Frank', city: 'San Ferdinando di Puglia' },
    { hotelName: 'B&B Valentini', city: 'Turi' },
    { hotelName: 'Boutique Hotel Liddo', city: 'Barletta' }
  ]
},
{
  region: 'Calabria',
  references: [
    { hotelName: 'Ass Arpah', city: 'Reggio Calabria' },
    { hotelName: 'Umberto 1°', city: 'Serra San Bruno' },
    { hotelName: 'Albergo Villa Helios', city: 'Bianco' },
    { hotelName: 'Mongiardo Frera 12', city: 'Soverato' },
    { hotelName: 'Hotel Volè', city: 'Schiavonea Rossano' }
  ]
},
{
  region: 'Sicilia',
  references: [
    { hotelName: 'Sunset Plaza', city: 'Pachino' },
    { hotelName: 'Hotel Villa Cerniglia', city: 'Cefalù' },
    { hotelName: 'Hotel Relax', city: 'Siracusa' },
    { hotelName: 'B&B Viale San Martino 315', city: 'Messina' },
    { hotelName: 'Hotel Gelso Bianco', city: 'Misterbianco / Catania' },
    { hotelName: 'Parco degli Ulivi', city: 'Catania' }
  ]
},
{
  region: 'Sardegna',
  references: [
    { hotelName: 'Hotel Suite Charme', city: 'Santa Teresa di Gallura' },
    { hotelName: 'Guardia di Finanza - For. Estiva', city: 'Cagliari' },
    { hotelName: 'Mura Luca B&B', city: 'Sassari' },
    { hotelName: 'Hotel Sport Village', city: 'Iglesias' },
    { hotelName: 'B&B Mio&Tuyo', city: 'Santa Teresa di Gallura' },
    { hotelName: 'B&B Edifa', city: 'Sant\'Antioco' },
    { hotelName: 'Hotel Mezzaluna', city: 'Carloforte' }
  ]
},
{
  region: 'Estero',
  references: [
    { hotelName: 'Hotel Ambassador', city: 'Montecarlo' },
    { hotelName: 'Motel AIFA', city: 'Svizzera' },
    { hotelName: 'Immodec Immo AG', city: 'Tunisia' },
    { hotelName: 'New Africa', city: 'Tunisi' },
    { hotelName: 'Eis-Vennini', city: 'Worms' },
    { hotelName: 'Hotel Bella Epoque', city: 'Belgio' },
    { hotelName: 'Hotel Campofelice', city: 'Locarno' },
    { hotelName: 'Hotel La Louvre', city: 'Louviere' },
    { hotelName: 'Relais des Chartreux', city: 'Francia' },
    { hotelName: 'Hotel Kriemhilde', city: 'Worms' },
    { hotelName: 'Hotel L\'Escargot d\'Or', city: 'Saint Ghislain' },
    { hotelName: 'Hotel Campofelice', city: 'Tenero Locarno' },
    { hotelName: 'Spencer', city: 'Genova' },
    { hotelName: 'Nave da Crociera Alexander von Humboldt', city: '' },
    { hotelName: 'Relais des Chartreux', city: 'Aux en Provence' },
    { hotelName: 'Ospedale Beirut', city: 'Maltauro M. Manerba' }
  ]
}

  ];

  export default referencesByRegion