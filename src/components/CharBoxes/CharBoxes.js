import React from 'react';

import './CharBoxes.css';
import CharBox from "./CharBox/CharBox";

const CharBoxes = (props) => {
    let charBoxList = null;
    if(props.password !== null){
    charBoxList = [...props.password].map((character, index)=>{
        if(props.guessedChars.includes(character)){
            return <CharBox key={index} character={character.toUpperCase()}/>
        }
        return <CharBox key={index}/>
    });}
    return(
      <div className="CharBoxes">
          {charBoxList}
      </div>
    );
}

export default CharBoxes;