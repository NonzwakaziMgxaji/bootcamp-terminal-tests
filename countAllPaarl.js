'use strict';
module.exports = function(regNumbers){
    const regNumList = regNumbers.split(",");
    
    let regCount = 0;
    for (var i = 0; i < regNumList.length; i++){
      const regNo = regNumList[i].trim();
      if (regNo.startsWith("CJ")){
        regCount++;
      }
    }
    return regCount;
}
