'use strict';
let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("The totalPhoneBill function" , function(){
    it("should return the total bill for calls made and smses sent" , function(){
        assert.equal(totalPhoneBill("call, sms, call, sms, sms"), "R7.45");
    });

    it("should return the total bill for calls made and smses sent" , function(){
        assert.equal(totalPhoneBill("call, sms"), "R3.40");
    });

    it("should return the total bill for calls made and smses sent" , function(){
        assert.equal(totalPhoneBill("sms"), "R0.65");  
    });
});