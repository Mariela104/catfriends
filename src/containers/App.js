import CardList from '../components/CardList';
import ErrorBoundry from '../components/ErrorBoundry';
import React from "react";
import SearchBox from "../components//SearchBox";
import Scroll from "../components//Scroll";
import "./App.css"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({cats: users}));
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }

  render() {
    const {searchField} = this.state;
    
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return(
      <div className='tc'>
        <h1>Cat Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <br/>
        <Scroll>
          <ErrorBoundry>
            <CardList cats={filteredCats}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
