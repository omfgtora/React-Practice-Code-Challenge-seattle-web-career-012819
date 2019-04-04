import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushi: [],
      money: 200,
      currentIndex: 0
    }

  }

  getSushi = () => {
    return fetch(API).then(response => response.json())
      .then(json => {
        this.setState({
          sushi: json
        })
      })
  }

  logEatenStatus = () => {
    console.log('eaten status fired!', this.state.sushi)
    let eatenAdded = this.state.sushi.map(sus => {
      return sus.isEaten = false;
    })
    console.log(eatenAdded);
    return this.setState({
      sushi: eatenAdded
    })
  }

  componentDidMount() {
    this.getSushi()
    .then(this.logEatenStatus())
    
  }

  bill = (price) => {
    let newMoney = this.state.money -= price
    this.setState({money: newMoney})
    console.log('Charged', price)
  }

  getSushiSet = () => {
    let index = this.state.currentIndex
    return this.state.sushi.slice(index, index+4)
  }

  moreSushi = () => {
    this.setState({currentIndex: this.state.currentIndex + 4})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer getSushiSet={this.getSushiSet} bill={this.bill} moreSushi={this.moreSushi} />
        <Table money={this.state.money} />
      </div>
    );
  }
}

export default App;