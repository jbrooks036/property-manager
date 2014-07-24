/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
// var connect = require('../../app/lib/mongodb');
// var Mongo = require('mongodb');
var Renter = require('../../app/models/renter');
// var Item;

describe('Renter', function(){
  describe('constructor', function(){
    it('should create a new Renter object', function(){
      var renter = new Renter('Agnes', '39', 'female', 'Movie Star');
      expect(renter).to.be.instanceof(Renter);
      expect(renter.name).to.equal('Agnes');
      expect(renter.age).to.equal(39);
      expect(renter.gender).to.equal('female');
      expect(renter.cash).to.be.within(100, 5000);
      expect(renter.isEvicted).to.be.false;
      expect(renter.profession).to.equal('Movie Star');
    });
  });

  describe('#work',function(){
    it('should increase cash', function(){
      var renter = new Renter('Agnes', '39', 'female', 'Movie Star');
      renter.cash = 2000;

      renter.work();

      expect(renter.cash).to.be.within(5000,12000);
    });
  });

  describe('#payRent', function(){
    it('should decrease cash if adequate cash', function(){
      var renter = new Renter('Agnes', '39', 'female', 'Movie Star');

      renter.cash = 3000;
      console.log(renter);
      renter.payRent(1000);
      expect(renter.cash).to.equal(2000);
    });

    it('should evict if inadequate cash', function(){
      var renter = new Renter('Agnes', '39', 'female', 'Movie Star');

      renter.cash = 300;
      console.log(renter);
      renter.payRent(1000);
      expect(renter.isEvicted).to.be.true;
    });
  });

  describe('#party', function(){
    it('should evict renter if noise is too loud', function(){
      var renter = new Renter('Agnes', '39', 'female', 'Movie Star');
      
      while(!renter.isEvicted){
        renter.party();
      }

      expect(renter.isEvicted).to.be.true;
    });
  });
});


