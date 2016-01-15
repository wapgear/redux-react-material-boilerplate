import request from 'axios';

export const GET_USER = 'GET_USER';
export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';


export function getUser(value) {
  return {
    type: GET_USER,
    payload: value
  };
}

export function auth(username, password) {
    return {
      type: LOGIN,
      promise: request.post(`http://10.0.0.9:3000/api/users/login`, {username:username,password:password})
    };
}
