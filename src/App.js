import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
    console.log("1");
  }

  componentDidMount() {
    console.log("2");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("3");
    return (
      <div className="App">
        <h1>
          {this.state.monsters.map((monster) => {
            return <div key={monster.id}>{monster.name}</div>;
          })}
        </h1>
      </div>
    );
  }
}

export default App;
