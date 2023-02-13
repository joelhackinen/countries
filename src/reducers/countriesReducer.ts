import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { Country, CountryRaw } from "../hooks";
import { AppDispatch } from "../store";

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
    axios.get<CountryRaw[]>("https://restcountries.com/v3.1/all")
      .then(res => {
        const cs: Country[] = res.data.map(c => ({
          name: c.name,
          region: { region: c.region, subregion: c.subregion },
          population: c.population,
          languages: c.languages,
          flag: c.flags
        }));
        dispatch(setCountries(cs));
      })
  };
};

export default countriesSlice.reducer;