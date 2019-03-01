import React from 'react'

export default class NewTweet extends React.Component {
    state = {
        text: ''
    };

    handleChange = e => {
        e.preventDefault();

        this.setState({text: e.target.value})
    };

    handleSubmit = e => {
        e.preventDefault();

        // TODO: Add submit logic
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
                </form>
            </div>
        )
    }
}