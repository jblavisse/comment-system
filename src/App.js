import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    name: "",
    comment: "",
    comments: [  
      { name: "JB", message: "Youhou la famille!"},
      { name: "Kirikou", message: "Je ne suis pas grand mais je suis vaillant"}
    ]
   }

  handleSubmit = (e) => {
    e.preventDefault();
    let newComment = {
      name: this.state.name,
      message: this.state.comment
    }

    this.setState({
      comments: [...this.state.comments,newComment]
    })
  }


  handleChangeName = (e) => {
    this.setState({
      name:  e.target.value
    })
  }

  handleChangeComment = (e) => {
    this.setState({
      comment:  e.target.value
    })
  }

  render() { 

    let commentsList = this.state.comments.map(comment => {
       return <li>{comment.name}: {comment.message}</li>
    })

    return ( 
      <div className="App">
        <h2>Say something</h2>
        <form onSubmit={this.handleSubmit} >

          <input type="text" placeholder="Your name"
          onChange={this.handleChangeName} 
          value={this.state.name} />

          <textarea placeholder="Your comment"
          onChange={this.handleChangeComment}
           value={this.state.comment}
           cols="30" rows="10"></textarea>

          <button>Comment</button>
        </form>

        <ul>{commentsList}</ul>
      </div>
     );
  }
}
 
export default App;