import axios from "axios";
import { CountryRaw } from "../types";

export const getAll = async () => {
  const { data } = await axios.get<CountryRaw[]>("https://restcountries.com/v3.1/all");
  return data;
}