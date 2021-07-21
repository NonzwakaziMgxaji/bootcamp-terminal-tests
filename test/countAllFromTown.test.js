'use strict';
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){
    it('should return the number of registration numbers starting with CL in the string', function(){

        assert.deepEqual(3, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CL"));
    });
    it('should return the number of registration numbers starting with CF in the string', function(){
        
        assert.deepEqual(0, countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CF"));
    });
});