import React from 'react';

class OpenButton extends React.Component {
  constructor() {
    super();

    const urlParams = new URLSearchParams(window.location.search);
    const returnPath = urlParams.get('r');
    this.verb = returnPath ? 'back' : 'open';
    this.object = returnPath ? ' to flowra' : 'flowra';
    this.href = 'https://www.flowra.com' + (returnPath ? returnPath : '/');
  }

  render() {
    return  <a href={this.href} className="btn cta primary">
              {this.verb}<span>{this.object}</span>
            </a>;
  }
}

export default OpenButton;
