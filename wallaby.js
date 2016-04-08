var wallabyWebpack = require('wallaby-webpack')
var webpackPostprocessor = wallabyWebpack({})

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'Source/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'Tests/**/*Spec.js', load: false }
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests()
    }
  }
}
