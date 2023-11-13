import { LoaderFunction, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Country from "./components/Country";
import Error from "./components/Error";
import store from "./store";
import { initializeCountries } from "./reducers/countriesReducer";

const appLoader: LoaderFunction = async () => {
  await store.dispatch(initializeCountries());
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: appLoader,
    children: [
      {
        path: "/:nameParam",
        element: <Country />,
      },
    ],
  },
]);

export default router;
