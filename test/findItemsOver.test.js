'use strict';
let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("The findItemsOver function" , function(){
    it("should return products that have a quantity higher than threshold 30" , function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":37},{"name":"bananas","qty":27},{"name":"apples","qty":3}],30),[{"name":"pears","qty":37}]);
    });

    it("should return an empty array if no products have quantity higher than threshold 30" , function(){
        assert.deepEqual(findItemsOver([{"name":"apples","qty":10},{"name":"pears","qty":29},{"name":"bananas","qty":27},{"name":"apples","qty":3}],30),[]);
    });
});