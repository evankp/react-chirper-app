import React from 'react';
import {connect} from 'react-redux';
import {recieveInitialData} from "../actions/shared";
import Dashboard from './dashboard';
import LoadingBar from "react-redux-loading";
import NewTweet from "./new-tweet";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(recieveInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar/>
                <NewTweet/>
                {this.props.loading ? null : <Dashboard/>}
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