import React from 'react';

export default class AddPartnerIcon extends React.Component {
  displayName = 'AddPartnerIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} width="76" height="76" viewBox="0 0 76 76" xmlns="http://www.w3.org/2000/svg">
        <g fill="#0A0B09">
          <path d="M7.6 2.533h50.667c2.8 0 5.066 2.268 5.066 5.067v5.067h-60.8V7.6c0-2.8 2.268-5.067 5.067-5.067zm16.467 48.134H7.6c-2.8 0-5.067-2.28-5.067-5.067V15.2h60.8v10.133c0 .697.57 1.267 1.267 1.267s1.267-.57 1.267-1.267V7.6c0-4.193-3.408-7.6-7.6-7.6H7.6C3.407 0 0 3.407 0 7.6v38c0 4.194 3.407 7.6 7.6 7.6h16.467c.696 0 1.266-.57 1.266-1.267 0-.696-.57-1.266-1.266-1.266z"/>
          <path d="M10.133 10.133c1.394 0 2.534-1.138 2.534-2.533 0-1.393-1.14-2.533-2.534-2.533C8.74 5.067 7.6 6.207 7.6 7.6c0 1.395 1.14 2.533 2.533 2.533"/>
          <path d="M17.733 10.133c1.394 0 2.534-1.138 2.534-2.533 0-1.393-1.14-2.533-2.534-2.533-1.393 0-2.533 1.14-2.533 2.533 0 1.395 1.14 2.533 2.533 2.533"/>
          <path d="M25.333 10.133c1.394 0 2.534-1.138 2.534-2.533 0-1.393-1.14-2.533-2.534-2.533-1.393 0-2.533 1.14-2.533 2.533 0 1.395 1.14 2.533 2.533 2.533"/>
          <path d="M54.467 73.467c-10.476 0-19-8.524-19-19 0-10.474 8.524-19 19-19 10.475 0 19 8.526 19 19 0 10.476-8.525 19-19 19zm0-40.534c-11.87 0-21.534 9.652-21.534 21.534C32.933 66.335 42.598 76 54.467 76 66.335 76 76 66.335 76 54.467c0-11.882-9.665-21.534-21.533-21.534z"/>
          <path d="M63.333 53.2h-7.6v-7.6c0-.697-.57-1.267-1.266-1.267-.697 0-1.267.57-1.267 1.267v7.6h-7.6c-.697 0-1.267.57-1.267 1.267 0 .696.57 1.266 1.267 1.266h7.6v7.6c0 .697.57 1.267 1.267 1.267.696 0 1.266-.57 1.266-1.267v-7.6h7.6c.697 0 1.267-.57 1.267-1.266 0-.697-.57-1.267-1.267-1.267"/>
        </g>
      </svg>
      
    );
  }
}
