import React, {useRef} from 'react';

//importamos connect para vincular nuestro STORE
import { connect } from 'react-redux';
import { agregarPalabra } from '../store/Actions';

const Form = ({agregarPalabra}) =>{
    const palabraRef = useRef(null)
    return(
        <> {/* tomamos el valor del input media useRef */}
            <input 
                ref={palabraRef}
                type="text"/>
            {/* Utilizamos como parametro el valor del input para la funcion agregarPalabra*/}
            <button
                onClick ={() =>{
                    agregarPalabra(palabraRef.current.value);
                }}
                >
                Agregar
            </button>
        </>
    )
}

///Conectamos nuestro componente con el Store y le pasamos el valor de agregarPalabra.
export default connect(null, {agregarPalabra}) (Form)