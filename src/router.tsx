import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Country from "./components/Country";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:nameParam",
        element: <Country />,
      },
    ],
  },
]);

export default router;