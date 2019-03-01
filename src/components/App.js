import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {recieveInitialData} from "../actions/shared";
import Dashboard from './dashboard';
import LoadingBar from "react-redux-loading";
import NewTweet from "./new-tweet";
import TweetPage from "./tweet-page";
import Nav from "./nav";

class App extends React.Component {
    componentDidMount() {
        this.props.dispatch(recieveInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar/>
                    <div className="container">
                        <Nav/>
                        {this.props.loading
                            ? null
                            : <div>
                                <Route exact path='/' component={Dashboard}/>
                                <Route path='/tweet/:id' component={TweetPage}/>
                                <Route path='/new' component={NewTweet}/>
                            </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(App);