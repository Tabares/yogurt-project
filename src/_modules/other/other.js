'use strict';

// Constructor
var Other = function() {
  this.name = 'other';
  console.log('%s module', this.name);
};

module.exports = Other;
