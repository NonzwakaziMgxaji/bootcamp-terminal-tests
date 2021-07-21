module.exports = function(year){
    console.log(year);
    const date = new Date();
    
    var howManyYearsAgo = (date.getFullYear()-year);
    console.log(howManyYearsAgo);
    return howManyYearsAgo;
  }