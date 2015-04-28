import React from 'react';

export default class PartnerIcon extends React.Component {
  displayName = 'PartnerIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} width="56" height="76" viewBox="0 0 56 76" xmlns="http://www.w3.org/2000/svg">
        <g fill="#1B1A19">
          <path d="M2.545 63.332h50.91v10.133H2.546V63.332zM22.91 51.324c1.384.684 2.916 1.078 4.538 1.078 1.076 0 2.115-.177 3.097-.495v3.586l10.998 2.228c1.044.306 2.15 1.23 2.138 2.624v.456H11.21l.008-.483c0-1.127.917-2.254 2.08-2.584l9.61-2.267v-4.142zm-3.422-13.427c1.077-3.71 4.236-6.395 7.96-6.395 3.866 0 7.12 2.9 8.062 6.826-.534.242-1.323.393-2.265.253-.65-.1-2.244-.48-3.072-2.013-.19-.354-.538-.595-.936-.657-.396-.065-.8.076-1.086.353-2.555 2.546-6.44 2.635-8.662 1.634zm-.386 2.546c2.865 1.014 6.778.71 9.724-1.43 1.016 1.1 2.428 1.837 4.046 2.076.373.05.742.077 1.098.077.65 0 1.26-.103 1.82-.266-.1 4.965-3.804 8.967-8.342 8.967-4.608 0-8.357-4.13-8.357-9.183 0-.09.01-.165.012-.24zm-1.284-24.915v8.54c0 .694.57 1.264 1.273 1.264h15.275c.7 0 1.273-.57 1.273-1.265v-8.54h17.818V60.8h-7.23v-.456c.026-2.307-1.616-4.383-4.085-5.08l-9.048-1.836v-2.75c3.144-2.052 5.257-5.763 5.257-9.994 0-6.46-4.89-11.717-10.902-11.717-6.01 0-10.903 5.257-10.903 11.717 0 3.547 1.486 6.74 3.82 8.88v3.9l-7.71 1.825c-2.308.657-3.983 2.773-3.983 5.015l-.01.495H2.546V15.528h15.273zm2.546-6.66c0-4.107 1.014-6.336 6.363-6.336 5.35 0 6.365 2.23 6.365 6.335V22.8H20.364V8.867zm34.365 4.127H35.637V8.867c0-4.13-1.02-8.867-8.91-8.867-7.897 0-8.91 4.736-8.91 8.867v4.128H1.273C.57 12.995 0 13.565 0 14.26v60.472C0 75.43.57 76 1.273 76H54.73c.7 0 1.27-.57 1.27-1.268v-60.47c0-.697-.57-1.267-1.27-1.267z"/>
          <path d="M26.727 10.132c-.7 0-1.272-.57-1.272-1.265 0-.697.57-1.267 1.272-1.267.703 0 1.273.57 1.273 1.267 0 .695-.57 1.265-1.273 1.265zm0-5.065c-2.105 0-3.818 1.696-3.818 3.8 0 2.088 1.712 3.8 3.817 3.8 2.107 0 3.818-1.712 3.818-3.8 0-2.104-1.71-3.8-3.818-3.8z"/>
          <path d="M34.364 68.4H47.09v2.533H34.365V68.4z"/>
        </g>
      </svg>
      
    );
  }
}
