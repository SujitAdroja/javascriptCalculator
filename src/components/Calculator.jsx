import React, { useState } from "react";

function Calculator() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    // setAnswer((prev) => prev + symbol);
    if (expression[expression.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
        setAnswer(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    if (expression[expression.length - 1] !== "=") {
      setExpression((prev) => prev + "=");
    }
    setAnswer(eval(expression));
  };
  const clear = () => {
    setExpression("");
    setAnswer("");
  };

  return (
    <div className="container">
      <div className="grid">
        <div id="dis" className="dis">
          <input
            type="text"
            value={expression}
            disabled
            className="expression"
          />
          <input type="text" value={answer} disabled placeholder="0" />
        </div>

        <div id="clear" className="padButton ac" onClick={clear}>
          AC
        </div>
        <div
          onClick={() => {
            display("/");
          }}
          className="padButton divide light-grey"
          id="divide"
        >
          /
        </div>
        <div
          onClick={() => {
            display("*");
          }}
          className="padButton multiply light-grey"
          id="multiply"
        >
          x
        </div>
        <div
          onClick={() => {
            display("7");
          }}
          id="seven"
          className="padButton seven"
        >
          7
        </div>
        <div
          onClick={() => {
            display("8");
          }}
          id="eight"
          className="padButton eight"
        >
          8
        </div>
        <div
          onClick={() => {
            display("9");
          }}
          id="nine"
          className="padButton nine"
        >
          9
        </div>
        <div
          onClick={() => {
            display("-");
          }}
          id="subtract"
          className="padButton subtract light-grey"
        >
          -
        </div>
        <div
          onClick={() => {
            display("4");
          }}
          id="four"
          className="padButton four"
        >
          4
        </div>
        <div
          onClick={() => {
            display("5");
          }}
          id="five"
          className="padButton five"
        >
          5
        </div>
        <div
          onClick={() => {
            display("6");
          }}
          id="six"
          className="padButton six"
        >
          6
        </div>
        <div
          onClick={() => {
            display("+");
          }}
          id="add"
          className="padButton add light-grey"
        >
          +
        </div>
        <div
          onClick={() => {
            display("1");
          }}
          id="one"
          className="padButton one"
        >
          1
        </div>
        <div
          onClick={() => {
            display("2");
          }}
          id="two"
          className="padButton two"
        >
          2
        </div>
        <div
          onClick={() => {
            display("3");
          }}
          id="three"
          className="padButton three"
        >
          3
        </div>
        <div id="equals" className="padButton equals" onClick={calculate}>
          =
        </div>
        <div
          onClick={() => {
            display("0");
          }}
          id="zero"
          className="padButton zero"
        >
          0
        </div>
        <div
          onClick={() => {
            display(".");
          }}
          id="decimal"
          className="padButton decimal"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default Calculator;
