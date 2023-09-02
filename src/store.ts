import { createStore } from "redux";



const defaultState = {
    auth:false,
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'LOGIN': return { auth:true };
        case 'LOGOUT': return { auth:false };
        default: return state;
    }
}
export const store:any = createStore(reducer);