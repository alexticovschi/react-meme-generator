import React, { Component } from 'react';
import { connect } from 'react-redux';
import MemeItem from './MemeItem';
import '../styles/index.css';

class App extends Component {
    state = {
        memeLimit : 10
    }

    render() {
        return (
            <div>
                <h2>Welcome to the Meme Generator!</h2>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => (
                        <MemeItem key={index} meme={meme}/>
                    ))
                }
                <div className="meme-button" onClick={() => {
                    this.setState({ memeLimit: this.state.memeLimit + 10 });
                }}>Load 10 more memes...</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, null)(App);