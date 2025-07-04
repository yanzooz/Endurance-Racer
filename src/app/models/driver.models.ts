import { Car } from "./car.models";
import { Country } from "./country.models";
import { Team } from "./team.models";

export interface Driver {
  id: number;
  name: string;
  nationality: string;
  imageUrl?: string;
  team: Team;
  car: Car;
  country: Country
}