import { act } from "react-test-renderer";

export default function (state, action) { 
    switch (action.type) {
    

        case 'SET_USERNAME':
            return {...state, usernameList: action.payload.usernamem} 

        default:
            return state;



    }
}