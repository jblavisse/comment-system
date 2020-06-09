import React, { Component } from 'react';

class CommentList extends Component {
    render() { 

        //this.props.comments
        /* [  
        { name: "JB", message: "Youhou la famille!"},
        { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
        ] */ 

        let commentsList = this.props.comments.map(comment => {
            return <li>{comment.name}: {comment.message}</li>
         })

        /* [
        <li>JB: Youhou la famille!</li>,
        <li>Kirikou: Je ne suis pas grand mais je suis vaillant</li>
       ] */  


        return (
            <ul className="comment-list">
                {commentsList}
            </ul>
          );
    }
}
 
export default CommentList;