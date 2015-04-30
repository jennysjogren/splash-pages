import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './dev.config';

const debug = require('debug')('gocardless');

const devEnv = require('../config/dev-environment');

const WEBPACK_HOST = process.env.HOST || 'localhost';
const WEBPACK_PORT = parseInt(process.env.PORT) || devEnv.webpackPort;

const serverOptions = {
  contentBase: `http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
  quiet: true,
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
};

const compiler = webpack(config);
const webpackDevServer = new WebpackDevServer(compiler, serverOptions);

webpackDevServer.listen(WEBPACK_PORT, WEBPACK_HOST, () => {
  debug('Webpack development server listening on %s:%s', WEBPACK_HOST, WEBPACK_PORT);
});
