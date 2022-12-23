import React, {useState} from 'react'
 


export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("uppercase was clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("convert to upper case","success")
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("extra spaces removed","success")
  }
  const handleClearClick =()=>{
    // console.log("uppercase was clicked" + text);
    let newText= '';
    setText(newText);
  } 
  const handledownClick =()=>{
    // console.log("lowercase was clicked" + text);
    let newText= text.toLowerCase();
    setText(newText);
   props.showAlert("convert to lower case","success")
  }
  const handleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const[text, setText]= useState('');
  return (
    <>
    <div className="container" style = {{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading} </h1>
 <div className="mb-3">
  {/* <label htmlFor="mybox" className="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text}
  onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
 </div>
 <button className="btn btn-primary" onClick={handledownClick}>convert to lower case</button>
 <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to upper case</button>
 <button className="btn btn-primary " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-2" style = {{color:props.mode==='dark'?'white':'black'}}>
  <h1>your text summary </h1>
  <p><b>{text.split(" ").length} words,{text.length} characters</b></p>
  <p> <b>{0.008 * text.split(" ").length} minutes needed you to read this</b></p>
  <h2>preview</h2>
  <p> {text.length>0?text:"Enter sometext to preview"}</p>
</div>
 </>
  )
}
