var webpack = require("webpack");
module.exports = function(config) {
  config.set({

    files: [
      'test/test.js'
    ],

    // frameworks to use
    frameworks: ['mocha'],

    preprocessors: {
      'test/test.js': ['webpack']
    },

    reporters: ['progress'],

    webpack: {
      // webpack configuration => makes karma-webpack work!
      optimization: {
        runtimeChunk: false,
        splitChunks: false
      },
      module: {
        rules: [
          {
            test: /\.js/,
            exclude: /(test|node_modules|bower_components)/,
            loader: 'istanbul-instrumenter'
          }
        ],
      },
      resolve: {
        modules: [
          "src",
          "node_modules"
        ]
      }
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },

    plugins: [
      require("karma-webpack"),
      require("istanbul-instrumenter-loader"),
      require("karma-mocha"),
      require("karma-chrome-launcher")
    ],

    browsers: ['ChromeHeadless']
  });
};