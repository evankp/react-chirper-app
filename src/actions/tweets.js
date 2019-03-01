import {saveLikeToggle} from "../utils/api";

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const LIKE_TWEET = 'LIKE_TWEET';
export const NEW_TWEET = 'NEW_TWEET';

export function newTweet(text) {
    return {
        type: NEW_TWEET,

    }
}

export function getTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function likeTweet({id, authedUser, hasLiked}) {
    return {
        type: LIKE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export const toggleLikeTweet = info => dispatch => {
    dispatch(likeTweet(info));

    return saveLikeToggle(info)
        .catch(err => {
            console.log('error in saveLikeToggle: ', err);
            dispatch(likeTweet(info));
            alert('There was an error liking the tweet, try again.')
        })
};