import React from 'react'
import {connect} from 'react-redux'
import {handleSaveTweet} from "../actions/tweets";

class NewTweet extends React.Component {
    state = {
        text: ''
    };

    handleChange = e => {
        e.preventDefault();

        this.setState({text: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.dispatch(handleSaveTweet(this.state.text, this.props.id));

        this.setState({text: ''})
    };

    render() {
        const {text} = this.state;

        return (
            <div>
                <h3 className="center">Compose New Tweet</h3>
                <form className="new-tweet" onSubmit={this.handleSubmit}>
                    <textarea className="textarea" value={text}
                              onChange={this.handleChange} maxLength={280}
                              placeholder="What's up?"/>

                    <button className="btn" type="submit" disabled={!this.state.text}>Submit Tweet</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewTweet)