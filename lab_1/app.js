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
// foodTypes.indexOf('pizza'); //
// foodTypes.indexOf('tacos');
// foodTypes.indexOf('burgers');
console.log('You\'re answer is ' + food);
console.log(foodTypes.indexOf(food))

if(food.indexOf(foodTypes)) {
  alert('Sounds delicious!');
} else {
  alert('You\'re disgusting');
}
