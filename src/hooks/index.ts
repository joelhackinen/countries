import { ChangeEvent, useEffect, useState } from "react";
import { initializeCountries } from "../reducers/countriesReducer";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { fieldProps } from "../types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCountries = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeCountries());
  }, []);
};

export const useField = ({ type, label = "" }: fieldProps) => {
  const [value, setValue] = useState<string>("");

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    type,
    label,
    value,
    onChange,
  };
};
