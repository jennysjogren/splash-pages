import React from 'react';

export default class XIcon extends React.Component {
  displayName = 'XIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} role="img" aria-label="Cross" width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      	<title>Cross</title>
        <g>
        <path d="M13.06 10.58L9.48 7l3.58-3.58c.05-.066.08-.13.08-.212 0-.08-.03-.146-.08-.21L11.002.94c-.064-.05-.13-.08-.21-.08-.08 0-.146.03-.21.08L7 4.52 3.42.94C3.353.89 3.29.86 3.207.86c-.08 0-.145.03-.21.08L.94 2.998c-.05.064-.08.13-.08.21 0 .08.03.146.08.21L4.52 7 .94 10.58c-.05.066-.08.13-.08.212 0 .08.03.145.08.21l2.058 2.058c.065.05.13.08.21.08.08 0 .146-.03.21-.08L7 9.48l3.58 3.58c.066.05.13.08.212.08.08 0 .146-.03.21-.08l2.058-2.058c.05-.065.08-.13.08-.21 0-.08-.03-.146-.08-.21z"/>
        </g>
      </svg>
      
    );
  }
}
