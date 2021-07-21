'use strict';
let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("The yearsAgo function" , function(){
    it("should return the number of years ago a year is from current year" , function(){
        assert.equal(yearsAgo(2017) , 4);
    });

    it("should return the number of years ago a year is from current year" , function(){
        assert.equal(yearsAgo(2010) , 11);
    });

    it("should return the number of years ago a year is from current year" , function(){
        assert.equal(yearsAgo(1994) , 27);
    });
});