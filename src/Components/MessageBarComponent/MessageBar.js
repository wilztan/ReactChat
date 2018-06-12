import React, { Component } from 'react';
import './MessageBar.css';

export default class MessageBar extends Component {
  render(){
    const {user,message,time,position} = this.props;
    return(
      <div className={position===0? "message-friend" : "message-me"}>
        <div className="messageBubble">
          <div className="buble-username">{user}</div>
          <div className="buble-message">{message}</div>
          <small >{time}</small>
        </div>
      </div>
    )
  }
}
