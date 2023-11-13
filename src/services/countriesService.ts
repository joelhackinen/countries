import axios from "axios";
import { ICountryRaw } from "../types";

export const getAll = async () => {
  const { data } = await axios.get<ICountryRaw[]>(
    "https://restcountries.com/v3.1/all",
  );
  return data;
};
