import { createSlice } from "@reduxjs/toolkit";
import { ICountry, ICountryRaw } from "../types";
import { AppDispatch } from "../store";
import { getAll } from "../services/countriesService";

const initialState: ICountry[] = [];

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export const initializeCountries = () => {
  return async (dispatch: AppDispatch) => {
    let countriesData: ICountryRaw[];
    try {
      countriesData = await getAll();
    } catch (e) {
      return;
    }
    dispatch(setCountries(countriesData
      .map(c => ({
        name: c.name,
        region: { region: c.region, subregion: c.subregion },
        population: c.population,
        languages: c.languages,
        flag: c.flags
      }))
    ));
  };
};

export default countriesSlice.reducer;