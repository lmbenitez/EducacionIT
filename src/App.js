import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Importacion de Componentes
import Nav from './components/Nav';
import Form from './components/Footer';

function App() {
  var nombre = "Cristian";
  let cargo = "instructor";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          preguntele al {cargo}, {nombre}
        </p>
        <Nav nombre={nombre} />
        <Form />
      </header>
    </div>
  );
}

export default App;
