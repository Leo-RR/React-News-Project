import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="main-header">
        <span className="main-header-logo">News</span>
        <input type="text" id="main-header-search"/>
      </div>
    );
  }
}

export default App;
