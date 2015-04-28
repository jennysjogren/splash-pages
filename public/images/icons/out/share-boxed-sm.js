import React from 'react';

export default class ShareBoxedSmIcon extends React.Component {
  displayName = 'ShareBoxedSmIcon'

  static propTypes = {
    className: React.PropTypes.string.isRequired
  };

  render() {
    return (
      <svg className={this.props.className} xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" data-icon="share-boxed" data-container-transform="translate(0 1)" viewBox="0 0 16 16">
        <path d="M1.5 0c-.372 0-.773.148-1.063.438-.29.29-.438.69-.438 1.063v11c0 .372.148.773.438 1.063.29.29.69.438 1.063.438h11c.372 0 .773-.148 1.063-.438.29-.29.438-.69.438-1.063v-2.5h-2v2h-10v-10h4v-2h-4.5zm10.5 0v2c-4.262 0-7.753 3.383-7.969 7.594.337-2.01 3.094-3.594 4.969-3.594h3v2l4-4-4-4z"
        transform="translate(0 1)" />
      </svg>
    );
  }
}
