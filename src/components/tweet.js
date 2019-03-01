import React from 'react';
import {connect} from 'react-redux'
import {formatDate, formatTweet} from "../utils/helpers";
import PropTypes from 'prop-types';
import {TiArrowBack as ReplyArrow} from 'react-icons/ti';
import {TiArrowBackOutline as ReplyArrowOutline} from 'react-icons/ti';
import {TiHeartOutline as HeartOutline} from 'react-icons/ti';
import {TiHeartFullOutline as Heart} from 'react-icons/ti';
import {toggleLikeTweet} from "../actions/tweets";
import {AUTHED_USER} from "../actions/shared";

class Tweet extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired
    };

    toParent = (e, id) => {
        e.preventDefault();

        //TODO: Redirect to parent tweet
    };

    handleLike = (e, tweet) => {
      e.preventDefault();

      let tweetInfo = {
        ...tweet,
        authedUser: AUTHED_USER
      };

      this.props.dispatch(toggleLikeTweet(tweetInfo))
    };

    render() {
        const {tweet} = this.props;

        return (
            <div className="tweet">
                <img alt="tweetImg" src={tweet.avatar} className="avatar"/>
                <div className="tweet-info">
                    <span className="tweet-author">{tweet.name}</span>
                    <span className="tweet-date">{formatDate(tweet.timestamp)}</span>
                    {tweet.parent && (
                        <a className="tweet-reply" onClick={e => this.toParent(e, tweet.parent.id)}>
                            Replying to @{tweet.parent.author}
                        </a>
                    )}
                    <p>{tweet.text}</p>

                    <div className="tweet-icons">
                        <ReplyArrowOutline className="tweet-icon"/>
                        <span>{tweet.replies ? tweet.replies : null}</span>
                        <a className="heart-button" onClick={e => this.handleLike(e, tweet)}>
                            {tweet.hasLiked
                            ? <Heart color="#e0245e" className="tweet-icon" />
                            : <HeartOutline className="tweet-icon"/>}
                        </a>
                        <span>{tweet.likes ? tweet.likes : null}</span>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, tweets}, {id}) {
    const tweet = tweets[id],
        parentTweet = tweet ? tweets[tweet.replyingTo] : null;

    return {
        authedUser,
        tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
    }
}

export default connect(mapStateToProps)(Tweet)