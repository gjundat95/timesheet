import {LOGIN, LOGOUT, REQUEST, REQUEST_SUCCESS, REQUEST_ERROR } from '../actions/types';

const initialState = { authentication: false, doRequest: false, errorState: false, errorMessage: '' };

export function reducers(state = initialState, action) {
  if(action.type === LOGIN) {
    return {...state, authentication: true};

  } else if ( action.type === LOGOUT ) {
    return {...state, authentication: false};

  } else if ( action.type === REQUEST ) {
    return {...state, doRequest: true};

  } else if ( action.type === REQUEST_SUCCESS ) {
    return {...state, doRequest: false, errorState: false};
  
  } else if ( action.type === REQUEST_ERROR ) {
    return {...state, doRequest: false, errorState: true, errorMessage: action.errorMessage}

  } else {
    return state;
  }

}