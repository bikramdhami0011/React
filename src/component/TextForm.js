import React,{useState} from 'react'

export default function TextForm(props) {
  const upchange=()=>{
        const newtext=text.toUpperCase();
        setText(newtext)
        props.alerts('Uppercase change','success')
  }
  const lwchange=()=>{
    const newtext=text.toLowerCase();
    setText(newtext)
    props.alerts('Lowercase change','success')
 }
 const cleartext=()=>{
  
  setText('')
  props.alerts('clear the text','success')
}
const copytext=()=>{
  // var text = document.getElementById('mybox');
  // text.select();
  navigator.clipboard.writeText(text)
  // document.getSelection().removeAllRanges()
  props.alerts('copy to clipboard','success')
}

const removeEspace=()=>{
  const newtext=text.split(/[ ]+/)
  setText(newtext.join(' '))
  props.alerts('unnecessary space are removed','success')
}
  const change=(event)=>{
    setText(event.target.value);
    console.log(event.target.value);
  }
  const [text,setText] = useState('LOVELY ')
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
     <p>{text.split(/\s+/).filter((element)=>{return element.length}).length}word and{text.length}character</p>
     {/* split is not working here so result is not obtained accurately */}

     <p> {0.008*text.split(" ").length} minutes time to read</p>
      <h3>previw</h3>

      <p>{text.length>0?text:"enter something in above box "}</p>
    </div>
    </>
  )
}