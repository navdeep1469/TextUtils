import React from "react";
import { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const changeToUpper = () => {
    let data = text;
    data = data.toUpperCase();
    setText(data);
    props.showAlert("Converted to Upper Case", "success");
  };

  const changeToLower = () => {
    let data = text;
    data = data.toLowerCase();
    setText(data);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>{props.formtitle}</h1>
      <div className='mb-3'>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#423F3E",
            color: props.mode === "light" ? "black" : "white",
          }}
          value={text}
          className='form-control'
          id='exampleFormControlTextarea1'
          rows='8'
          onChange={handleOnChange}></textarea>
      </div>
      <div className='container my-3' style={{ color: props.mode === "light" ? "black" : "white" }}>
        <p>
          Your text contains {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
      <div className='container my-3'>
        <button className='btn btn-primary ' onClick={changeToUpper}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-3' onClick={changeToLower}>
          Convert to Lowercase
        </button>
        <button
          className='btn btn-primary mx-3'
          onClick={() => {
            setText("");
            props.showAlert("Text Cleared", "success");
          }}>
          Clear Text
        </button>
      </div>
      <div className='container my-3' style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
