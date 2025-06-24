export interface Team {
  id: number;
  name: string;
  constructor: string;
  country: string;
  cars: number[]; // numéros des voitures engagées
  imageUrl?: string;
}

export const TEAMS: Team[] = [
  {
    id: 1,
    name: 'Toyota Gazoo Racing',
    constructor: 'Toyota',
    country: 'Japon',
    cars: [7, 8],
    imageUrl: '/images/imagesInterface/toyota/toyota-logo.jpg'
  },
  {
    id: 2,
    name: 'Ferrari AF Corse',
    constructor: 'Ferrari',
    country: 'Italie',
    cars: [50, 51],
    imageUrl: '/images/imagesInterface/ferrari/ferrari-logo.png'
  },
  {
    id: 3,
    name: 'Porsche Penske Motorsport',
    constructor: 'Porsche',
    country: 'Allemagne',
    cars: [5, 6],
    imageUrl: '/images/imagesInterface/porsche/porsche-logo.png'
  },
  {
    id: 4,
    name: 'Peugeot TotalEnergies',
    constructor: 'Peugeot',
    country: 'France',
    cars: [93, 94],
    imageUrl: '/images/imagesInterface/peugeot/peugeot-logo.png'
  },
  {
    id: 5,
    name: 'Cadillac Racing',
    constructor: 'Cadillac',
    country: 'États-Unis',
    cars: [2],
    imageUrl: '/images/imagesInterface/cadillac/cadillac-logo.png'
  },
  {
    id: 6,
    name: 'BMW M Team WRT',
    constructor: 'BMW',
    country: 'Allemagne',
    cars: [15, 20],
    imageUrl: '/images/imagesInterface/bmw/bmw-logo.png'
  },
  {
    id: 7,
    name: 'Alpine Endurance Team',
    constructor: 'Alpine',
    country: 'France',
    cars: [35, 36],
     imageUrl: '/images/imagesInterface/alpine/alpine-logo.png'
  },
 
];
