import React, { Component } from 'react';
// import './OperationsPad.css';

const OperationsPad = (props) => {
    return (
      <div className="OperationsPad">
        <button onClick={() => props.addChar("%")}>%</button>
        <button onClick={() => props.addChar("/")}>÷</button>
        <button onClick={() => props.addChar("*")}>x</button>
        <button onClick={() => props.addChar("-")}>-</button>
        <button onClick={() => props.addChar("+")}>+</button>
        <button onClick={() => props.calculate()}>=</button>
      </div>
    );
}

export default OperationsPad;
