'use strict';

process.env.NODE_ENV = 'development';

const express = require('express')
const webpack = require('webpack')
const config = require('../config/webpack.config.dev');
const path = require('path')
const openBrowser = require('react-dev-utils/openBrowser');

var port = process.env.PORT || 8080

var app = express()
var compiler = webpack(config)



// If this is in development mode, then enable hot reloading
if (process.env.NODE_ENV === 'development') {
  console.log('dev')
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }))
  
  app.listen(port, function () {
    console.log('Listening at http://localhost:' + port)
  })
}else{
  app.listen(port, function () {
    console.log('Listening at http://localhost:' + port)
  })  
}

app.use(express.static(path.join(__dirname, '../public/')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


openBrowser('http://localhost:8080');