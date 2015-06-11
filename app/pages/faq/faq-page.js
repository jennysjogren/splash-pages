import React from 'react';
import { filterRouteByCategory } from '../../router/route-helpers';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import { PropTypes } from '../../helpers/prop-types/prop-types';

export default class FaqPage extends React.Component {
  displayName = 'FaqPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };

  static contextTypes = {
    currentLocale: PropTypes.locale,
    availableLocales: PropTypes.array.isRequired,
  }

  render() {
    const { category } = this.props;
    const { currentLocale, availableLocales } = this.context;
    const pages = filterRouteByCategory(category, currentLocale, availableLocales);

    const faqNav = pages.map(function(page) {
      return (<li key={page.routeConfig.name}>
        <Link to={page.localeConfig.path} className='nav-tabs__link u-text-no-smoothing'>
          <Message pointer={`${page.routeConfig.name}.nav_title`} />
        </Link>
      </li>);
    });

    return (
      <div>
        <div>
          <div className='page-hero u-padding-Vxxl'>
            <div className='u-margin-Vxm u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                {this.props.title}
              </h1>
              { this.props.subtitle && (
                <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
                  {this.props.subtitle}
                </p>
              ) }
            </div>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl grid'>
          <div className='u-padding-Vxl'>
            <div className='grid__cell u-size-4of12'>
              <div>
                <div className='u-size-5of6'>
                  <ul className='nav nav-tabs'>
                    { faqNav }
                  </ul>
                  <hr className='u-size-11of12' />
                  <p className='para u-padding-Txs'>
                    <Message pointer='faq.sidebar' />&nbsp;
                    <Message pointer='phone_local' /><br/>
                    <Message pointer='email' />
                  </p>
                </div>
              </div>
            </div>

            <div className='grid__cell u-size-8of12'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
