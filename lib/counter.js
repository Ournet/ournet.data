'use strict';

var Promise = require('bluebird');

module.exports = Promise.promisifyAll(require('statefulco').counter);
