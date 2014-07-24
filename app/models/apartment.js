'use strict';

function Apartment(name){
  this.name = name;
  this.rooms = [];
  this.renters = [];
}

Apartment.prototype.area = function(){
  var sum = 0;

  for(var i = 0; i < this.rooms.length; i++){
    sum += this.rooms[i].area;
  }
  
  return sum;
};

Apartment.prototype.cost = function(){

};
module.exports = Apartment;
