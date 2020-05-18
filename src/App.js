import React, { Component } from 'react';
import Button from '../src/Components/Button';

import './App.css';

class App extends Component {
  nextQuoteClickHandler(){
    console.log('hiii');
  }

  render(){
    return (
      <div className="App" id="quote-item">
        <Button buttonDisplayName="Next Quote" clickHandler={this.nextQuoteClickHandler}/>
      </div>
    );
  }
}

export default App;
