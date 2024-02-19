import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
    console.log ('1: constructor');
  }
  componentDidMount(){
    console.log ('3: component');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (response => response.json())
    .then (users => this.setState(
      () => {
        return {monsters:users}
      },
      () => {
        console.log(this.state)
      }
    ))
    
  }    
  
  render() {
    console.log ('2: render');
    const filteredMonsters = this.state.monsters.filter((monster)=>
            {
              return monster.name.toLowerCase().includes(this.state.searchField);
            })
    return (
      <div className="App">
        <input 
        className='search-box' 
        type='search' 
        placeholder='Search here' 
        onChange={(event)=>
          {
            const searchInput = event.target.value.toLowerCase();            
            this.setState(()=>
            {
              return {searchField:searchInput};
            },           
            )
          }   
        }
        />
        {
          filteredMonsters.map((monster)=>{
            return ( 
            <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>
            ); 
          })
        }
      </div>
    );
  }
}

export default App;
