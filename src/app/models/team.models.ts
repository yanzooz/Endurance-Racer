import { Country } from "./country.models";

export interface Team {
  id: number;
  name: string;
  constructor: string;
  imageUrl?: string;
  country: Country
}
