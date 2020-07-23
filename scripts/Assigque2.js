'use strict'
var heathSCores= [89,120,103];
var ZaneScore= [116, 94,123];
var maraiahScore= [97, 134, 105];
var heathAvg= average(heathSCores);
var zaneAvg= average(ZaneScore);
var maraihAvg= average(maraiahScore);
console.log('Heath Average score is  ' + heathAvg);
console.log('Zane Average score is  ' + zaneAvg);
console.log('Maraiah Average score is  ' + maraihAvg);
function average (scores) {debugger;
    let sum = 0;
    for (let i = 0; i < scores.length; i++){
        sum += scores[i];
    }
    return sum / scores.length;
  }
  if(heathAvg > zaneAvg && heathAvg >maraihAvg){
      console.log('Heath Team is Winner');
  }
  else if(zaneAvg > heathAvg && zaneAvg> maraihAvg){
    console.log('Zane Team is Winner');

  }
  else if(maraihAvg > heathAvg && maraihAvg> zaneAvg){
    console.log('Maraiah Team is Winner');

  }