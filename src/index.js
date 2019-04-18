import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

setInterval(function() {
    var elem = document.getElementById('nameBox');
    var blinking = document.getElementById('blinking').innerHTML;
    if(typeof elem !== 'undefined' && elem !== null && blinking === 'true') {
        document.getElementById('nameBox').classList.toggle('blinkingBorder');
    } else {
        document.getElementById('nameBox').style.outline = 0;
    }
}, 1000);
