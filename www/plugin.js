
var exec = require('cordova/exec');

var PLUGIN_NAME = 'MyCordovaPlugin';

cordova.plugins.MyCordovaPlugin = {
  echo: function (phrase, cb) {
    exec(cb, null, PLUGIN_NAME, 'echo', [phrase]);
  },
  getDate: function (cb) {
    exec(cb, null, PLUGIN_NAME, 'getDate', []);
  },
  greet: function (name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, PLUGIN_NAME, "greet", [name]);
  }
};

module.exports = MyCordovaPlugin;
