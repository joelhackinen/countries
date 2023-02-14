interface Name {
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

export interface ICountry {
  id: string;
  name: string;
  region: string;
  population: number;
  languages?: string[];
  flag: Flag;
}

export interface ICountryRaw {
  name: Name;
  region: string;
  subregion: string;
  population: number;
  languages?: Languages;
  flags: Flag
}

export interface fieldProps {
  type: "number" | "text";
  label?: string;
}