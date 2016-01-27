import {GET_USER, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_INFO_FAILURE, GET_USER_INFO_SUCCESS, LOGOUT_SUCCESS, CLEAR_COOKIE } from '../actions/user';

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
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
               info: null,
               token: null,
               userId: null,
               clearCookie: true
            });
        case CLEAR_COOKIE:
            return Object.assign({}, state, {
                clearCookie: false
            });
        default:
            return state;
    }
}
