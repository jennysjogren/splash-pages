import React from 'react';

export default class TickXsmallIcon extends React.Component {
  displayName = 'TickXsmallIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
        <g fill="#1B1A19">
          <path d="M9.375 16.663c-.133 0-.267-.052-.368-.146l-2.604-2.604c-.204-.208-.204-.542 0-.74.203-.208.532-.208.737 0l2.247 2.25 7.445-6.948c.21-.197.54-.187.737.02.195.21.183.543-.027.74L9.73 16.53c-.1.09-.227.133-.355.133"/>
          <path d="M12.5 1.042C6.182 1.042 1.042 6.188 1.042 12.5c0 6.323 5.14 11.458 11.458 11.458 6.32 0 11.458-5.135 11.458-11.458 0-6.313-5.14-11.458-11.458-11.458zM12.5 25C5.607 25 0 19.396 0 12.5S5.607 0 12.5 0 25 5.604 25 12.5 19.393 25 12.5 25z"/>
        </g>
      </svg>
      
    );
  }
}
