export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SET_AUTHED_USER = 'SET_AUTHED_USER';

export function getUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}