import React from 'react';
import {connect} from 'react-redux';
import {recieveInitialData} from "../actions/shared";
import Dashboard from './dashboard';
import LoadingBar from "react-redux-loading";
import NewTweet from "./new-tweet";
import TweetPage from "./tweet-page";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(recieveInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar/>
                {this.props.loading ? null : <TweetPage match={{params: {id: 'fap8sdxppna8oabnxljzcv'}}}/>}
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);