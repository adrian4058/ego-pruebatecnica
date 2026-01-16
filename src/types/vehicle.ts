export interface ModelFeature {
  name: string;
  description: string;
  image: string;
}

export interface ModelHighlight {
  title: string;
  content: string;
  image: string;
}

export interface Vehicle {
  id: number;
  name: string;
  segment: string;
  year: number;
  price: number;
  thumbnail: string;
  photo: string;
}

export interface VehicleDetail extends Vehicle {
  title: string;
  description: string;
  model_features: ModelFeature[];
  model_highlights: ModelHighlight[];
}

export type FilterCategory = "Todos" | "Sedan" | "Hatchback" | "Pickups y Comerciales" | "SUVs";
export type SortOption =
  | "Nada"
  | "De menor a mayor precio"
  | "De mayor a menor precio"
  | "Más nuevos primero"
  | "Más viejos primero";
