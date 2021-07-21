'use strict';

// CREATING A MODULE
module.exports = function(registrationNumbers,regTown){
    var regNumList = registrationNumbers.split(",");
    var regNo = [];
    
    let regCount = 0;
    for (var i = 0; i < regNumList.length; i++){
      var regNumTrim = regNumList[i].trim();
      if (regNumTrim.startsWith(regTown)){
        regNo.push(regNumTrim);
        regCount++;
      } 
    }
    return regCount;
}