import React from "react";

import { calcula } from "./core";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResult: "",
      displayInput: 0,
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleMultiplicationClick = this.handleMultiplicationClick.bind(this);
    this.handleMinusClick = this.handleMinusClick.bind(this);
    this.handleDivideClick = this.handleDivideClick.bind(this);
    this.handleSumClick = this.handleSumClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleEqualClick = this.handleEqualClick.bind(this);
  }
  handleNumberClick(event) {
    this.setState((state) => {
      if (state.displayInput === 0) {
        return {
          displayInput: event.target.innerHTML,
        };
      } else {
        return {
          displayInput: state.displayInput + event.target.innerHTML,
        };
      }
    });
  }
  handleMultiplicationClick(event) {
    this.setState((state) => {
      if (state.displayResult) {
        return {
          displayInput: `${state.displayResult} * `,
          displayResult: "",
        };
      }
      return {
        displayInput: `${state.displayInput} * `,
      };
    });
  }
  handleMinusClick(event) {
    this.setState((state) => {
      if (state.displayResult) {
        return {
          displayInput: `${state.displayResult} - `,
          displayResult: "",
        };
      }
      return {
        displayInput: `${state.displayInput} - `,
      };
    });
  }
  handleDivideClick(event) {
    this.setState((state) => {
      if (state.displayResult) {
        return {
          displayInput: `${state.displayResult} / `,
          displayResult: "",
        };
      }
      return {
        displayInput: `${state.displayInput} / `,
      };
    });
  }
  handleSumClick(event) {
    this.setState((state) => {
      if (state.displayResult) {
        return {
          displayInput: `${state.displayResult} + `,
          displayResult: "",
        };
      }
      return {
        displayInput: `${state.displayInput} + `,
      };
    });
  }
  handleClearClick(event) {
    this.setState((state) => {
      return {
        displayResult: (state.displayResult = ""),
        displayInput: (state.displayInput = 0),
      };
    });
  }
  handleEqualClick(event) {
    this.setState((state) => {
      const result = calcula(state.displayInput);

      return {
        displayResult: result,
        displayInput: state.displayInput,
      };
    });
  }
  render() {
    return (
      <div className="Calculator">
        <div id="display">
          <span>{this.state.displayResult}</span> {this.state.displayInput}
        </div>

        <div id="allButtons">
          <div>
            <div id="coluns">
              <button onClick={this.handleNumberClick}>7</button>
              <button onClick={this.handleNumberClick}>8</button>
              <button onClick={this.handleNumberClick}>9</button>
            </div>

            <div id="coluns">
              <button onClick={this.handleNumberClick}>4</button>
              <button onClick={this.handleNumberClick}>5</button>
              <button onClick={this.handleNumberClick}>6</button>
            </div>
            <div id="coluns">
              <button onClick={this.handleNumberClick}>1</button>
              <button onClick={this.handleNumberClick}>2</button>
              <button onClick={this.handleNumberClick}>3</button>
            </div>
            <div>
              <button id="0" onClick={this.handleNumberClick}>
                0
              </button>
            </div>
          </div>
          <div id="operators">
            <div id="coluns">
              <button onClick={this.handleMultiplicationClick}>*</button>
              <button onClick={this.handleMinusClick}>-</button>
            </div>
            <div id="coluns">
              <button onClick={this.handleDivideClick}>/</button>
              <button onClick={this.handleSumClick}>+</button>
            </div>
            <div className="calcular">
              <button onClick={this.handleEqualClick}>=</button>
              <button onClick={this.handleClearClick}>C</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
