const initialState = { palabra: "" }; 

export default (state = initialState, action) => { 
    if (action.type === 'CAMBIAR_PALABRA') { 
        return { 
            ...state, //Lo que devuelve un reducer es lo que se quedará en el state, por tanto, debe devolver todo lo que había antes (además de la información que cambia) 
            palabra: action.palabra 
        } 
    } 
    return state; 
}; 

export const palabraEnviada = state => state.palabraReducer.palabra; 