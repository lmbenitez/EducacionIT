import React, {useRef} from 'react';
import { cambiarPalabra } from '../store/Actions'; 
import {connect} from "react-redux"; 

const Form = ({ cambiarPalabra }) => { 
    const palabraRef = useRef(null); 
    return (
    <div>
        <input 
            ref={palabraRef} 
            type="text" 
            placeholder="La palabra"/>
            <button onClick={ 
                () => { cambiarPalabra(palabraRef.current.value);}
            } >Add</button>
    </div>) 
}

export default connect(null, { cambiarPalabra })(Form) 