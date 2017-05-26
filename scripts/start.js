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

var http = require('http').Server(app)

var io = require('socket.io')(http)

io.on('connection', function(client){
  console.log('User connected!')
})

setInterval(function(){
  io.emit('text', 'New text\n')
}, 1000);

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
}


app.use(express.static(path.join(__dirname, '../public/')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});



http.listen(port, function () {
  console.log('Listening at http://localhost:' + port)
  openBrowser('http://localhost:8080');
})


