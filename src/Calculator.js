import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResult: 0,
      displayInput: 0,
    };
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleMultiplicationClick = this.handleMultiplicationClick.bind(this);
  }
  handleNumberClick(event) {
    this.setState((state) => {
      if (state.displayResult === 0) {
        return {
          displayResult: event.target.innerHTML,
          displayInput: event.target.innerHTML,
        };
      } else {
        return {
          displayResult: state.displayResult + event.target.innerHTML,
          displayInput: state.displayInput + event.target.innerHTML,
        };
      }
    });
  }
  handleMultiplicationClick(event) {
    this.setState((state) => {
      return {
        displayResult: `${this.state.displayResult} * `,
        displayInput: `${this.state.displayInput} * `,
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
            <div id="coluns">
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
              <button id="-">-</button>
            </div>
            <div id="coluns">
              <button id="/">/</button>
              <button id="+">+</button>
            </div>
            <div id="coluns" className="calcular">
              <button id="=">=</button>
              <button id="c">C</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
