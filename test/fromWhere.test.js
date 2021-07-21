'use strict';
let assert = require("assert");
let fromWhere = require("../fromWhere");
 
describe("The fromWhere function" , function(){
    it("should return the name of the place for CA registration number" , function(){
        assert.equal(fromWhere("CA"), "Cape Town");
    });

    it("should return the name of the place for CJ registration number" , function(){
        assert.equal(fromWhere("CJ"), "Paarl");
    });

    it("should return Some other place! for registration numbers other than CA, CJ and CY" , function(){
        assert.equal(fromWhere("GP"), "Some other place!");
    });
});