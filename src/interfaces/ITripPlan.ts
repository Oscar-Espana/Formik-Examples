import { ICountry } from "./ICitiy";
import { ICity } from "./ICountry";

export interface ITripPlan {
  id: string;
  country: ICountry | null;
  city: ICity | null;
  budget: number;
  activities: any[];
}
