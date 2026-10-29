
import React, { useState } from "react";
import "./App.css";

function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      readOnly
    />
  );
}

function Button({ label, onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  const [message, setMessage] = useState(
    "10 Things That Require Zero Talent"
  );

  const things = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic",
  };

  function handleClick(label) {
    if (label === "NAME") {
      setMessage("ASHTON MARTIN ZABLAN");
    } else if (label === "SUBJ") {
      setMessage("C-PCIT9");
    } else {
      setMessage(things[label]);
    }
  }

  return (
    <div className="container">
      <div className="calculator">
        <h1 className="header">
          ASHTON MARTIN ZABLAN - IT3A
        </h1>

        <Display value={message} />

        <div className="buttons">
          {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map(
            (label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleClick(label)}
              />
            )
          )}

          <Button
            label="NAME"
            onClick={() => handleClick("NAME")}
          />

          <Button
            label="0"
            onClick={() => handleClick("0")}
          />

          <Button
            label="SUBJ"
            onClick={() => handleClick("SUBJ")}
          />
        </div>
      </div>
    </div>
  );
}
