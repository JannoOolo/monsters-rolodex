import { Component } from "react/cjs/react.production.min";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Searchbox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /*
  without the arrow fuction we have to bind it by ourshelf in constructor
  in js context is not provided by default
  like this.handleChange = this.handleChange.bind(this);
  arrow functions pass the context from which it was called
  keyword "lexical scoping"
  */
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    // same as const monsters = this.state.monsters etc
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Searchbox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
