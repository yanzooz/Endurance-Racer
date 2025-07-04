import { Driver } from "./driver.models";
import { Team } from "./team.models";


export interface Car {
  id: number;
  name: string;
  constructor: string;
  category: string;
  engine: string;
  power: string;
  weight?: string;
  imageUrl: string;
  gallery: string[];
  primaryColor: string;
  secondaryColor: string;
  team: Team;
  drivers: Driver[];
}