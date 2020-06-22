import React, { Component } from 'react';

class CommentList extends Component {
    render() { 
        let commentsList = this.props.comments.map(comment => {
            return <li key={comment.id} >{comment.name}: {comment.message}</li>
         })

        return (
            <ul className="comment-list">
                {commentsList}
            </ul>
          );
    }
}
 
export default CommentList;