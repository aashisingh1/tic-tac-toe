import React from 'react';
//import ReactDOM from 'react-dom';

function tick() {
    const element = (
        <div>
            <h1> hello World!</h1>
            <h2> Its date {new Date().toLocaleString()}. </h2>
        </div>
    );
}
setInterval(tick, 1000);
