import React, { Component } from 'react';
// import './Output.css';

const Output = ({ output, input } ) => {
    return (
          <p className="output">
          {input === "" ? output : input}
          </p>
    );
}

export default Output;
