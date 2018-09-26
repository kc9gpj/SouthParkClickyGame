import React, { Component} from 'react';
import './index.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharContainer from "./components/CharContainer"

class App extends Component {
  state = {
    currentCount: 0,
    highScore: 0
  }

  changeHighScore = (newTop) => {
    if (newTop > this.state.highScore) {
      this.setState({highScore: newTop - 1})
      console.log(newTop);
    }
  }

  changeCurrentScore = (newCount) => {
    this.setState({currentCount: newCount});
    console.log(newCount);
  }

  render() {
    return (
      <div>
        <Navbar score={this.state.currentCount} top={this.state.highScore}/>
        <Header/>
        <CharContainer changeCurrentScore={this.changeCurrentScore} changeHighScore={this.changeHighScore}/>
      </div>
    );
  }
}

export default App;
