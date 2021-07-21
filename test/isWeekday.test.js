'use strict';
let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("The isWeekday function" , function(){
    it("should return true if parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday("Friday"),true);
    });

    it("should return false if  parameter passed in is a day of the weekend" , function(){
        assert.equal(isWeekday("Saturday"),false);
    });

    it("should return false if  parameter passed in is a day of the weekend" , function(){
        assert.equal(isWeekday("Sunday"),false);
    });

    it("should return true if  parameter passed in is a day of the week" , function(){
        assert.equal(isWeekday("Monday"),true);
    });

});