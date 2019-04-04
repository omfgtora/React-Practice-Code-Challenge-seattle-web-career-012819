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

componentDidMount() {
  this.getSushi();
  }

  addEaten = (data) => {
    const newData = data.map(item => {
      // return {...i, isEaten: false}
      Object.assign(item, {isEaten: false})
      return item
    })
    return newData;
  }

  getSushi = () => {
    fetch(API).then(response => response.json())
    .then(json => this.addEaten(json))
    .then(data => {
      this.setState({
          sushi: data
        })
      })
    }
    
  updateEaten = (sushi) => {
    const updatedArray = this.state.sushi.map(item => {
      if (item.id === sushi.id) {
        item.isEaten = true
      }
      return item
    })
    this.setState({sushi: updatedArray})
  }

  bill = (sushi) => {
    if (!sushi.isEaten) {
      let newMoney = this.state.money -= sushi.price
      this.setState({money: newMoney})
    }
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
        <SushiContainer getSushiSet={this.getSushiSet} bill={this.bill} moreSushi={this.moreSushi} updateEaten={this.updateEaten} />
        <Table money={this.state.money} />
      </div>
    );
  }
}

export default App;