import React from 'react';
import IfLocale from '../if-locale/if-locale';

export default class StartTakingPaymentsCTA extends React.Component {
  displayName = 'StartTakingPaymentsCTA'

  render() {
    return (
      <IfLocale hasInstantSignup>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
              Sign up in minutes, take payments today
            </h2>
            <a href='/merchants/new' className='btn'>Start taking payments</a>
            <p className='u-color-p u-margin-Ts'>No set up costs, no hidden charges, no commitments</p>
          </div>
        </div>
      </IfLocale>
    );
  }
}
