import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

var unset = null;
setInterval(function() {
    var elem = document.getElementById('nameBox');
    var blinking = document.getElementById('blinking').innerHTML;
    if(typeof elem !== 'undefined' && elem !== null && blinking === 'true') {
        document.getElementById('nameBox').classList.toggle('blinkingBorder');
    } else {
        document.getElementById('nameBox').style.outline = 0;
    }

    if(unset !== true){
        alert('control access');
        unset = true;
        //$('.vp-controls').style.display = 'none'
    }
}, 1000);