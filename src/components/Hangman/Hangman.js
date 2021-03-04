import React from 'react';

import './Hangman.css';

import Hangman1 from '../../assets/images/hangman/hangman-1.png';
import Hangman2 from '../../assets/images/hangman/hangman-2.png';
import Hangman3 from '../../assets/images/hangman/hangman-3.png';
import Hangman4 from '../../assets/images/hangman/hangman-4.png';
import Hangman5 from '../../assets/images/hangman/hangman-5.png';
import Hangman6 from '../../assets/images/hangman/hangman-6.png';
import Hangman7 from '../../assets/images/hangman/hangman-7.png';

const Hangman = (props) => {
    let hangman = null;
    switch (props.failNumber) {
        case 1:
            hangman = <img src={Hangman1}/>
            break;
        case 2:
            hangman = <img src={Hangman2}/>
            break;
        case 3:
            hangman = <img src={Hangman3}/>
            break;
        case 4:
            hangman = <img src={Hangman4}/>
            break;
        case 5:
            hangman = <img src={Hangman5}/>
            break;
        case 6:
            hangman = <img src={Hangman6}/>
            break;
        case 7:
            hangman = <img src={Hangman7}/>
            break;
        default:
            hangman = null
    }
    return hangman;
}

export default Hangman;
