var userName = prompt('What\'s your name?');
alert('Hello ' + userName + '. Thanks for coming to my site!');
console.log(userName);
// We want to ask the user a question,
// take their answer as input; stored in a var
// Validate that their answer matches my answer
// Depending on true or false, provide feedback

//Question 1
var answerTwo = prompt('Do you want to play a game?');
var userAnswer = ('yes');
console.log(answerTwo);

if(answerTwo.toLowerCase() === userAnswer) {
  alert('Great let\'s start!');
} else {
  alert('Well... Maybe next time');
}

//Question 2
var answerOne = prompt('Where did I grow up?');
var myAnswerOne = ('washington');
console.log(answerOne);

if(answerOne.toLowerCase() === myAnswerOne) {
  alert('Correct! I grew up in Washington');
} else {
  alert('Sorry, that\'s wrong. I grew up in Washington');
}


//Question 3
var home = prompt('Do I live in Seattle?');
var localAnswer = ('yes')
console.log(home);

if(home.toLowerCase() === localAnswer) {
  alert('You\'re right I\'m Seattleite!');
} else {
  alert('Well Welcome to Emerald City!');
}

//Question 4
var hobbies = prompt('What are my favorite hobbies?');
var hobbyChoice = ['cars','snowboarding','video games','coding'];
console.log(hobbies);

if(hobbyChoice.indexOf(hobbies) !== -1) {
  alert('Wow how did you know that?!');
} else {
  alert('Not even close, BUD!');
}

//Question 5
var food = prompt('What are my favorite types of food?'); // prompting the user with a string message.
var foodTypes = ['pizza','tacos','burgers']; // creating an array and asigning it a value

console.log('You\'re answer is ' + food); //console logging the users answer to the prompted question
console.log(foodTypes.indexOf(food)); //console logging where in the array the users answer is found or not found

if(foodTypes.indexOf(food) !== -1) {
  alert('Correct! They\'re delicious!');
} else {
  alert('Disgusting...');
}

//Question 6
var myLanguage = prompt('What coding language would I like to learn?');
var languageTypes = ['javascript','ios','html/css'];
console.log(myLanguage);

if(languageTypes.indexOf(myLanguage) !== -1) {
  alert('Wunderbar!');
} else {
  alert('Not today');
}
