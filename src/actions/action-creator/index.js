import { LOGIN, LOGOUT, REQUEST, REQUEST_SUCCESS, REQUEST_ERROR} from '../types';

export function login() {
  return {
    type: LOGIN
  }
}

export function logout() {
  return {
    type: LOGOUT
  }
}

export function request() {
  return {
    type: REQUEST
  }
}

export function requestSuccess() {
  return {
    type: REQUEST_SUCCESS
  }
}

export function requestError(errorMessage) {
  return {
    type: REQUEST_ERROR,
    errorMessage
  }
}