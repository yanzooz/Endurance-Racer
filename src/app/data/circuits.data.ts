export interface Circuit {
  id: number;
  name: string;
  location: string;
  country: string;
  lengthKm: number;
  imageUrl: string;
  date: string;
  latitude: number;
  longitude: number;
}

export const CIRCUITS: Circuit[] = [
  {
    id: 1,
    name: 'Lusail International Circuit',
    location: 'Lusail',
    country: 'Qatar',
    lengthKm: 5.419,
    imageUrl: 'assets/images/circuits/lusail.jpg',
    date: '1-2 mars 2025',
    latitude: 25.49,
    longitude: 51.4542
  },
  {
    id: 2,
    name: 'Imola – Autodromo Enzo e Dino Ferrari',
    location: 'Imola',
    country: 'Italie',
    lengthKm: 4.909,
    imageUrl: 'assets/images/circuits/imola.jpg',
    date: '19-20 avril 2025',
    latitude: 44.3439,
    longitude: 11.7167
  },
  {
    id: 3,
    name: 'Spa-Francorchamps',
    location: 'Stavelot',
    country: 'Belgique',
    lengthKm: 7.004,
    imageUrl: 'assets/images/circuits/spa.jpg',
    date: '9-10 mai 2025',
    latitude: 50.4372,
    longitude: 5.9714
  },
  {
    id: 4,
    name: '24 Heures du Mans (Circuit de la Sarthe)',
    location: 'Le Mans',
    country: 'France',
    lengthKm: 13.626,
    imageUrl: 'assets/images/circuits/lemans.jpg',
    date: '14-15 juin 2025',
    latitude: 47.9575,
    longitude: 0.2079
  },
  {
    id: 5,
    name: '6 Heures de São Paulo (Interlagos)',
    location: 'São Paulo',
    country: 'Brésil',
    lengthKm: 4.309,
    imageUrl: 'assets/images/circuits/interlagos.jpg',
    date: '12-13 juillet 2025',
    latitude: -23.701,
    longitude: -46.6981
  },
  {
    id: 6,
    name: '6 Heures du Circuit des Amériques',
    location: 'Austin',
    country: 'États-Unis',
    lengthKm: 5.513,
    imageUrl: 'assets/images/circuits/cota.jpg',
    date: '6-7 septembre 2025',
    latitude: 30.1328,
    longitude: -97.6411
  },
  {
    id: 7,
    name: '6 Heures de Fuji',
    location: 'Oyama',
    country: 'Japon',
    lengthKm: 4.563,
    imageUrl: 'assets/images/circuits/fuji.jpg',
    date: '27-28 septembre 2025',
    latitude: 35.3717,
    longitude: 138.9272
  },
  {
    id: 8,
    name: '8 Heures de Bahreïn',
    location: 'Sakhir',
    country: 'Bahreïn',
    lengthKm: 5.412,
    imageUrl: 'assets/images/circuits/bahrain.jpg',
    date: '7-8 novembre 2025',
    latitude: 26.0325,
    longitude: 50.5106
  }
];
