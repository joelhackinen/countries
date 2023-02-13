import { Table, Container } from "react-bootstrap";
import { useAppSelector, useField } from "../hooks";
import Country from "./Country";

const CountryList = () => {
  const filter = useField({ type: "text", placeholder: "search" });
  const countries = useAppSelector(state => state.countries);

  const countriesToShow = countries.slice(0, 20).filter(c => c.name.common.toLowerCase().includes(filter.value.toLowerCase()));

  return (
    <div>
      <input { ...filter } />
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>Country</th>
            <th>Name</th>
            <th>Region</th>
            <th>Population</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {countriesToShow.map((c, i) => <Country key={i} country={c}/>)}
        </tbody>
      </Table>
    </div>
  );
};

export default CountryList;