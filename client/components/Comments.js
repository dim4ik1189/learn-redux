import React, { Component } from 'react';
import { Link } from 'react-router';

class Comments extends Component {
    handleSubmit (event) {
        event.preventDefault();
        const { postId } = this.props;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        if(!author || !comment) {
            return;
        }

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    renderComment(comment, index) {
        const { postId } = this.props;

        return (
            <div key={index} className="comment">
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={() => this.props.removeComment(postId, index)}>&times;</button>
                </p>
            </div>
        )
    }

    render() {
        return (
            <div className="comments">
                Inside of the comments
                { this.props.postComments.map(this.renderComment.bind(this)) }
                <form ref="commentForm" className="comment-form" onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" ref="author" placeholder="Author"/>
                    <input type="text" ref="comment" placeholder="Comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}

export default Comments;