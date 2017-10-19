const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
    devtool: '#source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                },
                enforce: 'post',
                exclude:[ /node_modules/, /test/]
            }
        ],
    },
});

