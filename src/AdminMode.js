import React, { Component } from 'react';

class AdminMode extends Component {
    state = { 
        isAdmin: true
     }
    render() { 
        let button;

        if(this.state.isAdmin) { 
            button = <button className="button is-danger">Désactiver le mode d'administration</button>

        } 
        else { 
            button = <button className="button is-info">Activer le mode d'administration</button>
         } 
        
        return (         
        <article className="message is-info">
            <div className="message-body">
                {button}
            </div>
        </article>
       );
    }
}
 
export default AdminMode;