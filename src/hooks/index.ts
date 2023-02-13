import { useEffect } from "react";
import { initializeCountries } from "../reducers/countriesReducer";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../store'


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useCountries = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("#fetch");
    dispatch(initializeCountries());
  }, []);
};