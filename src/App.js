import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not!
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  const darkMode = () => {
    if(mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
  }

  const lightMode = () => {
    if(mode === 'dark') {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    <Router>
    {/* <Navbar/> */}
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} darkMode={darkMode} lightMode={lightMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Switch>
        {/* 
          /users ---> Component 1
          /users/home ---> Component 2
        */}
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
        <Route path="/">
          <TextForm heading="Write below to analyse the text" mode={mode} showAlert={showAlert}/>
        </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;









/* <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div> 
*/