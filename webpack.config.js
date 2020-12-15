const commonPaths = require('./webpack/paths');

module.exports = {
    entry: commonPaths.entryPath,
    output: {
        path: commonPaths.outputPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: commonPaths.outputPath,
        open: true,
        port: 8081
    },
};
