import React, { Component } from 'react';

import QuoteMachine from '../src/Components/QuoteMachine';
import _ from 'lodash';
import Grid from '@material-ui/core/Grid';
import 'typeface-roboto';
import { withStyles } from '@material-ui/core';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
  }
};

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
      <Grid className={this.props.classes.container}  id="quote-box" container justify="center">
        <Grid xs={11} lg={6} item>
          {
            this.selectedQuote ? <QuoteMachine  assignNewQuoteIndex={this.assignNewQuoteIndex} selectedQuote={this.selectedQuote} /> : null       
          }
        </Grid>
      </Grid> 
    );
  }
}

export default withStyles(styles)(App);
