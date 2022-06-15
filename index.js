process.EventEmitter = require('events').EventEmitter;
var zetta = require('zetta');
var DataDevice = require('./data-device.js');

zetta()
  .name('Data streaming server')
  .use(DataDevice)
  .listen(1337, function(){
     console.log('Zetta is running at http://127.0.0.1:1337');
});