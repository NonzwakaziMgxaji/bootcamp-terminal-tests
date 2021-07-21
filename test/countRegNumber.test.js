'use strict';
let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should return the number of registration numbers in the string', function(){
        assert.equal(3, countRegNumber("CA 182736,CY 523519,CJ 812328"));
    });

    it("should return the number of registration numbers in the string" , function(){
        assert.equal(5, countRegNumber("CA 182736,CY 523519,CJ 812328, CA 4569, CF 8967"));
    });

    it('should return the number of registration numbers in the string', function(){
        assert.equal(countRegNumber("CF123"),1);
    });
});