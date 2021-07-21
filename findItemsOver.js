'use strict';
module.exports = function(objectList,threshold){
    var itemList = objectList;
    
    var itemsOverThreshold = [];
    for (var i = 0; i < itemList.length; i++){
      var product = itemList[i];
      if (product.qty > threshold){
        itemsOverThreshold.push(product);
      }
    }
    return itemsOverThreshold;
}