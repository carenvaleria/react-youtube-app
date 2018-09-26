import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />;
      </div>
    );
  }
  //here we're passing the new term to the component. whenever content is changed, the term is updated, sets the state of the 
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);

  }
}
//export component
export default SearchBar;
