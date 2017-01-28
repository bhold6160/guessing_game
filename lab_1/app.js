
var userName = prompt('What\'s your name?');
alert('Hello ' + userName + '. Thanks for coming to my site!');
console.log(userName)
  // We want to ask the user a question,
  // take their answer as input; stored in a var
  // Validate that their answer matches my answer
  // Depending on true or false, provide feedback

//Question 1
 var answerOne = prompt('Where did I grow up?');
 var myAnswerOne = ('Washington' .toLowerCase());
 console.log(answerOne)
 if(answerOne === myAnswerOne) {
   alert('Correct! I grew up in Washington');
 } else {
   alert('Sorry, that\'s wrong. I grew up in Washington');
 }

//Question 2
var answerTwo = prompt('Do you want to code?');
var userAnswer = ('Yes' .toLowerCase());
console.log(answerTwo);

if(answerTwo === userAnswer) {
  alert('Great let\'s start!');
} else {
  alert('Well... Maybe next time');
}

//Question 3
var home = prompt('Do you live in Seattle?');
var localAnswer = ('yes');
console.log(home);

if(home === localAnswer) {
  alert('You\'re must be a Seattleite!');
} else {
  alert('Welcome to Emerald City!');
}

//Question 4
var food = prompt('What type of food would you like to eat?'); // prompting the user with a string message.
var foodTypes = ['pizza','tacos','burgers']; // creating an array and asigning it a value

console.log('You\'re answer is ' + food); //console logging the users answer to the prompted question
console.log(foodTypes.indexOf(food)); //console logging where in the array the users answer is found or not found

if(foodTypes.indexOf(food) > -1) {
  alert('Sounds delicious!');
} else if(foodTypes.indexOf(food) <= -1) {
  alert('Disgusting...');
}

//Question 5
var myLanguage = prompt('What coding language would I like to learn?');
var languageTypes = ['javascript','ios','html/css'];
console.log(myLanguage)

if(languageTypes.indexOf(myLanguage) > -1) {
  alert('Wunderbar!');
} else if(languageTypes.indexOf(myLanguage) <= -1) {
  alert('Not today');
}
