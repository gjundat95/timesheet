import { LOGIN, LOGOUT} from '../types/AuthType';

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