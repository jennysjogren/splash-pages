import React from 'react';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import Link from '../../../components/link/link';
import IfLinkExists from '../../../components/if-link-exists/if-link-exists';
import FaqPage from '../faq-page';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class FaqCustomersPage extends React.Component {
  displayName = 'FaqCustomersPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Page isInverted={false}>
        <FaqPage
        category='faq.customers'
        title={(<Message pointer='faq.title' />)}
        subtitle={(<IfLinkExists to='faq_merchants'>
          <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
            Taking payments?&nbsp;
            <Link to='faq_merchants' className='u-text-underline u-link-invert'>
              Read our FAQ for merchants
            </Link>
          </p>
        </IfLinkExists>)}>
          {this.props.children}
        </FaqPage>
      </Page>
    );
  }
}
