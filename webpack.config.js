const path = require('path');
const ExtractTextplugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSEtract = new ExtractTextPlugin('style.css');
    return{
    entry: ['./src/app.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
        loader:'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use: CSSEtract.extract({
                use:[
                    {
                        loader:'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
            // [
            //     'style-loader',
            //     'css-loader',
            //     'sass-loader'
            // ]
        }]
    },
    plugin: [
        CSSEtract
    ]
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './public'),

        historyApiFallback: true
}
    }

};