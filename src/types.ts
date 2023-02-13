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

export interface Country {
  name: Name;
  region: Region;
  population: number;
  languages?: Languages;
  flag: Flag;
}

export interface CountryRaw {
  name: Name;
  region: string;
  subregion: string;
  population: number;
  languages?: Languages;
  flags: Flag
}