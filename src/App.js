import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm  from './components/TextForm';
import react, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //weither the dark mode is enable or not
  
  const [alert, setalert]= useState(null)
  const showAlert =(message, type)=>{
    setalert({
      msg:message,
      type: type,
    })
    setTimeout(()=>{
      setalert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode=='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743'
    showAlert(" dark mode enabled","success")
    document.title="betray - dark mode enabled"
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert(" light mode enabled","success");
    document.title="betray - light mode enabled"
  }
}
  return (
    <>
    <Router>
    <Navbar title='betray'mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}> 
          </Route>
          <Route exact path="/" element={<TextForm heading=" enter text here, to analyze text  below" showAlert={showAlert}mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
    );
}
export default App;
