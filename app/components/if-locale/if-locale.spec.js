import IfLocale from './if-locale';
import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import { PropTypes } from '../../helpers/prop-types/prop-types';

function ifLocaleWithContext(context) {
  return class extends React.Component {
    static childContextTypes = {
      messages: PropTypes.object.isRequired,
    }

    getChildContext() {
      return context;
    }

    render() {
      return <IfLocale {...this.props} />;
    }
  };
}

function renderText(component) {
  const result = ReactTestUtils.renderIntoDocument(component);
  const elements = ReactTestUtils.scryRenderedDOMComponentsWithTag(result, 'span');

  if (elements.length === 0) {
    return null;
  } else if (elements.length === 1) {
    const element = ReactTestUtils.findRenderedDOMComponentWithTag(result, 'span');
    return element.getDOMNode().textContent;
  }
}

describe('IfLocale Component', () => {

  describe('where the domesticScheme property is specified', () => {
    describe('and matches the current locale scheme', () => {
      it('it shows the message', () => {
        const TestIfLocale = ifLocaleWithContext({
          messages: {
            country_properties: {
              local_scheme: 'bacs',
            },
          },
        });

        const component = (
          <TestIfLocale domesticScheme='bacs'>
            Bacs message
          </TestIfLocale>
        );

        expect(renderText(component)).toEqual('Bacs message');
      });
    });

    describe('and doesn\'t match the current locale scheme', () => {
      it('it doesn\'t show the message', () => {
        const TestIfLocale = ifLocaleWithContext({
          messages: {
            country_properties: {
              local_scheme: 'sepa',
            },
          },
        });

        const component = (
          <TestIfLocale domesticScheme='bacs'>
            Bacs message
          </TestIfLocale>
        );

        expect(renderText(component)).toEqual(null);
      });
    });
  });

  describe('where the hasInstantSignup property is specified', () => {
    describe('and instant signup is available', () => {
      it('it shows the message', () => {
        const TestIfLocale = ifLocaleWithContext({
          messages: {
            country_properties: {
              has_instant_signup: true,
            },
          },
        });

        const component = (
          <TestIfLocale hasInstantSignup>
            Sign up
          </TestIfLocale>
        );

        expect(renderText(component)).toEqual('Sign up');
      });
    });

    describe('and instant signup isn\'t available', () => {
      it('it doesn\'t show the message', () => {
        const TestIfLocale = ifLocaleWithContext({
          messages: {
            country_properties: {
              has_instant_signup: false,
            },
          },
        });

        const component = (
          <TestIfLocale hasInstantSignup>
            Sign up
          </TestIfLocale>
        );

        expect(renderText(component)).toEqual(null);
      });
    });
  });

  describe('where the hasPercentagePricing property is specified', () => {
    describe('and percentage pricing is available', () => {
      it('it shows the message', () => {
        const TestIfLocale = ifLocaleWithContext({
          messages: {
            country_properties: {
              has_percentage_pricing: true,
            },
          },
        });

        const component = (
          <TestIfLocale hasPercentagePricing>
            foo
          </TestIfLocale>
        );

        expect(renderText(component)).toEqual('foo');
      });
    });

    describe('and percentage pricing isn\'t available', () => {
      it('it doesn\'t show the message', () => {
        const TestIfLocale = ifLocaleWithContext({
          messages: {
            country_properties: {
              has_percentage_pricing: false,
            },
          },
        });

        const component = (
          <TestIfLocale hasPercentagePricing>
            foo
          </TestIfLocale>
        );

        expect(renderText(component)).toEqual(null);
      });
    });
  });


});
