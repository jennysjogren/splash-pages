import React from 'react';

export default class TickIcon extends React.Component {
  displayName = 'TickIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} width="76" height="76" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
        <g fill="#1B1A19">
          <path d="M52.612 25.713L29.55 47.247l-7.122-7.092c-.494-.508-1.296-.508-1.79 0-.495.38-.495 1.266 0 1.772l7.985 7.98c.246.253.57.38.896.38.308 0 .618-.127.863-.38l23.956-22.42c.51-.38.54-1.266.06-1.774-.476-.506-1.28-.506-1.788 0"/>
          <path d="M38 73.467C18.444 73.467 2.533 57.633 2.533 38 2.533 18.493 18.443 2.533 38 2.533S73.467 18.493 73.467 38c0 19.633-15.91 35.467-35.467 35.467zM38 0C17.047 0 0 17.1 0 38c0 21.027 17.047 38 38 38s38-16.973 38-38C76 17.1 58.953 0 38 0z"/>
        </g>
      </svg>
      
    );
  }
}
