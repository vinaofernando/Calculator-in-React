import React from "react";

function somaMatriz(array) {
  for (let i = 0; i < array.length; i++) {
    const item = array[i].trim();
    const numeroAnterior = array[i - 1];
    const numeroPosterior = array[i + 1];

    if (item === "+") {
      return Number(numeroAnterior) + Number(numeroPosterior);
    } else if (item === "*") {
      return Number(numeroAnterior) * Number(numeroPosterior);
    } else if (item === "/") {
      return Number(numeroAnterior) / Number(numeroPosterior);
    } else if (item === "-") {
      return Number(numeroAnterior) - Number(numeroPosterior);
    }
  }
}

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
    this.handleDevideClick = this.handleDivideClick.bind(this);
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
  handleDevideClick(event) {
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
      const array = state.displayInput.split(/(\+|\-|\*|\/)/);

      if (array[array.length - 1] === " ") {
        return;
      }

      const result = somaMatriz(array);

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
              <button id="7" onClick={this.handleNumberClick}>
                7
              </button>
              <button id="8" onClick={this.handleNumberClick}>
                8
              </button>
              <button id="9" onClick={this.handleNumberClick}>
                9
              </button>
            </div>

            <div id="coluns">
              <button id="4" onClick={this.handleNumberClick}>
                4
              </button>
              <button id="5" onClick={this.handleNumberClick}>
                5
              </button>
              <button id="6" onClick={this.handleNumberClick}>
                6
              </button>
            </div>
            <div id="coluns">
              <button id="1" onClick={this.handleNumberClick}>
                1
              </button>
              <button id="2" onClick={this.handleNumberClick}>
                2
              </button>
              <button id="3" onClick={this.handleNumberClick}>
                3
              </button>
            </div>
            <div>
              <button id="0" onClick={this.handleNumberClick}>
                0
              </button>
            </div>
          </div>
          <div id="operators">
            <div id="coluns">
              <button id="*" onClick={this.handleMultiplicationClick}>
                *
              </button>
              <button id="-" onClick={this.handleMinusClick}>
                -
              </button>
            </div>
            <div id="coluns">
              <button id="/" onClick={this.handleDivideClick}>
                /
              </button>
              <button id="+" onClick={this.handleSumClick}>
                +
              </button>
            </div>
            <div className="calcular">
              <button id="=" onClick={this.handleEqualClick}>
                =
              </button>
              <button id="c" onClick={this.handleClearClick}>
                C
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
