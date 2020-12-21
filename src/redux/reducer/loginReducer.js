import {LOGIN_DETAILS} from '../action/constant';
const INITIAL_STATE = {
    login: [],
  };
  const  loginReducer=(state = INITIAL_STATE, action)=> {
    switch (action.type) {
      case LOGIN_DETAILS: 
       return{
          ...state,
          login:action.payload,
        
      }
      default:
        return state;
    }
  }
  export default loginReducer;