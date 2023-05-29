
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Aleart from './component/Aleart';



function App() {
  const [dMode, setDMode] = useState('light')
  const Mode = () => {
    if (dMode === 'light') {
      setDMode('dark');
      document.body.style.backgroundColor = 'grey'
    } else {
      setDMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar mode={dMode} toggles={Mode}></Navbar>
      <Aleart></Aleart>
      <div className="container">
        <TextForm mode={dMode} ></TextForm>
      </div>
      <div className="container">
        <About></About>
      </div>

    </>
  );
}

export default App;
