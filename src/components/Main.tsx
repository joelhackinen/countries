import { useField } from "../hooks";
import CountryList from "./CountryList";
import MenuBar from "./MenuBar";

const Main = () => {
  const { value: filter, onChange} = useField({ type: "text" });
  return (
    <div id="main">
      <MenuBar handleSearch={onChange} />
      <CountryList filter={filter} />
    </div>
  );
};

export default Main;