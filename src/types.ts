export interface Name {
  common: string;
  official: string;
}

export interface Flag {
  svg: string;
  alt: string;
}

export interface Languages {
  [key: string]: string;
}

export interface Region {
  region: string;
  subregion: string;
}

interface Coordinates {
  lat: number;
  lng: number;
}

export interface ICountry {
  name: Name;
  region: Region;
  population: number;
  languages?: string[];
  flag: Flag;
  coordinates: Coordinates;
}

export interface ICountryRaw {
  name: Name;
  region: string;
  subregion: string;
  population: number;
  languages?: Languages;
  flags: Flag;
  latlng: number[];
}

export interface fieldProps {
  type: "number" | "text";
  label?: string;
}