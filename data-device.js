const minUvIndex = 1;
const maxUvIndex = 11;
const threshold = 6;

Device = require('zetta').Device;
var util = require('util');

// Set up Data class
var DataDevice = module.exports = function() {
  Device.call(this);
}

util.inherits(DataDevice, Device);

DataDevice.prototype.init = function(config) {

  // Class metadata
  config
    .type('data')
    .name('state_machine_data')
    .state('ready')
    .stream('value', this.streamValue);

  // Set up state machine
  config
    .when('ready', { allow: ['write'] })
    .map('write', this.write, [{ type: 'text', name: 'textToWrite' }])
    .monitor('written');
}

DataDevice.prototype.write = function(textToWrite, cb) {
  this.written = textToWrite;
  console.log("Received from client: " + this.written);
  cb();
}
DataDevice.prototype.streamValue = function(stream) {
    setInterval(function(){
      let uvIndex = Math.floor(Math.random() * (maxUvIndex - minUvIndex + 1) + minUvIndex);
      if(uvIndex >= threshold )
      {
        stream.write(uvIndex);
      }
        
    }, 3000);
  }