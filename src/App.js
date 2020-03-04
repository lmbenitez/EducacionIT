import React, {Component} from 'react';
import Logo from './logo.svg'
import './App.css';

//Importamos los componentes que va a utilizar APP
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component{
  //definimos los Estados 
  state = {
    termino: '',
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
        imagenes: resultado.hits
      }))
  }

  PaginaAnterior = () => {
    let pagina = this.state.pagina
    if (pagina === 1) return null;
    pagina --;
    this.setState({pagina}, () => {this.ConsultarAPI();})
  }

  PaginaSiguiente = () => {
    let total = 500/this.state.cantidad
    let pagina = this.state.pagina
    if (pagina === total) return null;
    pagina ++;
    this.setState({pagina}, () => {this.ConsultarAPI();})
  }

  render(){
    return(
    <>
      <header className="jumbotron bg-dark text-light m-3">
        <img src={Logo} style={{width:'100px',
                                backgroundColor:'#192168'
                                }} />
        <h1>Buscador PIXABAY</h1>
        {/* Pasamos la funcion BuscarDatos mediante PROPS*/}
        <Buscador BuscarDatos={this.BuscarDatos} /> 
      </header>
      <main>
        {/*Pasamos el Array de objetos mediante PROPS y dejamos que Resultado haga el mapeo*/}
          <Resultado 
            imagenes={this.state.imagenes}
            PaginaAnterior={this.PaginaAnterior}
            PaginaSiguiente={this.PaginaSiguiente}
          />
      </main>
    </>
    )
  }
}

export default App;
