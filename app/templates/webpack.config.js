var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    debug: true,
    context: path.resolve(__dirname),
    entry: './ui-test/ui-test.jsx',
    output: {
        path: path.join(__dirname, 'ui-test'),
        filename: 'component.min.js',
    },
    resolve: {
        root: path.resolve(__dirname),
    },
};
