import { GET_USER, LOGIN_SUCCESS } from '../actions/user';

export default function user(state = {username: '', logged: false}, action) {
  switch (action.type) {
  case GET_USER:
    return state;
  case LOGIN_SUCCESS:
    console.log(action);
    return state;
  default:
    return state;
  }
}
