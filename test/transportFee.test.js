'use strict';
let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function" , function(){
    it("should return R10 if working afternoon shift" , function(){
        assert.equal(transportFee("afternoon"), "R10");
    });

    it("should return R20 if working morning shift" , function(){
        assert.equal(transportFee("morning"), "R20");
    });

    it("should return free if working night shift" , function(){
        assert.equal(transportFee("night"), "free");
    });
});