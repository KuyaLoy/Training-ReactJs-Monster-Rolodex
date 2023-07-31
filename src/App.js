import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.components";

const App = () => {
  const [searchFiled, setSearchFiled] = useState("Monster Rolodex");
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filterMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rendered");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchFiled]);

  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setSearchFiled(searchFiledString);
  };

  const onTypeChange = (event) => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setTitle(searchFiledString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
        className="search-box"
      />
      <br />
      <SearchBox
        onChangeHandler={onTypeChange}
        placeholder="set title"
        className="title-search-box"
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

export default App;
