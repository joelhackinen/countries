import { Col, ListGroup, Row } from "react-bootstrap";
import { ICountry } from "../types";

const Country = ({ country }: { country: ICountry}) => {
  const { name, region, languages, flag, population } = country;

  return (
    <tr>
      <td><img src={flag.svg} height='100' alt={flag.alt}/></td>
      <td>{name.common}</td>
      <td>{region.region}</td>
      <td>{population}</td>
      <td>
        {languages && "languages"}
        {languages && 
          <ul>
            {Object.values(languages).map(l => <li key={l}>{l}</li>)}
          </ul>
        }
      </td>
    </tr>
  );
};

export default Country;