import {getInitialData} from "../utils/api";
import {getTweets} from "./tweets";
import {getUsers, setAuthedUser} from "./users";
import {showLoading, hideLoading} from "react-redux-loading";

export const AUTHED_USER = 'sarah_edo';

export const recieveInitialData = () => dispatch => {
    dispatch(showLoading());

    return getInitialData()
        .then(({users, tweets}) => {
            dispatch(getTweets(tweets));
            dispatch(getUsers(users));
            dispatch(setAuthedUser(AUTHED_USER))
            dispatch(hideLoading())
        })
};