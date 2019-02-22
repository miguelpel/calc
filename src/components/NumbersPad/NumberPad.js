import React, { Component } from 'react';
// import './NumberPad.css';

const NumberPad = (props)  => {
    return (
      <div className="NumberPad">
        <button onClick={() => props.addChar(9)}>9</button>
        <button onClick={() => props.addChar(8)}>8</button>
        <button onClick={() => props.addChar(7)}>7</button>
        <button onClick={() => props.addChar(6)}>6</button>
        <button onClick={() => props.addChar(5)}>5</button>
        <button onClick={() => props.addChar(4)}>4</button>
        <button onClick={() => props.addChar(3)}>3</button>
        <button onClick={() => props.addChar(2)}>2</button>
        <button onClick={() => props.addChar(1)}>1</button>
        <button onClick={() => props.addChar(0)}>0</button>
      </div>
    );
}

export default NumberPad;
