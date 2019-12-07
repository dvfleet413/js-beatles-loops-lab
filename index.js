// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  var newArray = [];
  while (i < facts.length){
    newArray.push(`${facts[i]}!!!`);
    i++
  }
  return newArray;
}

function iLoveTheBeatles(num){
  var newArray = [];
  //Implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
  do{
    newArray.push('I love the Beatles!');
    num++;
  }while (num < 15)
  return newArray;
}
