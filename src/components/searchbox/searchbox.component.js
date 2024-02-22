import { Component } from "react";

class SearchBox extends Component {
    render ()
    {
        return (
        <input 
        className='search-box' 
        type='search' 
        placeholder='Search Monsters' 
        onChange={this.props.OnChangeHandler}
        />
        )
    }
}

export default SearchBox;