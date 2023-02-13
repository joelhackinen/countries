import { useEffect } from "react";
import { initializeCountries } from "../reducers/countriesReducer";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

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

export const useCountries = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("#fetch");
    dispatch(initializeCountries());
  }, []);
};