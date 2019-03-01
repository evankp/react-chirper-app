import React from 'react'
import {connect} from 'react-redux'

import Tweet from "./tweet";
import NewTweet from "./new-tweet";


class TweetPage extends React.Component {
    render() {
        const {replies} = this.props,
            {params} = this.props.match;

        return (
            <div>
                <Tweet id={params.id}/>
                <NewTweet id={params.id}/>
                {replies.length !== 0 && (<h3 className="center">Replies</h3>)}
                <ul>
                    {replies.map(reply => <li key={reply}><Tweet id={reply}/></li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, tweets}, props) {
    const {id} = props.match.params;

    return {
        replies: !tweets[id]
            ? []
            : tweets[id].replies.sort((a, b) => tweets[a].timestamp - tweets[b].timestamp)
    }
}

export default connect(mapStateToProps)(TweetPage)