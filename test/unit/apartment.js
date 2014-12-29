/* jshint expr:true */
/* global describe, it, before, beforeEach */

'use strict';

var expect = require('chai').expect;
var connect = require('../../app/lib/mongodb');
var Mongo = require('mongodb');
var Renter = require('../../app/models/renter');
var Room = require('../../app/models/room');
var Apartment = require('../../app/models/apartment');

var apt1, apt2, apt3;

describe('Apartment', function(){
  before(function(done){
    connect('property-manager-test', function(){
      Apartment = require('../../app/models/apartment');
      done();
    });
  });

  beforeEach(function(done){
    global.mongodb.collection('apartments').remove(function(){
      done();
    });
  });


  describe('constructor', function(){
    it('should create an apartment', function(){

      expect(aptA1).to.be.instanceof(Apartment);
      expect(aptA1.name).to.equal('A1');
    });
  });

  describe('#area', function(){
    it('should calculate the apartment area', function(){

      console.log(aptA1.area());

      expect(aptA1.area()).to.equal(418);
    });
  });

  describe('#cost', function(){
    it('should calculate the apartment cost', function(){
      expect(aptA1.cost()).to.equal(2090);
    });
  });

  describe('#bedrooms', function(){
    it('should calculate the number of bedrooms', function(){
     console.log('test bedrooms' + this);
      expect(aptA1.bedrooms()).to.equal(1);
    });
  });

  describe('#isAvailable', function(){
    it('should determine if at least one bedroom is available', function(){

      expect(aptA1.isAvailable()).to.be.false;
      expect(aptB1.isAvailable()).to.be.true;
    });
  });

  describe('#purgeEvicted', function(){
    it('should purge evicted renters from A2', function(){

      aptA2.renters[0].isEvicted = true;

      aptA2.purgeEvicted();

      for(var i = 0; i < aptA2.renters.length; i++){
        expect(aptA2.renters[i].isEvicted).to.be.false; 
      }
    });

    it('should purge evicted renters from A3', function(){

      aptA3.purgeEvicted();

      for(var i = 0; i < aptA3.renters.length; i++){
        expect(aptA3.renters[i].isEvicted).to.be.false; 
      }
    });
  });

  describe('#collectRent', function(){
    it('should collect rent from renters of aptA1', function(){
      console.log(aptA1.cost());
      console.log(aptA1.renters);

      renter01.cash = 4000;

      aptA1.collectRent();

      console.log(aptA1.renters);
      expect(renter01.cash).to.equal(4000 - aptA1.cost());

    });
  });

  describe('#collectRent', function(){
    it('should collect rent from the renters of AptA3', function(){
      console.log(aptA3.cost());
      console.log(aptA3.renters);

      renter04.cash = 3000;
      renter05.cash = 200;
      renter06.cash = 5000;

      aptA3.collectRent();

      console.log(aptA3.renters);
      expect(renter04.cash).to.be.closeTo((3000 - aptA3.cost()/aptA3.renters.length),1);
      expect(renter05.cash).to.equal(200);
      expect(renter06.cash).to.be.closeTo((5000 - aptA3.cost()/aptA3.renters.length),1);

    });
  });

});


//Renters

var renter01 = new Renter('renterA', 20, 'female', 'Movie Star');
var renter02 = new Renter('renterB', 45, 'male', 'Coder');
var renter03 = new Renter('renterC', 60, 'female', 'MSW');
var renter04 = new Renter('renterD', 55, 'male', 'Waiter');
var renter05 = new Renter('renterE', 23, 'female', 'MSW');
var renter06 = new Renter('renterF', 38, 'male', 'Movie Star');
var renter07 = new Renter('renterG', 18, 'female', 'Waiter');
var renter08 = new Renter('renterH', 37, 'male', 'Coder');
var renter09 = new Renter('renterI', 23, 'female', 'Coder');
var renter10 = new Renter('renterJ', 62, 'female', 'Coder');
var renter11 = new Renter('renterK', 36, 'male', 'Waiter');
var renter12 = new Renter('renterL', 44, 'female', 'Movie Star');
var renter13 = new Renter('renterM', 68, 'male', 'Coder');
var renter14 = new Renter('renterN', 49, 'female', 'MSW');
var renter15 = new Renter('renterO', 19, 'male', 'Waiter');

//Rooms

var room01 = new Room('Living', '09', '10');
var room02 = new Room('Living', '12', '12');
var room03 = new Room('Living', '14', '17');
var room04 = new Room('Living', '20', '20`');
var room05 = new Room('Dining', '19', '12');
var room06 = new Room('Dining', '13', '07');
var room07 = new Room('Dining', '20', '10');
var room08 = new Room('Dining', '15', '09');
var room09 = new Room('Bed', '10', '10');
var room10 = new Room('Bed', '08', '09');
var room11 = new Room('Bed', '12', '15');
var room12 = new Room('Bed', '14', '15');
var room13 = new Room('Bed', '08', '08');
var room14 = new Room('Bed', '11', '11');
var room15 = new Room('Bed', '12', '12');

//Apartments

var aptA1 = new Apartment('A1', [room01, room05, room09], [renter01]);
var aptA2 = new Apartment('A2', [room02, room06, room10, room11], [renter02, renter03]);
var aptA3 = new Apartment('A3', [room03, room07, room12, room13, room14], [renter04, renter05, renter06]);
var aptB1 = new Apartment('B1', [room04, room08, room15], []);
