import React, { useState } from 'react'
export default function Textform(prop) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);  //use snippet clg for console.log("");
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () => {
    console.log("Uppercase was clicked" + text);  //use snippet clg for console.log("");
    let newText = text.toLowerCase();
    setText(newText)
  }
  
  const handleClearClick = () => {
    let newText =" ";
    setText(newText)
  }

  const handleOnChange = (event) => {
    console.log("On changed");  //use snippet clg for console.log("");
    setText(event.target.value);
  }

  const handleCopy= () =>{
    alert("Copied succesfully!");
    var text= document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }

  const [text, setText] = useState('');  // 
  // text= "new text added to the state aishwar bhai"; //wrong way of updating the state variable  
  // setText("new text added to the state aishwar bhai"); //correct way of updating a state variable 
  return (
    <>
      <div>
        <div className="mb-3">
          <h1> {prop.heading} </h1>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear the Textarea</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-5">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length }Minutes to read </p>
        <h3>Preview </h3>
        <p>{text}</p>
      </div>
    </>
  )
}
