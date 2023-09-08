import { Action, createStore } from "redux";
import { isLoggedIn } from "./helpers/session";



const defaultState = {
    auth: isLoggedIn()===false ? false : true ,
}

function reducer(state = defaultState, action:Action) {
    switch(action.type) {
        case 'LOGIN': return { auth:true };
        case 'LOGOUT': return { auth:false };
        default: return state;
    }
}
export const store:any = createStore(reducer);