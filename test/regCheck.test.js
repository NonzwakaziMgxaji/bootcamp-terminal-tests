'use strict';
let assert = require("assert");
let regCheck = require("../regCheck");

describe("The regCheck function" , function(regNum, regPlate){
    it("should return true if registration number is for GP registration plates" , function(){
        assert.equal(regCheck("DV 23 NB GP" , "GP"), true);
    });

    it("should return false if registration number is not for GP registration plates" , function(){
        assert.equal(regCheck("DB 23 NB EC" , "GP"), false);
    });
});