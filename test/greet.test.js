'use strict';
let assert = require("assert");
let greet = require("../greet");

describe("The greet function" , function(){
    it("should greet Mbali correctly" , function(){
        assert.equal(greet("Mbali"),"Hello, Mbali");
    });

    it("should greet Nzwakie correctly" , function(){
        assert.equal(greet("Nzwakie"),"Hello, Nzwakie");
    });

    it("should greet Sisanda correctly" , function(){
        assert.equal(greet("Sisanda"),"Hello, Sisanda");
    });

});