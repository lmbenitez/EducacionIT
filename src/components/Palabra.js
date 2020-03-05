import {connect} from 'react-redux';
import {palabraEnviada} from '../store/Reducers';
import React from 'react';

const palabraGuardada = ({palabra}) => (
    <p>{palabra}</p>
);

function mapStateToProps(state) {
    return{
        palabra: palabraEnviada(state)
    }
}

export default connect(mapStateToProps)(palabraGuardada);