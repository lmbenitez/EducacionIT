import React from 'react';
import './App.css';

//Importamos el Componente
import Nav from './Components/Nav';
import X from './Components/Header';

class App extends React.Component{
  render(){
    return(
      <>
        <X />
        <h1>Titulo Principal</h1>
        <p>Subtitulo</p>
        <Nav />
        <Nav />
        <Nav />
      </>
    )
  }
}

export default App;
