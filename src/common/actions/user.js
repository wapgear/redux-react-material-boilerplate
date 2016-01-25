import request from 'axios';

export const GET_USER = 'GET_USER';
export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';


export function getUser(value) {
  return {
    type: GET_USER,
    payload: value
  };
}

export function getUserInfo(user) {
    console.log('From function getUserInfo');
    return {
        type: GET_USER_INFO,
        promise: request.get(`http://10.0.0.9:3000/api/users/${user.userId}?access_token=${user.token}`)
    };
}


export function auth(username, password) {
    console.log('From function auth');
    return {
      type: LOGIN,
      promise: request.post(`http://10.0.0.9:3000/api/users/login`, {username:username,password:password})
    };
}
