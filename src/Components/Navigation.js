import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

const url ='https://nodechatserver123.herokuapp.com/'
const socket = socketIOClient(url);


class Navigation extends Component {
  constructor(){
    super();
    this.state={
    };
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}


export default Navigation;
