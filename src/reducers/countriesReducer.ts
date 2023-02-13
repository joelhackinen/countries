import { createSlice } from "@reduxjs/toolkit";
import { Country, CountryRaw } from "../types";
import { AppDispatch } from "../store";
import { getAll } from "../services/countryService";

const initialState: Country[] = [];

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
    let countriesData: CountryRaw[];
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