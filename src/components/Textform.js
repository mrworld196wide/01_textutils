import React, {useState} from 'react'
export default function Textform(prop) {
  const handleUpClick= ()=>{
    console.log("Uppercase was clicked" + text);  //use snippet clg for console.log("");
    let newText= text.toUpperCase();
    setText(newText)
  }
  const handleOnChange= (event)=>{
    console.log("On changed");  //use snippet clg for console.log("");
    setText(event.target.value);
  }

  const [text, setText]= useState('Enter text here Aishwar!');  // 
  // text= "new text added to the state aishwar bhai"; //wrong way of updating the state variable  
  // setText("new text added to the state aishwar bhai"); //correct way of updating a state variable 
  return (
    <div>
        <div className="mb-3">
            <h1> {prop.heading} </h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  )
}
