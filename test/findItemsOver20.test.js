'use strict';
let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("The findItemsOver20 function" , function(){
    it("should return all the products that have a quantity higher than 20" , function(){
        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}]),[{"name":"pears","qty":37},{"name":"bananas","qty":27}]);
    });

    it("should return all the products that have a quantity higher than 20" , function(){
        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":11},{"name":"bananas","qty":27},{"name":"apples","qty":3}]),[{"name":"bananas","qty":27}]);
    });

    it("should return an empty array if no product has a quantity higher than 20" , function(){
        assert.deepEqual(findItemsOver20([{"name":"apples","qty":10},{"name":"pears","qty":2},{"name":"bananas","qty":7},{"name":"apples","qty":3}]),[]);
    });

});