import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

    // this.handleChange = this.handleChange.bind(this);
    // ეს აღარაა საჭირო თუ ეროუ ფუნქციას ვიყენებთ handleChange როცა შემოდის
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        console.log('users', users)
        this.setState({ monsters: users })
      }
      )
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    // this is Object destructuring and is the easiest way:
    const { monsters, searchField } = this.state;

    // Alternatives:
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField; 

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange} />

        {/* this.setState({ searchField: e.target.value }, () => console.log(this.state)) */}

        {/* this.setState() -ს გადავცემთ მეორე არგუმენტს, მეორე ფუნქციას, ქოლბექს. რადგან setState() ასინქრონულია */}
        {/* და მაშინ დაილოგოს e.target.value, როცა setState() დაფინიშდება  */}

        {/* და არა ისე როგორც ქვემოთ წერია: */}
        {/* console.log(this.state)   */}

        <CardList monsters={filteredMonsters} />

      </div>
    )
  }
}

export default App;
