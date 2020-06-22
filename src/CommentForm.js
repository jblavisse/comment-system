import React, { Component } from 'react';

class CommentForm extends Component {
    state = {  
        name: "",
        message: ""
    }


    handleChangeName = (e) => {
        this.setState({
        name:  e.target.value
        })
    }

    handleChangeMessage = (e) => {
        this.setState({
        message:  e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.name, this.state.message);
    }


    render() { 
        return (
            <div className="CommentForm">

                <h2 className="title is-2">Ajouter un commentaire</h2>
                <form onSubmit={this.handleSubmit} >

                <input type="text" placeholder="Your name"
                onChange={this.handleChangeName} 
                value={this.state.name} />

                <textarea placeholder="Your comment"
                onChange={this.handleChangeMessage}
                value={this.state.message}
                cols="30" rows="10"></textarea>

                <button className="button is-primary">Comment</button>
                </form>
            </div>
          );
    }
}
 
export default CommentForm;