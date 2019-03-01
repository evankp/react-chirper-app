import React from 'react'
import {connect} from 'react-redux'
import {handleSaveTweet} from "../actions/tweets";
import {Redirect} from "react-router-dom";

class NewTweet extends React.Component {
    state = {
        text: '',
        toHome: false
    };

    handleChange = e => {
        e.preventDefault();

        this.setState({text: e.target.value})
    };

    handleSubmit = e => {
        const {id} = this.props;

        e.preventDefault();

        this.props.dispatch(handleSaveTweet(this.state.text, id));

        this.setState({
            text: '',
            toHome: !id
        })
    };

    render() {
        const tweetLength = 280;

        const {text, toHome} = this.state,
            textLeft = tweetLength - text.length;

        if (toHome) {
            return <Redirect to='/'/>
        }

        return (
            <div>
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea className="textarea" value={text}
                              onChange={this.handleChange} maxLength={tweetLength}
                              placeholder="What's up?"/>

                    {textLeft < 100 && (
                        <span className="tweet-length">{textLeft}</span>
                    )}

                    <button className="btn" type="submit" disabled={!this.state.text}>Submit Tweet</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)