import React from 'react';

import './StartButton.css';

const StartButton = (props) => (
    <button
        disabled={props.disabled}
        className="StartButton"
        onClick={props.clicked}>{props.children}</button>
);

export default StartButton;