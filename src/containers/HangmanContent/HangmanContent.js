import React, {Component} from 'react';

import CharBoxes from '../../components/CharBoxes/CharBoxes';
import Hangman from '../../components/Hangman/Hangman';
import StartButton from '../../components/UI/StartButton/StartButton';
import Aux from '../../hoc/Auxiliary/Auxiliary';


import './HangmanContent.css';

class HangmanContent extends Component {
    state = {
        isStarted: false,
        password: null,
        passwordList: [
            'skakanka',
            'lody',
            'fortepian',
            'pies',
            'kot',
            'chodnik',
            'lalka',
            'balon',
            'deska',
            'karton',
            'mysz',
            'kalesony',
            'bakeapp'
        ],
        guessedChars: [],
        failNumber: 0
    }

    onKeyDown = (event) => {
        if(event.keyCode >= 65 && event.keyCode <= 90 && this.state.isStarted){
            if(this.state.password.includes(event.key)){
                const guessedChars = [...this.state.guessedChars];
                if(!guessedChars.includes(event.key)){
                    guessedChars.push(event.key);
                    this.setState({guessedChars: guessedChars});
                }
                const passwordChars = [...this.state.password];
                const passwordCharsUnique = passwordChars
                    .reduce((unique, character) => {
                        if(!unique.includes(character)) {
                            unique.push(character);
                        }
                        return unique
                    }, []);
                //porownanie ilosci unikalnych liter w hasle do unikalnych odganietych i zakonczenie gry
                if(passwordCharsUnique.length === guessedChars.length){
                    this.setState({isStarted: false});
                }
            }
            else{
                this.setState({failNumber: this.state.failNumber+1});
                if(this.state.failNumber >= 7){
                    this.setState({isStarted: false});
                }
            }
        }
    }

    onStartGameClicked = () => {
        this.setState({isStarted: true});
        const password = this.state.passwordList[Math.floor(Math.random() * this.state.passwordList.length)];
        this.setState({
            isStarted: true,
            password: password,
            guessedChars: [],
            failNumber: 0});
    }

    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown);
    }

    render() {
        return (
            <Aux>
                <span className="Title">WISIELEC</span>
                <Hangman failNumber={this.state.failNumber}/>
                <CharBoxes password={this.state.password} guessedChars={this.state.guessedChars}/>
                <StartButton clicked={() => this.onStartGameClicked()}>Nowa Gra</StartButton>
            </Aux>
        );
    }
}

export default HangmanContent