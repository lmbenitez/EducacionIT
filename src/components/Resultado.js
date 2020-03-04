import React from 'react';
import Imagenes from './Imagenes';
import Paginas from './Paginas';

class Resultado extends React.Component{
    //Funcion que define los valores a utilizar como Props
    MostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        return(
            //iteracion de Imagenes para representar cada objeto y pasar sus PROPS al componente Imagenes
            <div 
                className="container">
                <div 
                    className="row"
                    style={{
                        display:'flex',
                        justifyContent:'space-around',
                        margin:'auto'
                    }}>
                    {imagenes.map(imagen =>(
                        <Imagenes 
                            key={imagen.id}
                            imagen={imagen} />
                    ))}
                </div>
                {/* Navegacion de Paginas */}
                <div style={{
                        margin:'auto',
                        width:'20%',
                        minWidth:'300px',
                        maxWidth:'600px'
                    }}
                >
                    <Paginas
                        PaginaAnterior={this.props.PaginaAnterior}
                        PaginaSiguiente={this.props.PaginaSiguiente} />
                </div>
            </div>
        )            
    }
    render(){
        return(
            <>
                {this.MostrarImagenes()}
            </>
        )
    }
}

export default Resultado;