import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import Main from "./components/Main";

const App = () => {
  return (
    <Container id="app">
      <Main />
      <Outlet />
    </Container>
  );
};

export default App;
