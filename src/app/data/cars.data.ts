export interface EnduranceCar {
  id: number;
  name: string;
  constructor: string;
  category: string;
  teamId: number;
  specs: {
    engine: string;
    power: string;
    weight?: string;
  };
  imageUrl: string;
  gallery: string[];
  colors: {
    primaryColor: string;
    secondaryColor: string;
  }
}

export const CARS: EnduranceCar[] = [
  {
    id: 1,
    name: 'Aston Martin Valkyrie AMR‑LMH #007',
    constructor: 'Aston Martin',
    category: 'Hypercar',
    teamId: 11,                // Aston Martin THOR Team
    specs: { engine: '6.5 L V12 NA', power: '675 ch', weight: '1042 kg' },
    imageUrl: 'images/imagesInterface/astonMartin/astonmartin7.png',
    gallery: [
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_10.jpg',
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_11.jpg',
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_14.jpg',
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_13.jpg'
    ],
    colors: { primaryColor: '#005F4C', secondaryColor: '#bdc318' }
  },
  {
    id: 2,
    name: 'Aston Martin Valkyrie AMR‑LMH #009',
    constructor: 'Aston Martin',
    category: 'Hypercar',
    teamId: 11,                // Aston Martin THOR Team
    specs: { engine: '6.5 L V12 NA', power: '675 ch', weight: '1042 kg' },
    imageUrl: 'images/imagesInterface/astonMartin/astonmartin7.png',
    gallery: [
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_01reSize.jpg',
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_04.jpg',
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_03.jpg',
      'images/imagesInterface/astonMartin/Valkyrie-AMR-Pro_05.jpg'
    ],
    colors: { primaryColor: '#005F4C', secondaryColor: '#bdc318' }
  },
  {
    id: 3,
    name: 'Porsche 963 #5',
    constructor: 'Porsche',
    category: 'Hypercar',
    teamId: 3,                 // Porsche Penske Motorsport
    specs: { engine: '4.6 L V8 Turbo Hybrid', power: '681 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/porsche/porsche5.png',
    gallery: [
      'images/imagesInterface/porsche/Porsche_Penske-963-07.jpg',
      'images/imagesInterface/porsche/Porsche_Penske-963-08.jpg',
      'images/imagesInterface/porsche/Porsche_Penske-963-05.jpg',
      'images/imagesInterface/porsche/Porsche_Penske-963-03.jpg'
      
    ],
    colors: { primaryColor: '#000000', secondaryColor: '#FF0000' }
  },
  {
    id: 4,
    name: 'Porsche 963 #6',
    constructor: 'Porsche',
    category: 'Hypercar',
    teamId: 3,                 // Porsche Penske Motorsport
    specs: { engine: '4.6 L V8 Turbo Hybrid', power: '681 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/porsche/porsche6.png',
    gallery: [
      'images/imagesInterface/porsche/Porsche_Penske-963-09.jpg',
      'images/imagesInterface/porsche/Porsche_Penske-963-01.jpg',
      'images/imagesInterface/porsche/Porsche_Penske-963-11.jpg',
      'images/imagesInterface/porsche/Porsche_Penske-963-10.jpg'
    ],
    colors: { primaryColor: '#000000', secondaryColor: '#FF0000' }
  },
  {
    id: 5,
    name: 'Toyota GR010 Hybrid #7',
    constructor: 'Toyota',
    category: 'Hypercar',
    teamId: 1,                 // Toyota Gazoo Racing
    specs: { engine: '3.5 L V6 Hybrid', power: '700 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/toyota/toyota7.png',
    gallery: [
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-10.jpg',
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-16.jpg',
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-08.jpg',
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-15.jpg'
    ],
    colors: { primaryColor: '#EB0A1E', secondaryColor: '#FFFFFF' }
  },
  {
    id: 6,
    name: 'Toyota GR010 Hybrid #8',
    constructor: 'Toyota',
    category: 'Hypercar',
    teamId: 1,                 // Toyota Gazoo Racing
    specs: { engine: '3.5 L V6 Hybrid', power: '700 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/toyota/toyota8.png',
    gallery: [
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-05.jpg',
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-08.jpg',
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-09.jpg',
      'images/imagesInterface/toyota/Toyota-Gr010-Hybrid-11.jpg'
    ],
    colors: { primaryColor: '#EB0A1E', secondaryColor: '#FFFFFF' }
  },
  {
    id: 7,
    name: 'Cadillac V-Series.R #12',
    constructor: 'Cadillac',
    category: 'Hypercar',
    teamId: 5,                // Hertz Team JOTA
    specs: { engine: '5.5 L V8 Hybrid', power: '670 ch', weight: '1030 kg' },
    imageUrl: 'images/imagesInterface/cadillac/cadillac12.png',
    gallery: [
      'images/imagesInterface/cadillac/CadiVLMDh-09.jpg',
      'images/imagesInterface/cadillac/CadiVLMDh-11.jpg',
      'images/imagesInterface/cadillac/CadiVLMDh-10.jpg',
      'images/imagesInterface/cadillac/CadiVLMDh-02.jpg',
    ],
    colors: { primaryColor: '#000000', secondaryColor: '#FFC600' }
  },
  {
    id: 8,
    name: 'Cadillac V-Series.R #38',
    constructor: 'Cadillac',
    category: 'Hypercar',
    teamId: 5,                // Hertz Team JOTA
    specs: { engine: '5.5 L V8 Hybrid', power: '670 ch', weight: '1030 kg' },
    imageUrl: 'images/imagesInterface/cadillac/cadillac38.png',
    gallery: [
      'images/imagesInterface/cadillac/CadiVLMDh-09.jpg',
      'images/imagesInterface/cadillac/CadiVLMDh-11.jpg',
      'images/imagesInterface/cadillac/CadiVLMDh-10.jpg',
      'images/imagesInterface/cadillac/CadiVLMDh-02.jpg',
    ],
    colors: { primaryColor: '#000000', secondaryColor: '#FFC600' }
  },
  {
    id: 9,
    name: 'BMW M Hybrid V8 #15',
    constructor: 'BMW',
    category: 'Hypercar',
    teamId: 6,                 // BMW M Team WRT
    specs: { engine: '4.0 L V8 Hybrid', power: '680 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/bmw/bmw15.png',
    gallery: [
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-03.jpg',
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-01.jpg',
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-04.jpg',
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-08.jpg'
      
    ],
    colors: { primaryColor: '#0d1456', secondaryColor: '#E2001A' }
  },
  {
    id: 10,
    name: 'BMW M Hybrid V8 #20',
    constructor: 'BMW',
    category: 'Hypercar',
    teamId: 6,                // BMW M Team WRT
    specs: { engine: '4.0 L V8 Hybrid', power: '680 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/bmw/bmw20.png',
    gallery: [
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-05.jpg',
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-02.jpg',
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-07.jpg',
      'images/imagesInterface/bmw/bmw-m-hybrid-v8-06.jpg',
    ],
    colors: { primaryColor: '#0d1456', secondaryColor: '#E2001A' }
  },
  {
    id: 11,
    name: 'Alpine A424 #35',
    constructor: 'Alpine',
    category: 'Hypercar',
    teamId: 7,                // Alpine Endurance Team
    specs: { engine: '3.4 L V6 Hybrid', power: '675 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/alpine/alpine35.png',
    gallery: [
      'images/imagesInterface/alpine/alpine-A424-03.jpg',
      'images/imagesInterface/alpine/alpine-A424-07.jpg',
      'images/imagesInterface/alpine/alpine-A424-02.jpg',
      'images/imagesInterface/alpine/alpine-A424-06.jpg',
    ],
    colors: { primaryColor: '#141f4d', secondaryColor: '#FFFFFF' }
  },
  {
    id: 12,
    name: 'Alpine A424 #36',
    constructor: 'Alpine',
    category: 'Hypercar',
    teamId: 7,                // Alpine Endurance Team
    specs: { engine: '3.4 L V6 Hybrid', power: '675 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/alpine/alpine36.png',
    gallery: [
      'images/imagesInterface/alpine/alpine-A424-05.jpg',
      'images/imagesInterface/alpine/alpine-A424-01.jpg',
      'images/imagesInterface/alpine/alpine-A424-04.jpg',
      'images/imagesInterface/alpine/alpine-A424-06.jpg',
    ],
    colors: { primaryColor: '#141f4d', secondaryColor: '#FFFFFF' }
  },
  {
    id: 13,
    name: 'Ferrari 499P #50',
    constructor: 'Ferrari',
    category: 'Hypercar',
    teamId: 2,                // Ferrari AF Corse
    specs: { engine: '3.0 L V6 Hybrid', power: '680 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/ferrari/ferrari50.png',
    gallery: [
      'images/imagesInterface/ferrari/ferrari-499p-07.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-05.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-03.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-04.jpg',
    ],
    colors: { primaryColor: '#DC0000', secondaryColor: '#e7c434' }
  },
    {
    id: 14,
    name: 'Ferrari 499P #51',
    constructor: 'Ferrari',
    category: 'Hypercar',
    teamId: 2,                // Ferrari AF Corse
    specs: { engine: '3.0 L V6 Hybrid', power: '680 ch', weight: '1040 kg' },
    imageUrl: 'images/imagesInterface/ferrari/ferrari51.png',
    gallery: [
      'images/imagesInterface/ferrari/ferrari-499p-02.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-05.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-03.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-06.jpg',
    ],
    colors: { primaryColor: '#DC0000', secondaryColor: '#e7c434' }
  },
  {
    id: 15,
    name: 'Ferrari 499P #83',
    constructor: 'Ferrari',
    category: 'Hypercar',
    teamId: 2,                      // renvoie à Ferrari AF Corse (id 2)
    specs: {
      engine: '3.0 L V6 Turbo Hybrid',
      power: '680 ch',
      weight: '1040 kg'
    },
    imageUrl: 'images/imagesInterface/ferrari/ferrari83.png',
    gallery: [
      'images/imagesInterface/ferrari/ferrari-499p-10.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-09.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-08.jpg',
      'images/imagesInterface/ferrari/ferrari-499p-11.jpg',
    ],
    colors: {
      primaryColor: '#FFD700',      // jaune vif
      secondaryColor: '#800000'     // bordeaux (pour le contraste)
    }
  },
  {
    id: 16,
    name: 'Peugeot 9X8 #93',
    constructor: 'Peugeot',
    category: 'Hypercar',
    teamId: 4,                         // Peugeot TotalEnergies
    specs: {
      engine: '2.6 L V6 Turbo Hybrid',
      power: '680 ch',
      weight: '1040 kg'
    },
    imageUrl: 'images/imagesInterface/peugeot/peugeot93.png',
    gallery: [
      'images/imagesInterface/peugeot/peugeot-9x8-06.jpg',
      'images/imagesInterface/peugeot/peugeot-9x8-04.jpg',
      'images/imagesInterface/peugeot/peugeot-9x8-03.jpg',
      'images/imagesInterface/peugeot/peugeot-9x8-05.jpg',
    ],
    colors: {
      primaryColor: '#9ab409',         // rouge Peugeot
      secondaryColor: '#3a4448'        // blanc contraste
    }
  },
  {
    id: 17,
    name: 'Peugeot 9X8 #94',
    constructor: 'Peugeot',
    category: 'Hypercar',
    teamId: 4,                         // Peugeot TotalEnergies
    specs: {
      engine: '2.6 L V6 Turbo Hybrid',
      power: '680 ch',
      weight: '1040 kg'
    },
    imageUrl: 'images/imagesInterface/peugeot/peugeot94.png',
    gallery: [
      'images/imagesInterface/peugeot/peugeot-9x8-01.jpg',
      'images/imagesInterface/peugeot/peugeot-9x8-07.jpg',
      'images/imagesInterface/peugeot/peugeot-9x8-04.jpg',
      'images/imagesInterface/peugeot/peugeot-9x8-03.jpg',
    ],
    colors: {
      primaryColor: '#9ab409',
      secondaryColor: '#3a4448'
    }
  }
];

