/* globals blanket, module */

var options = {
  modulePrefix: 'gtfriender-web-interface',
  filter: '//.*gtfriender-web-interface/.*/',
  antifilter: '//.*(tests|template).*/',
  loaderExclusions: [],
  enableCoverage: true,
  cliOptions: {
    reporters: ['lcov', 'json'],
    autostart: true,
    lcovOptions: {
      outputFile: 'lcov.info',
      renamer: function(moduleName){
        var expression = /^gtfriender-web-interface/;
        return moduleName.replace(expression, './app') + '.js';
      }
    }
  }
};
if (typeof exports === 'undefined') {
  blanket.options(options);
} else {
  module.exports = options;
}
