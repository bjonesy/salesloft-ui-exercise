const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: {
    main: [
      path.join(__dirname, '/../src/assets/js/main.js')
    ]
  },
});

module.exports = config;
