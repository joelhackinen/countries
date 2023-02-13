import { useState } from "react";
import { useCountries, useAppSelector } from "./hooks";

const App = () => {
  useCountries();

  const [filter, setFilter] = useState<string>("");
  const countries = useAppSelector(state => state.countries);

  const countriesToShow = countries.filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="App">
      <input
        type="text"
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
        placeholder="search"
      />
      <h2>All countries</h2>
      <ul>
        {countriesToShow.map(({ name, languages, flag }, i) =>
          <div key={i}>
            <li>
              {name.common} ({name.official})
              {languages && 
                <ul>
                  {Object.values(languages).map(l => <li key={l}>{l}</li>)}
                </ul>
              }
            </li>
            <img src={flag.svg} height='100' alt={flag.alt}/>
          </div>
        )}
      </ul>
    </div>
  );
};

export default App;
