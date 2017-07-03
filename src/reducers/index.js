import {LOGIN, LOGOUT } from '../actions/types';

const initialState = { authentication: false };

export function reducers(state = initialState, action) {
  if(action.type === LOGIN) {
    // Do login and change state
  } else if ( action.type === LOGOUT ) {
    // Do logout and change state
  } else {
    return state;
  }

}