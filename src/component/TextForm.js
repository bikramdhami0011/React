import React,{useState} from 'react'

export default function TextForm(props) {
  const upchange=()=>{
        const newtext=text.toUpperCase();
        setText(newtext)
  }
  const lwchange=()=>{
    const newtext=text.toLowerCase();
    setText(newtext)
 }
 const cleartext=()=>{
  
  setText('')
}
const copytext=()=>{
  var text = document.getElementById('mybox');
  text.select();
  navigator.clipboard.writeText(text.value)
}

const removeEspace=()=>{
  const newtext=text.split(/[ ]+/)
  setText(newtext.join(' '))
}
  const change=(event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }
  const [text,setText] = useState('hello bikram')
  return (
  <>


    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
       <div className="mb-3" >
      <h2>{props.head} </h2>
      <textarea  className="form-control" id="mybox" rows="10" value={text} onChange={change}
      style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
      <button  className="btn btn-primary my-3 mx-2 " onClick={upchange}>upperCase converter</button>
      <button className="btn btn-primary my-3 "  rows="2" onClick={lwchange}>lowercase converter</button>
      <button  className="btn btn-primary my-3 mx-2 " onClick={cleartext}>clear text</button>
      <button  className="btn btn-primary my-3 mx-2 " onClick={copytext}>copy selected text</button>
      <button  className="btn btn-primary my-3 mx-2 " onClick={removeEspace}>Remove extra space</button>
        </div>
    </div>
    <div className="container my-3  " style={{color:props.mode==='light'?'black':'white'}}>
     <p>{text.split(" ").length}word and{text.length}</p>
     {/* split is not working here so result is not obtained accurately */}

     <p> {0.008*text.split(" ").length} minutes time to read</p>
      <h3>previw</h3>

      <p>{text.length>0?text:"enter something in above box "}</p>
    </div>
    </>
  )
}