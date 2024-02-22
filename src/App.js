import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import CardList from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState(
      () => {
        return {monsters:users}
      },
    ))
    
  }    
  
  onSearch = (event) =>
  {
    const searchInput = event.target.value.toLowerCase();            
    this.setState(()=>
    {
      return {searchField:searchInput};
    },           
    )
  } 

  render() 
  {
    const {monsters, searchField}  = this.state;

    const {onSearch} = this;
    const filteredMonsters = monsters.filter((monster)=>
            {
              return monster.name.toLowerCase().includes(searchField);
            })    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      
      <SearchBox OnChangeHandler={onSearch} />
      <div>
        <CardList monsters={filteredMonsters} />
      </div>
      </div>
      );
    }
}

export default App;
