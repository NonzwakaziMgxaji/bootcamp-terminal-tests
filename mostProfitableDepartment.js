module.exports = function(data){
    var salesData = data;
    var deptMap ={};
    for (var i = 0; i < salesData.length; i++){
      var dept = salesData[i];
      deptMap[dept.department] = 0;
    }
    console.log(deptMap);
    for (var i = 0; i < salesData.length; i++){
      const dept = salesData[i];
      deptMap[dept.department] += dept.sales;
    }
    console.log(deptMap);
      
    var highestValue = 0;
    var mostProfDep = "";
    for (var dept in deptMap){
      var currentValue = deptMap[dept];
      if(currentValue > highestValue){
        highestValue = currentValue;
        mostProfDep = dept;
      }
    }
    console.log(highestValue);
    console.log(mostProfDep);
    return mostProfDep;
}