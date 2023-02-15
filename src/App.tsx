import Container from "@mui/material/Container";

import { useCountries } from "./hooks";
import CountryList from "./components/CountryList";
import { Outlet } from "react-router-dom";

const App = () => {
  useCountries();

  return (
    <div id="App">
      <Container>
        <CountryList />
        <Outlet />
      </Container>
    </div>
  );
};

export default App;
