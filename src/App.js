import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import './App.css';
import {incrementId, setId} from './action';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    componentWillMount() {
        this.props.setId(0);
    }
    handleChange(event) {
        this.setState({val: event.target.value});
    }
    submitComment() {
        $('#comments').append("<div id='comments_"+this.props.id+"'></div>");
        ReactDOM.render(<Comment store={this.props.store} componentId={this.props.id} comment={this.state.val}/>, document.getElementById('comments_'+this.props.id));
        this.props.incrementId();
    }
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.submitComment}>Submit</button>
                <div id="comments">
                </div>
            </div>
        );
     }
}

const mapStateToProps = (state) => {
    return {
        id: state.updateId.id
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({incrementId, setId}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
