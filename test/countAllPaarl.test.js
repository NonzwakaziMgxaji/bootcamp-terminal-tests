'use strict';
let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should return the number of registration numbers from Paarl', function(){
        assert.equal(3, countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"));
    });
    it('should return the number of registration numbers from Paarl', function(){
        assert.equal(1, countAllPaarl("CJ 345 123, CA 2345, CL 123-546, CK 345, CF 123"));
    });
});