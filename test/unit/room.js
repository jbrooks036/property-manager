
/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
// var connect = require('../../app/lib/mongodb');
// var Mongo = require('mongodb');
var Room = require('../../app/models/room');
// var Item;

describe('Room', function(){
  describe('constructor', function(){
    it('should create a new room', function(){
      var lr = new Room('living','14', '16');

      expect(lr).to.be.instanceof(Room);
      expect(lr.name).to.equal('living');
      expect(lr.width).to.equal(14);
      expect(lr.length).to.equal(16);
    });
  });

  describe('#area', function(){
    it('should calculate the area of a room', function(){
      var lr = new Room('living','14', '16');
      // lr.area();

      expect(lr.area()).to.equal(224);
    });
  });

  describe('#cost', function(){
    it('should calculate the cost of a room', function(){
      var lr = new Room('living','14', '16');
      
      expect(lr.cost()).to.equal(1120);
    });
  });
});
