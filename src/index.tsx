import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Country from './components/Country'
import store from './store';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":nameParam",
        element: <Country />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);