import React,{useState} from "react";
import PropTypes from 'prop-types';

function TextForm(props) {
    const handleclickUpperCase=()=>{
        // console.log("buton clicked");
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleclickLowerCase=()=>{
        // console.log("buton clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const reversethewords=()=>{
        // console.log("buton clicked");
        let newtext=text;
        let reversed = newtext.split('').reverse().join('');
        setText(reversed)
    }
    const handleonChange=(event)=>{
        // console.log("on change..");
        setText(event.target.value)
    }
    
    const [text,setText]=useState('');
  return (
    <>
    <div className="container">
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8" value={text}
       onChange={handleonChange} ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleclickUpperCase}>
        Converrt to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleclickLowerCase}>
        Converrt to LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={reversethewords}>
        Reverse the sentence
      </button>
    </div>
    <div className="container">
        <h2>Your txt summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}minutes to read the above paragraph</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

export default TextForm;
