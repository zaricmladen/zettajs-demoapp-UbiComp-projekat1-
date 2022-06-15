process.EventEmitter = require('events').EventEmitter;

var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
var Photocell = require('zetta-photocell-mock-driver');
var duskToDawnLight = require('./apps/dusk_to_dawn_light');
var StateMachineScout = require('./scout.js');
var StateMachineApp = require('./apps/app.js');

zetta()
  .name('DuskTillDawnServer')
  .use(LED)
  .use(Photocell)
  .use(duskToDawnLight)
  .use(StateMachineScout)
  .use(StateMachineApp)
  .listen(1337, function(){
  console.log('Zetta is running at http://127.0.0.1:1337');
});