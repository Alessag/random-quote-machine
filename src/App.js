import React, { Component } from 'react';
import QuoteMachine from '../src/Components/QuoteMachine';
import _ from 'lodash';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }

    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    console.log('Hi, I am a Component Did Mount');
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
    }
    /**
     * Returns an Integer representing an index in state.quotes 
     * If state.quotes is empy, return undefined
     */
    generateNewQuoteIndex(){
      console.log(this.state.quotes.length);
      if(!this.state.quotes.length){
        return undefined;
      }

      return _.random(0, this.state.quotes.length - 1);
    }

    get selectedQuote(){
      if( !this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
        return undefined;
      }

      return this.state.quotes[this.state.selectedQuoteIndex];
    }
    
    assignNewQuoteIndex() {
      this.setState({
        selectedQuoteIndex: this.generateNewQuoteIndex()
      });
    }
    
    render(){
    return (
      <div className="App" id="quote-item">
        <QuoteMachine  assignNewQuoteIndex={this.assignNewQuoteIndex} selectedQuote={this.selectedQuote} />        
      </div> 
    );
  }
}

export default App;
