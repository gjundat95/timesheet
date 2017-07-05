import {LOGIN, LOGOUT } from '../actions/types/AuthType';

const initialState = { authentication: false };

export function reducers(state = initialState, action) {
  switch(action.type){
    case LOGIN :
      return {
        authentication: true,
      };
    case LOGOUT :
      return {
        authentication: false,
      };
    default: 
      return state;    
  }

}