import React from 'react';

export default class SecurityIcon extends React.Component {
  displayName = 'SecurityIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} width="54" height="76" viewBox="0 0 54 76" xmlns="http://www.w3.org/2000/svg">
        <g fill="#1B1A19">
          <path d="M25.714 50.31v8.665c0 .71.576 1.266 1.286 1.266.71 0 1.286-.556 1.286-1.265V50.31c.765-.443 1.285-1.252 1.285-2.177 0-1.394-1.152-2.533-2.57-2.533s-2.57 1.14-2.57 2.533c0 .925.52 1.734 1.284 2.178"/>
          <path d="M2.57 32.933h48.86v40.532H2.57V32.933zm7.716-12.668c0-8.562 6.716-17.733 16.714-17.733 10 0 16.714 9.17 16.714 17.733V30.4H10.286V20.265zm36 10.135V20.265C46.286 10.475 38.536 0 27 0 15.465 0 7.714 10.475 7.714 20.265V30.4H0V76h54V30.4h-7.714z"/>
        </g>
      </svg>
      
    );
  }
}
