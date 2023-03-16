import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Input(props) {
  const [inputText, setInput] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInput(newValue);
  }

  return (
    <div>
      <input
        className="input-field"
        onChange={handleChange}
        type="text"
        value={inputText}
      />
      <Button
        className="input-button"
        variant="primary"
        onClick={() => {
          props.onSearch(inputText);
          setInput("");
        }}
      >
        <span>Search</span>
      </Button>
      {""}
    </div>
  );
}
export default Input;
