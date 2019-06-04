import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        const { postId } = this.props.params;

        //index of the post
        const i = this.props.posts.findIndex((post) => post.code === postId);

        //get the post
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo post={post} index={i} {...this.props}/>
                <Comments postId={postId} postComments={postComments} {...this.props}/>
            </div>
        )
    }
}

export default Single;
