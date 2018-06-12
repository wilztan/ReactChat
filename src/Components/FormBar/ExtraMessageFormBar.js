import React, { Component } from 'react';
import './ExtraMessageFormBar.css'

export default class ExtraMessageFormBar extends Component {
  constructor(){
    super();
    this.state={
    };
  }

  render() {
    return (
      <div className="form-extra">
        <div>
          <div>
            <form>
              <input type="file" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
