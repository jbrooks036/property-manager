'use strict';

function Renter(name, age, gender, profession){
  this.name = name;
  this.age = parseInt(age);
  this.gender = gender;
  this.profession = profession;
  this.isEvicted = false;
  this.cash = Math.floor(Math.random()* 4901) + 100;
}

Renter.prototype.work = function(){
  this.cash += Math.floor(Math.random()* 7001) + 3000;
};



module.exports = Renter;
