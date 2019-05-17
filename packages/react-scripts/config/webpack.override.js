const path = require('path')

const configFactory = require('./webpack.config');
const paths = require('./paths');

module.exports = function(webpackEnv) {
  const overrideConfigPath = path.join(paths.appPath, 'webpack.override.js')
  const config = configFactory(webpackEnv)
  try {
    require.resolve(overrideConfigPath)
    require(overrideConfigPath)(webpackEnv, configFactory(webpackEnv))
  } catch(e) {}
  return configFactory(webpackEnv)
};
