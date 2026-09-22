export interface Car {
  id: string;
  name: string;
  categoryLetter: string;
  categoryType: string;
  models: string;
  modelsList: string[];
  tagline?: string;
  highlights?: string[];
  price: number;
  image: string;
  features: string[];
}

export interface VehicleAngleImage {
  id: string;
  label: string;
  angleName: 'front34' | 'front' | 'rear' | 'interior' | 'side' | 'dash' | 'seats';
  url: string;
}

export interface VehicleDetail {
  id: string;
  name: string;
  tagline: string;
  image: string;
  gallery?: VehicleAngleImage[];
  badge: string;
  engine: string;
  transmission: string;
  seats: number;
  doors: number;
  luggage: string;
  airConditioning: string;
  fuelEconomy: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  idealFor: string;
}

export interface CategoryDetail {
  id: string;
  name: string;
  categoryLetter: string;
  categoryType: string;
  tagline: string;
  description: string;
  pricePerDay: number;
  modelsList: string[];
  coverImage: string;
  features: string[];
  vehicles: VehicleDetail[];
}
