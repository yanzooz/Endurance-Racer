export interface Driver {
  id: number;
  name: string;
  nationality: string;
  teamId: number;   // référence à TEAMS[id]
  carId: number;    // référence à CARS[id]
  imageUrl?: string;
}

export const DRIVERS: Driver[] = [
  // Toyota GR010 Hybrid #8 (carId: 6, teamId: 1)
  { id: 1,  name: 'Sébastien Buemi',        nationality: 'Suisse',           teamId: 1, carId: 6, imageUrl:'images/imagesInterface/toyota/pilote1.png' },
  { id: 2,  name: 'Brendon Hartley',         nationality: 'Nouvelle-Zélande', teamId: 1, carId: 6, imageUrl:'images/imagesInterface/toyota/pilote2.png' },
  { id: 3,  name: 'Ryō Hirakawa',            nationality: 'Japon',            teamId: 1, carId: 6, imageUrl:'images/imagesInterface/toyota/pilote3.png' },
  
  // Toyota GR010 Hybrid #7 (carId: 5, teamId: 1)
  { id: 4,  name: 'Mike Conway',            nationality: 'Royaume-Uni',      teamId: 1, carId: 5, imageUrl:'images/imagesInterface/toyota/pilote4.png'   },
  { id: 5,  name: 'Kamui Kobayashi',        nationality: 'Japon',            teamId: 1, carId: 5, imageUrl:'images/imagesInterface/toyota/pilote5.png' },
  { id: 6,  name: 'Nyck de Vries',          nationality: 'Pays-Bas',         teamId: 1, carId: 5, imageUrl:'images/imagesInterface/toyota/pilote6.png' },

  // Porsche 963 #5 (carId: 3, teamId: 3)
  { id: 7,  name: 'Michael Christensen',    nationality: 'Danemark',         teamId: 3, carId: 3, imageUrl:'images/imagesInterface/porsche/pilote7.png'  },
  { id: 8,  name: 'Julien Andlauer',        nationality: 'France',           teamId: 3, carId: 3, imageUrl:'images/imagesInterface/porsche/pilote8.png' },
  { id: 9,  name: 'Mathieu Jaminet',        nationality: 'France',           teamId: 3, carId: 3, imageUrl:'images/imagesInterface/porsche/pilote9.png' },
  // Porsche 963 #6 (carId: 4, teamId: 3)
  { id: 10, name: 'Kévin Estre',            nationality: 'France',           teamId: 3, carId: 4, imageUrl:'images/imagesInterface/porsche/pilote10.png'  },
  { id: 11, name: 'Laurens Vanthoor',       nationality: 'Belgique',         teamId: 3, carId: 4, imageUrl:'images/imagesInterface/porsche/pilote11.png' },
  { id: 12, name: 'Matt Campbell',          nationality: 'Australie',        teamId: 3, carId: 4, imageUrl:'images/imagesInterface/porsche/pilote12.png' },

  // Ferrari 499P #50 (carId: 13, teamId: 2)
  { id: 13, name: 'Antonio Fuoco',          nationality: 'Italie',           teamId: 2, carId: 13, imageUrl:'images/imagesInterface/ferrari/pilote13.png'  }, 
  { id: 14, name: 'Nicklas Nielsen',        nationality: 'Danemark',         teamId: 2, carId: 13, imageUrl:'images/imagesInterface/ferrari/pilote14.png' },
  { id: 15, name: 'Miguel Molina',          nationality: 'Espagne',          teamId: 2, carId: 13, imageUrl:'images/imagesInterface/ferrari/pilote15.png' },
  // Ferrari 499P #51 (carId: 14, teamId: 2)
  { id: 16, name: 'James Calado',           nationality: 'Royaume-Uni',      teamId: 2, carId: 14, imageUrl:'images/imagesInterface/ferrari/pilote16.png' },
  { id: 17, name: 'Alessandro Pier Guidi', nationality: 'Italie',           teamId: 2, carId: 14, imageUrl:'images/imagesInterface/ferrari/pilote17.png' },
  { id: 18, name: 'Antonio Giovinazzi',     nationality: 'Italie',           teamId: 2, carId: 14, imageUrl:'images/imagesInterface/ferrari/pilote18.png' },

  // Cadillac V-Series.R #12 (carId: 7, teamId: 5)
  { id: 19, name: 'Norman Nato',            nationality: 'France',           teamId: 5, carId: 7, imageUrl:'images/imagesInterface/cadillac/pilote19.png' },
  { id: 20, name: 'Will Stevens',           nationality: 'Royaume-Uni',      teamId: 5, carId: 7, imageUrl:'images/imagesInterface/cadillac/pilote20.png'  },
  { id: 21, name: 'Alex Lynn',              nationality: 'Royaume-Uni',      teamId: 5, carId: 7, imageUrl:'images/imagesInterface/cadillac/pilote21.png'  },
  // Cadillac V-Series.R #38 (carId: 8, teamId: 5)
  { id: 22, name: 'Earl Bamber',            nationality: 'Nouvelle-Zélande', teamId: 5, carId: 8, imageUrl:'images/imagesInterface/cadillac/pilote22.png'  },
  { id: 23, name: 'Sébastien Bourdais',    nationality: 'France',           teamId: 5, carId: 8, imageUrl:'images/imagesInterface/cadillac/pilote23.png'  },
  { id: 24, name: 'Jenson Button',          nationality: 'Royaume-Uni',      teamId: 5, carId: 8, imageUrl:'images/imagesInterface/cadillac/pilote24.png'  },

  // BMW M Hybrid V8 #15 (carId: 9, teamId: 6)
  { id: 25, name: 'Kevin Magnussen',        nationality: 'Danemark',         teamId: 6, carId: 9, imageUrl: 'images/imagesInterface/bmw/pilote25.png' },
  { id: 26, name: 'Raffaele Marciello',    nationality: 'Suisse',           teamId: 6, carId: 9 , imageUrl: 'images/imagesInterface/bmw/pilote26.png'},
  { id: 27, name: 'Dries Vanthoor',         nationality: 'Belgique',         teamId: 6, carId: 9, imageUrl: 'images/imagesInterface/bmw/pilote27.png' },
  // BMW M Hybrid V8 #20 (carId: 10, teamId: 6)
  { id: 28, name: 'Sheldon van der Linde', nationality: 'Afrique du Sud',    teamId: 6, carId: 10 ,imageUrl: 'images/imagesInterface/bmw/pilote25.png'  },
  { id: 29, name: 'Robin Frijns',           nationality: 'Pays-Bas',         teamId: 6, carId: 10, imageUrl: 'images/imagesInterface/bmw/pilote26.png'  },
  { id: 30, name: 'René Rast',             nationality: 'Allemagne',        teamId: 6, carId: 10, imageUrl: 'images/imagesInterface/bmw/pilote27.png'  },

  // Alpine A424 #35 (carId: 11, teamId: 7)
  { id: 31, name: 'Paul-Loup Chatin',       nationality: 'France',           teamId: 7, carId: 11, imageUrl: 'images/imagesInterface/alpine/pilote31.png'  },
  { id: 32, name: 'Ferdinand Habsburg',    nationality: 'Autriche',         teamId: 7, carId: 11, imageUrl: 'images/imagesInterface/alpine/pilote32.png'  },
  { id: 33, name: 'Jules Gounon',           nationality: 'France',           teamId: 7, carId: 11, imageUrl: 'images/imagesInterface/alpine/pilote33.png'  },
  // Alpine A424 #36 (carId: 12, teamId: 7)
  { id: 34, name: 'Charles Milesi',         nationality: 'France',           teamId: 7, carId: 12 , imageUrl: 'images/imagesInterface/alpine/pilote34.png'  },
  { id: 35, name: 'Frédéric Makowiecki',    nationality: 'France',           teamId: 7, carId: 12, imageUrl: 'images/imagesInterface/alpine/pilote35.png'  },
  { id: 36, name: 'Mick Schumacher',        nationality: 'Allemagne',        teamId: 7, carId: 12, imageUrl: 'images/imagesInterface/alpine/pilote36.png'  },

  // Peugeot 9X8 #94 (carId: 17, teamId: 4)
  { id: 37, name: 'Stoffel Vandoorne',      nationality: 'Belgique',         teamId: 4, carId: 17, imageUrl:'images/imagesInterface/peugeot/pilote37.png' },
  { id: 38, name: 'Malthe Jakobsen',        nationality: 'Danemark',         teamId: 4, carId: 17, imageUrl:'images/imagesInterface/peugeot/pilote38.png' },
  { id: 39, name: 'Loïc Duval',             nationality: 'France',           teamId: 4, carId: 17, imageUrl:'images/imagesInterface/peugeot/pilote39.png' },
  // Peugeot 9X8 #93 (carId: 16, teamId: 4)
  { id: 40, name: 'Jean-Éric Vergne',       nationality: 'France',           teamId: 4, carId: 16, imageUrl:'images/imagesInterface/peugeot/pilote40.png' },
  { id: 41, name: 'Mikkel Jensen',         nationality: 'Danemark',         teamId: 4, carId: 16, imageUrl:'images/imagesInterface/peugeot/pilote41.png' },

  // Aston Martin Valkyrie #007 (carId: 1, teamId: 11)
  { id: 42, name: 'Harry Tincknell',        nationality: 'Royaume-Uni',      teamId: 11, carId: 1, imageUrl:'images/imagesInterface/astonMartin/pilote42.png' },
  { id: 43, name: 'Tom Gamble',             nationality: 'Royaume-Uni',      teamId: 11, carId: 1, imageUrl:'images/imagesInterface/astonMartin/pilote43.png' },
  { id: 44, name: 'Ross Gunn',              nationality: 'Royaume-Uni',      teamId: 11, carId: 1, imageUrl:'images/imagesInterface/astonMartin/pilote44.png' },
  // Aston Martin Valkyrie #009 (carId: 2, teamId: 11)
  { id: 45, name: 'Alex Riberas',           nationality: 'Espagne',          teamId: 11, carId: 2,imageUrl:'images/imagesInterface/astonMartin/pilote45.png'  },
  { id: 46, name: 'Marco Sørensen',         nationality: 'Danemark',         teamId: 11, carId: 2,imageUrl:'images/imagesInterface/astonMartin/pilote46.png'  },
  { id: 47, name: 'Roman De Angelis',       nationality: 'Canada',           teamId: 11, carId: 2, imageUrl:'images/imagesInterface/astonMartin/pilote47.png' },
 
];
