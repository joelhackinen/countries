import { createSlice } from "@reduxjs/toolkit";
import { ICountry, ICountryRaw } from "../types";
import { AppDispatch } from "../store";
import { getAll } from "../services/countriesService";
import { v4 as uuidv4 } from "uuid";

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
        id: uuidv4(),
        name: c.name.common,
        region: c.region,
        population: c.population,
        languages: c.languages && Object.values(c.languages),
        flag: c.flags
      }))
    ));
  };
};

export default countriesSlice.reducer;