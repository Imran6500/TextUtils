import React, {useState} from 'react'

export default function TextForm(props) {

  const checkForEmptyText = () =>{
    if(text.length === 0){
      props.showAlert(" Please Enter some text","error");
    }
    return text.length === 0;
  }

  const handleUpClick = ()=>{
    console.log("UpperCase was clicked");
    if(checkForEmptyText()) return;
    
    setText("You have clicked on handleUpclick" + text);
    let newText = text.toUpperCase();
    props.showAlert(" Converted to upperCase","success");
    setText(newText);
  }

  const handleLoClick = ()=>{
    // console.log("LowerCase was clicked");
    if(checkForEmptyText()) return;
    setText("You have clicked on handleLoclick" + text);
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowerCase","success");
  }

  const handleClClick = ()=>{
    if(checkForEmptyText()) return;
    setText("You have clicked on handleClClick" + text);
    let newText = '';
    setText(newText);
    props.showAlert(" text cleared","success");
  }

  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }

    const [text, setText] = useState('');
  return (
    <>
    <div className="Container" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading} </h1>
            <div className="mb-3">
             <textarea className= "form-control" value = {text} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} onChange = {handleOnChange}rows='8'></textarea>
            </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upperCase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear text</button>


    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary </h2>
        <p>{text.split("").length} words and {text.length} character</p>
        <p>{ text.length === 0 ? 0 : 0.008 * text.split(" ").length} minutes req to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter some text in above box to preview '}</p>
    </div>
    </>
  )
}
