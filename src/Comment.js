import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {incrementId} from './action';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import './index.css';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {showNewCommentBox: false};
        this.showNewCommentBox = this.showNewCommentBox.bind(this);
    }
    createComponent(){
        this.setState({showNewCommentBox: false});
        $('#comments_'+this.props.componentId).append("<div id='comments_"+this.props.id+"'></div>");
        ReactDOM.render(<Comment store={this.props.store} componentId={this.props.id} comment={this.state.val}/>, document.getElementById('comments_'+this.props.id));
        this.props.incrementId();
    }
    showNewCommentBox() {
        this.setState({showNewCommentBox: true});
    }
    changeVal(event) {
        this.setState({val: event.target.value});
    }
    render() {
        return (
            this.state.showNewCommentBox ?
                <div className="commentBox">
                    <div>
                        <p>{this.props.comment}</p>
                    </div>
                    <input type="text" onChange={this.changeVal.bind(this)}/>
                    <button onClick={this.createComponent.bind(this)}>Submit</button>
                </div>
                :
                <div className="commentBox">
                    <p>{this.props.comment}</p>
                    <button onClick={this.showNewCommentBox}>Reply</button>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        id: state.updateId.id
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({incrementId}, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);