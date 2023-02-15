import Container from "@mui/material/Container";

import { useCountries } from "./hooks";
import { Outlet } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  useCountries();

  return (
    <Container id="app">
      <Main />
      <Outlet />
    </Container>
  );
};

export default App;
