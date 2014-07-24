'use strict';

function Room(name, width, length){
  this.name    = name;
  this.width   = parseInt(width);
  this.length  = parseInt(length);
}

Room.prototype.area = function(){
  var area = this.width * this.length;
  return area;
};

Room.prototype.cost = function(){
  return 5 * this.area();
};


module.exports = Room;
