import {GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_INFO_FAILURE, GET_USER_INFO_SUCCESS } from '../actions/user';

export default function user(state = {}, action) {
  switch (action.type) {
  case GET_USER:
    return state;
  case LOGIN_SUCCESS:
    return Object.assign({}, state, {
        error: null,
        token: action.req.data.id,
        userId: action.req.data.userId,
        updateCookie: true
    });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        error: action.error.data.error.message
      });
    case GET_USER_INFO_SUCCESS:
      return Object.assign({}, state, {
        info: action.req.data
      });

  default:
    return state;
  }
}
