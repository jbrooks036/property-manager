'use strict';

function Apartment(name,rooms,renters){
  this.name = name;
  this.rooms = rooms;
  this.renters = renters;
}

Apartment.prototype.area = function(){
  var sum = 0;

  for(var i = 0; i < this.rooms.length; i++){
    sum += this.rooms[i].area();
  }
  
  return sum;
};

Apartment.prototype.cost = function(){
  return this.area() * 5;
};

Apartment.prototype.bedrooms = function(){
  var sum = 0;

  for(var i = 0; i < this.rooms.length; i++){
    if(this.rooms[i].name === 'Bed'){
      sum++;
    }
  }
  return sum;
};

Apartment.prototype.isAvailable = function(){
  return (this.bedrooms() > this.renters.length);
};

Apartment.prototype.purgeEvicted = function(){
  for (var i= (this.renters.length - 1); i >= 0; i--) { 
    if (this.renters[i].isEvicted) {
      this.renters.splice(i,1);
    }
  }
};

Apartment.prototype.collectRent = function(){
  var rent = this.cost() / this.renters.length;

  for (var i= 0; i < this.renters.length; i++) { 
    console.log('i=' + i + this.renters[i]);
    this.renters[i].payRent(rent);
    console.log('i=' + i + this.renters[i]);
  }
};

module.exports = Apartment;
