import React, {Component} from 'react';
import Logo from './logo.svg'
import './App.css';

//Importamos los componentes que va a utilizar APP
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

import {Card} from '@material-ui/core';
import { white } from 'color-name';

class App extends Component{
  //definimos los Estados 
  state = {
    termino: '',
    total:1,
    cantidad:0,
    imagenes:[],
    pagina:0
  }

  /// funcion que define el nuevo estado y metodo callback mediante promise (espera a la resolucion de ConsultarAPI)
  BuscarDatos = (termino,cantidad) =>{ 
    this.setState({
      termino:termino,
      cantidad:cantidad,
      pagina:1
    }, () => {
        this.ConsultarAPI();
      }
    )
  }
  
  ///Funcion que solicita los datos al servidor utilizando
  ConsultarAPI = () => {
    const termino = this.state.termino
    const cantidad = this.state.cantidad
    const pagina = this.state.pagina
    const url = `https://pixabay.com/api/?key=13191127-4cf5dbfcea2f4b3416251ff80&q=${termino}&per_page=${cantidad}&page=${pagina}`;

    //Solicitud de Datos utilizando las constantes y devuelve una funcion que define un nuevo estado de IMAGENES y una Array de Objetos
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({
        imagenes: resultado.hits,
        total: resultado.total
      }))
  }

  PaginaAnterior = () => {
    let pagina = this.state.pagina
    if (pagina === 1) return null;
    pagina --;
    this.setState({pagina}, () => {this.ConsultarAPI();})
  }

  PaginaSiguiente = () => {
    let total = this.state.total / this.state.cantidad
    let pagina = this.state.pagina
    if (pagina === total) return null;
    pagina ++;
    this.setState({pagina}, () => {this.ConsultarAPI();})
  }

  render(){
    const useStyles = ({
      myHeader:{
        color:white,
        backgroundColor:'#192168'
      }
    });
    
    return(
    <>
      <header class={useStyles.myHeader}>
        <Card variant="outlined">
          <img src={Logo}/>
          <h1>Buscador PIXABAY</h1>
          {this.state.total}
          {/* Pasamos la funcion BuscarDatos mediante PROPS*/}
          <Buscador BuscarDatos={this.BuscarDatos} /> 
        </Card>
      </header>
      <main>
        {/*Pasamos el Array de objetos mediante PROPS y dejamos que Resultado haga el mapeo*/}
          <Resultado 
            imagenes={this.state.imagenes}
            PaginaActual = {this.state.pagina}
            PaginaAnterior={this.PaginaAnterior}
            PaginaSiguiente={this.PaginaSiguiente}
          />
      </main>
    </>
    )
  }
}

export default App;
