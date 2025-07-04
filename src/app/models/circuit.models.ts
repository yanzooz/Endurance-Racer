import { Country } from "./country.models";

export interface Circuit {
  id: number;
  name: string;
  location: string;
  lengthKm: number;
  lapCount: number;
  imageUrl?: string;
  latitude: number;
  longitude: number;
  country : Country
}