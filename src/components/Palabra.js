import React from 'react'
import {connect} from 'react-redux'; 
import { palabraEnviada } from '../store/Reducers'; 

const PalabraGuardada = ({ palabra }) => ( 
    <output>{palabra}</output> 
); 

function mapStateToProps(state) { 
    return { 
        palabra: palabraEnviada(state) 
    } 
} 

export default connect(mapStateToProps)(PalabraGuardada); 