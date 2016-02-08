var webpack = require('webpack');
var path = require('path');

module.exports = function (options) {
    var entry = [
        options.entry
    ];

    var output = {
        path: __dirname + '/build',
        filename: options.filename,
        pathinfo: options.minimize ? false: true,
        umdNamedDefine: true
    };

    var resolve = {
        root: path.resolve('./js'),
        extensions: ['', '.js']
    };

    var externals = {
        react: 'React',
        'react/addons': 'React',
        lodash: '_',
        jquery: '$',
        'editor-ui-lib': 'UI'
    };

    var plugins = [
        new webpack.NoErrorsPlugin()
    ];

    if (options.minimize) {
        plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}));
    }

    return {
        entry: entry,
        output: output,
        module: {
            loaders: [
                {test: /\.rt/, loader: "react-templates-loader"}
            ]
        },
        resolve: resolve,
        plugins: plugins,
        externals: options.externals || externals
    };
};