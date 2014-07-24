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
  switch (this.profession) {
    case 'Movie Star':
      this.cash += Math.floor(Math.random()* 7001) + 3000;
      break;
    case 'Coder':
      this.cash += Math.floor(Math.random()* 6001) + 1000;
      break;
    case 'Waiter':
      this.cash += Math.floor(Math.random()* 201) + 50;
      break;
    case 'MSW':
      this.cash += Math.floor(Math.random()* 601) + 150;
      break;
  }
};

Renter.prototype.payRent = function(amt){
  if(this.isEvicted){return;}

  amt = parseInt(amt);

  if(this.cash < amt){
    this.isEvicted = true;
  }else{
    this.cash -= amt;
  }
};

Renter.prototype.party = function(){

  var decibels = Math.floor(Math.random()* 10) + 1;
  if (decibels > 8) {
    this.isEvicted = true;
  }
};

module.exports = Renter;
