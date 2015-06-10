import React from 'react';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import Link from '../../../components/link/link';
import IfLinkExists from '../../../components/if-link-exists/if-link-exists';
import FaqPage from '../faq-page';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class FaqMerchantsPage extends React.Component {
  displayName = 'FaqMerchantsPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Page isInverted={false}>
        <FaqPage
        category='faq.merchants'
        title={(<Message pointer='faq.title' />)}
        subtitle={(<IfLinkExists to='faq_customers'>
          <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
            Paid with GoCardless?&nbsp;
            <Link to='faq_customers' className='u-text-underline u-link-invert'>
              Read our FAQ for customers
            </Link>
          </p>
        </IfLinkExists>)}>
          {this.props.children}
        </FaqPage>
      </Page>
    );
  }
}
