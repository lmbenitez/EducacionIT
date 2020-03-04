import React from 'react';

const Paginas = (props) => {
    return(
        <div>
            <button 
                onClick={props.PaginaAnterior}
                className="btn btn-primary col-12 col-md-6">
                &larr; Anterior
            </button>
            <button 
                onClick={props.PaginaSiguiente}
                className="btn btn-primary col-12 col-md-6">
                Siguiente &rarr;
            </button>
        </div>
    )
}
export default Paginas;