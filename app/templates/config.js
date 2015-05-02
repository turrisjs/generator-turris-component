var path = require('path');

module.exports = {
    path: path.join(__dirname, 'ui-test'),
    testEntryPoint: path.join(__dirname, 'test', 'index.jsx'),
    webpackConfig: {
        debug: require('./webpack.config.js'),
        production: require('./webpack.config.prod.js'),
    },
};
