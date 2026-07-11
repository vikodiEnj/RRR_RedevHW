import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";
import { useCallback, useState } from "react";

const items = Array.from({ length: 150 }, (_, index) => ({
  id: index + 1,
  name: `Элемент ${index + 1}`,
}));

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const counter = useCallback(() => {
    setCount((oldCount) => oldCount + 1);
  }, []);
  return (
    <div className="app">
      <SearchInput handleSearch={handleSearchChange} />
      <CounterButton count={count} increment={counter} />
      <ItemList items={items} search={search} />
    </div>
  );
}

export default App;
