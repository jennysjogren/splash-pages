import React from 'react';
import Router from 'react-router';
import {getRoutes} from '../router/routes';
import _ from 'lodash';

// Mark svg-injector as a dependency.
import 'svg-injector';
// Import the intl polyfill if we need it.
import '../helpers/intl-polyfill/intl-polyfill';

function renderApp() {
  var appState = window.app;
  var routes = getRoutes(appState.locales, appState.availableLocales);
  var mountNode = document.getElementById('root');

  var router = Router.create({
    routes: routes,
    location: Router.HistoryLocation,
  });

  router.run(function(Handler, state) {
    var stateName = _.result(_.find(state.routes.slice().reverse(), 'name'), 'name');
    var stateProps = _.extend(appState, {
      stateName: stateName,
    });

    React.render(<Handler {...stateProps} />, mountNode, () => {
      console.log('App has been mounted.');
    });
  });
}

renderApp();
