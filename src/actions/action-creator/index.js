import { LOGIN, LOGOUT} from '../types';

export function login(account) {
  return {
    type: LOGIN,
    account: {
      username: account.username,
      password: account.password
    }
  }
}

export function logout(username) {
  return {
    type: LOGOUT,
    username
  }
}