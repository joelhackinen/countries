import {
  LoaderFunctionArgs,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import App from "./App";
import Country from "./components/Country";
import Error from "./components/Error";


const countryLoader = ({ params }: LoaderFunctionArgs) => {
  return params.nameParam ? params.nameParam : redirect("/");  
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/:nameParam",
        element: <Country />,
        loader: countryLoader,
      }
    ],
  },
]);

export default router;