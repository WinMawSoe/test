import logo from './logo.svg';
import './App.css';

import { useState } from "react";


function FavoriteColor() {
  const [color, setColor] = useState("Purple");
  const [age, setAge] = useState(25);
  
  return <div><h1 className="color-yellow">My favorite color is {color}!</h1>
  <button
        type="button"
        onClick={() => setColor(changeColor(color))}
      >{changeColor(color)}</button>
      <h1 className="age-color">My age is {age}!</h1></div>;
}

function changeColor(color) {
  if (color == "Blue"){
    return "Purple";

  }else{
    return "Blue";
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FavoriteColor />
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
  );
}

export default App;
