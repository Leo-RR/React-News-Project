import React, { Component } from 'react';

class App extends Component {
  
  constructor(){
    super();

  }
  
  showSearchBar(event){
    let searchBar = document.querySelector(".input-search-bar");
    let searchField = document.querySelector(".input-search");
    if (searchBar.classList.contains("show-bar")){
      searchBar.classList.remove("show-bar");
    } else {
      searchBar.classList.add("show-bar");
      searchField.focus();

    }
  }

  submitSearch(event){
    console.log(this.search.value);
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div>
            <a className="main-header-logo" href="#">News</a>
            <span className="main-header-menu"></span>
          </div>
          <span className="main-header-search-icon" onClick={this.showSearchBar}></span>
        </div>
        <div className="input-search-bar">
          <input type="text" className="input-search" ref={input => this.search = input} placeholder="Digite sua busca"/>
          <button className="input-search-button" onClick={this.submitSearch.bind(this)}>Buscar</button>
        </div>
      </div>
    );
  }
}

export default App;
