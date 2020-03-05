const initialState = {palabra:""};

export default (state = initialState, action) => {
    if(action.type === 'AGREGAR_PALABRA'){
        return{ ...state,
            palabra: action.palabra
        } 
    }
    return state;
}

export const palabraEnviada = state => (
    state.palabra.palabraReducer.palabra
)