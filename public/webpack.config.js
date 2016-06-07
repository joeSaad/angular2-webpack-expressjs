module.exports = {
    entry: "./app/index.ts",
    output: {
        filename: "./dist/bundle.js",
        path: __dirname
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts',  '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    proxy: {
      '/data': {
        target: 'http://localhost:3000/',
        secure: false
      }
    },
    watch: true,
    noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
};