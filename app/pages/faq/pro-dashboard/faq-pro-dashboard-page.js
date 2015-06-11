import React from 'react';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import FaqPage from '../faq-page';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class FaqProDashboardPage extends React.Component {
  displayName = 'FaqProDashboardPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Page isInverted={false}>
        <FaqPage
        category='faq.pro_dashboard'
        title={(<Message pointer='faq_pro_dashboard.faq_title' />)}
        subtitle={(<Message pointer='faq_pro_dashboard.title' />)}>
          {this.props.children}
        </FaqPage>
      </Page>
    );
  }
}
