import React from 'react';

import './CharBox.css';

const CharBox = (props) => {
    return(
        <div className="CharBox">
            <span>{props.character}</span>
        </div>
    );
}

export default CharBox;