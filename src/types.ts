interface Name {
  common: string;
  official: string;
}

interface Flag {
  svg: string;
  alt: string;
}

interface Region {
  region: string;
  subregion: string;
}

interface Languages {
  [key: string]: string;
}

export interface ICountry {
  name: Name;
  region: Region;
  population: number;
  languages?: Languages;
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
  placeholder?: string;
}