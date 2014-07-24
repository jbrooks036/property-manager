/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
// var connect = require('../../app/lib/mongodb');
// var Mongo = require('mongodb');
var Renter = require('../../app/models/renter');
var Room = require('../../app/models/room');
var Apartment = require('../../app/models/apartment');


describe('Apartment', function(){
  describe('constructor', function(){
    it('should create an apartment', function(){
      var apartment = new Apartment('A1');
      
      expect(apartment).to.be.istanceof(Apartment);
      expect(apartment.name).to.equal('A1');
    });
  });

  describe('#area', function(){
    it('should calculate the apartment area', function(){
      var apartment = new Apartment('A1');
      
      apartment.area();

      expect(apartment.area).to.equal('number');
    });
  });

  describe('#cost', function(){
    it('should calculate the apartment cost', function(){
      var apartment = new Apartment('A1');
      
      apartment.cost();

      expect(apartment.cost).to.equal('number');
    });
  });

  describe('#bedrooms', function(){
    it('should calculate the number of bedrooms', function(){
      var apartment = new Apartment('A1');
      
      apartment.bedrooms();

      expect(apartment.bedrooms).to.equal('number');
    });
  });

  describe('#isAvailable', function(){
    it('should determine if at least one bedroom is available', function(){
      var apartment = new Apartment('A1');
      
      apartment.isAvailable();

      expect(apartment.isAvailable).to.equal('number');
    });
  });

  describe('#purgeEvicted', function(){
    it('should purge evicted renters', function(){
      var apartment = new Apartment('A1');
      
      apartment.purgeEvicted();

      //expect(apartment.purgeEvicted).to.equal('number');
    });
  });

  describe('#collectRent', function(){
    it('should calculate sum of rents of occupied apartments', function(){
      var apartment = new Apartment('A1');
      
      apartment.collectRent();

      expect(apartment.collectRent).to.equal('number');
    });
  });
});
