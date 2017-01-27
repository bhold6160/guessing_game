//   var userName = prompt('What\'s your name?');
// alert('Hello ' + userName + '. Thanks for coming to site!');
//   // We want to ask the user a question,
//   // take their answer as input; stored in a var
//   // Validate that their answer matches my answer
//   // Depending on true or false, provide feedback
//
//  var answerOne = prompt('What state was I born in?');
//  var myAnswerOne = 'Washington';
//  if(answerOne === myAnswerOne) {
//    alert('You got it right. I was born in Washington');
//  } else {
//    alert('Sorry, that\'s wrong. I was born in Washington');
//  }

// var answerTwo = prompt('Do you want to code?');
// var userAnswer = ('Yes', 'yes', 'y')
//
// if(answerTwo === userAnswer) {
//   console.log('Great let\'s start!');
// } else {
//   console.log('Maybe next time');
// }
//
//
var food = prompt('What type of food would you like to eat?'); // prompting the user with a string message.
var foodTypes = ['pizza','tacos','burgers']; // creating an array and asigning it a value
console.log('You\'re answer is ' + food); //console logging the users answer to the prompted question
console.log(foodTypes.indexOf(food)); //console logging where in the array the users answer is found or not found

if(foodTypes.indexOf(food) > -1) {
  alert('Sounds delicious!');
} else if(foodTypes.indexOf(food) === -1){
  alert('You\'re disgusting');
}
