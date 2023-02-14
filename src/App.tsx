import { useCountries } from "./hooks";
import CountryList from "./components/CountryList";

const App = () => {
  useCountries();

  return (
    <div id="App">
      <CountryList />
    </div>
  );
};

export default App;
