import {LIKE_TWEET, RECEIVE_TWEETS} from "../actions/tweets";

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            };

        case LIKE_TWEET:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked
                        ? state[action.id].likes.filter(uid => uid !== action.authedUser)
                        : [...state[action.id].likes, action.authedUser]
                }
            };

        default:
            return state;
    }
}