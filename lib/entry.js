'use strict';

var transportList = require('./transport-list');

var global = typeof global !== 'undefined' ? global : window

module.exports = require('./main')(transportList);

// TODO can't get rid of this until all servers do
if ('_sockjs_onload' in global) {
  setTimeout(global._sockjs_onload, 1);
}
