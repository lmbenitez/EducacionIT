import React from 'react';
import Imagenes from './Imagenes';
import Paginas from './Paginas';
import {
    Card, 
    CardContent, 
    CardActions
} from '@material-ui/core';

class Resultado extends React.Component{
    //Funcion que define los valores a utilizar como Props
    MostrarImagenes = () => {
        const imagenes = this.props.imagenes;
        return(
            //iteracion de Imagenes para representar cada objeto y pasar sus PROPS al componente Imagenes
            <Card>
                <CardContent variant="outlined">
                    {imagenes.map(imagen =>(
                        <Imagenes 
                            key={imagen.id}
                            imagen={imagen} />
                    ))}
                </CardContent>
                {/* Navegacion de Paginas */}
                <CardActions>
                    <Paginas
                        PaginaActual={this.props.PaginaActual}
                        PaginaAnterior={this.props.PaginaAnterior}
                        PaginaSiguiente={this.props.PaginaSiguiente} />
                </CardActions>
            </Card>
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