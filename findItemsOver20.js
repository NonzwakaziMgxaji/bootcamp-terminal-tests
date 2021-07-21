'use strict';
module.exports = function(objectList){
    var itemList = objectList;
    
    var itemOver20 = [];
    for (var i = 0; i < itemList.length; i++){
      var product = itemList[i];
      if (product.qty > 20){
        itemOver20.push(product);
      }
    }
    return itemOver20;
}
