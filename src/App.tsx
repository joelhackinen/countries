import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useCountries } from "./hooks";
import CountryList from "./components/CountryList";

const App = () => {
  useCountries();

  return (
    <Container fluid>
      <CountryList />
    </Container>
  );
};

export default App;
