'use strict';
let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe("The isFromBellville function" , function(){
    it("should return true if registration number is for Bellville or starts with CY" , function(){
        assert.equal(isFromBellville("CY123"),true);
    });

    it("should return false if registration number is not for Bellville" , function(){
        assert.equal(isFromBellville("CF123"),false);
    });

});