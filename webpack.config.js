'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
    let srcPath = [path.resolve(__dirname, 'frontend/src')];
    let modulePath = [path.resolve('.'), path.join(__dirname, 'node_modules')];

    let webpackConfig = {
        performance: { hints: false },
        mode: argv.mode,
        entry: path.resolve(__dirname, 'frontend/src/index.js'),
        devtool: argv.mode === 'development' ? 'eval-source-map' : 'none',
        resolve: {
            modules: modulePath,
            alias: {
                common: path.resolve(__dirname, 'frontend/src/common'),
                resources: path.resolve(__dirname, 'frontend/resources'),
                services: path.resolve(__dirname, 'frontend/src/services'),
                components: path.resolve(__dirname, 'frontend/src/components')
            }
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: srcPath,
                    use: [{ loader: 'babel-loader' }]
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'source-map-loader',
                    include: srcPath,
                    enforce: 'pre'
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                output: { path: path.join(__dirname, 'dist') }
                            }
                        }
                    ],
                    include: [
                        path.resolve(__dirname, 'frontend/resources'),
                        path.join(__dirname, 'node_modules')
                    ]
                },
                {
                    test: /\.(jpg|png|gif|svg|ico|ttf|woff|woff2|eot|ico)(\?.*)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                output: { path: path.join(__dirname, 'dist') }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'frontend/index.html')
            })
        ],
        devServer: {
            historyApiFallback: {
                rewrites: [
                    {
                        from: '/movie/bundle.js',
                        to: 'http://localhost:9000/bundle.js'
                    },
                    { from: /.png/, to: '/movie' }
                ]
            },
            port: 9000,
            proxy: {
                '/api/*': 'http://localhost:3000'
            }
        }
    };
    if (argv.mode === 'production') {
        webpackConfig.plugins.push(new TerserPlugin());
    }
    return webpackConfig;
};
