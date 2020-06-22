import React, { Component } from 'react';

class AdminMode extends Component {
    state = { 
        isAdmin: false
     }

    render() { 

        let button = this.state.isAdmin ? 
        <button className="button is-danger">Désactiver le mode d'administration</button>
        : <button className="button is-info">Activer le mode d'administration</button>;

        let classMessage = this.state.isAdmin ? "message is-danger" : "message is-info";
       
        return (         
        <article className={classMessage}>
            <div className="message-body">
                {button}
            </div>
        </article>
       );
    }
}
 
export default AdminMode;