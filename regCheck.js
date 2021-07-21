'use strict'
module.exports = function(regNum, regPlate){
    return regNum.endsWith(regPlate);
}