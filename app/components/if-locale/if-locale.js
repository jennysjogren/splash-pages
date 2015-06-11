import React from 'react';
import every from 'lodash/collection/every';
import { getMessage } from '../intl/intl';

export default class IfLocale extends React.Component {
  displayName = 'IfLocale'

  static propTypes = {
    domesticScheme: React.PropTypes.string,
    hasInstantSignup: React.PropTypes.bool,
    hasPercentagePricing: React.PropTypes.bool,
    children: React.PropTypes.node.isRequired,
  }

  static defaultProps = {
    tagName: 'span',
  }

  static contextTypes = {
    messages: React.PropTypes.object.isRequired,
  }

  render() {
    const propertiesList = {
      domesticScheme: 'local_scheme',
      hasInstantSignup: 'has_instant_signup',
      hasPercentagePricing: 'has_percentage_pricing',
    };

    const isVisible = every(propertiesList, function(messageName, propName) {
      return this.props[propName] === undefined ||
        this.props[propName] === getMessage(this.context.messages, 'country_properties.' + messageName);
    }, this);

    if (!isVisible) { return null; }
    return React.createElement(this.props.tagName, this.props, this.props.children);
  }
}
