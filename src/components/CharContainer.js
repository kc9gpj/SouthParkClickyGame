import React, {Component} from 'react';
import Char from './Char';
import chars from "./../char.json"
import shuffle from "shuffle-array";

class CharContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 1,
            chars: chars,
            selectedchars: []
        };
    }

    handleClick = (e) => {
        console.log('click');
        let id = e.target.id;
        let exists = false;
        this.state.selectedchars.forEach(char => {
            if (char.id == id) {
                 exists = true;
            }
        })
        if (exists) {
            this.stopGame();
            console.log('stop');
        }
        else {
            this.state.chars.forEach(char => {
                if (char.id == id) {
                    this.setState({selectedchars: [...this.state.selectedchars, char]});
                    this.incrementScore();
                    console.log('send to increment');
                }
            })  
        }
        this.setState({ chars: shuffle(this.state.chars)});
        console.log('shuffle');
    }

    incrementScore = () => {
        this.setState({score: this.state.score + 1});
        this.props.changeCurrentScore(this.state.score);
        console.log('increment');
        console.log(this.state.score);
    

    }

    stopGame = () => {
        this.props.changeHighScore(this.state.score);
        this.setState({score: 1, selectedchars: []});
        this.props.changeCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="charContainer" className="charContainer">
                <div className="row">
                    {chars.map(char => <Char src={char.image} key={char.id} id={char.id} alt={char.name} stopGame={this.stopGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CharContainer;