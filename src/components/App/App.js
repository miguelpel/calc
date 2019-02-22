import React, { Component } from 'react';
import './App.css';

import NumbersPad from '../NumbersPad/NumberPad'
import OperationsPad from '../OperationsPad/OperationsPad'
import Output from '../Output/Output'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      output: ""
    }
  }

  addCharToInput = (char) => {
    const {input} = this.state;
    this.setState({
      input: input + char,
      output: ""
    })
  }

  calculateInput = () => {
    const result = eval(this.state.input)
    this.setState({
      input: "",
      output: result
    })
  }

  render() {
    const {output, input} = this.state;
    return (
      <div className="App">
        <Output output={output} input={input}/>
        <OperationsPad addChar={this.addCharToInput} calculate={this.calculateInput}/>
        <NumbersPad addChar={this.addCharToInput}/>
      </div>
    );
  }
}

export default App;
