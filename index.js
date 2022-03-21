// Create an Array of at least 3 losing messages
const losemsg = ['Sorry You Lost', 'Better Luck Next Time', 'You Lose'];

// Create variables to count wins and losses
var wins = 0;

var losses = 0;

function win() {
    wins +=1;
}

function lose() {
    losses +=1;
}

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

var pMessage = ('');
var divWins= ('');
var divLosses= ('');

// target all .box elements and attach a click event listener to each one using a loop

document.querySelectorAll('.box').forEach((wins) => {
    wins.addEventListener('click', (wins) => {
      console.time('more');
      event.preventDefault();
      const element = document.getElementById(event.target.dataset.target);
      console.timeEnd('more');
    });
  });

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

const box-1 = document.querySelector('.box-1');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${5}`;
});

const box-2 = document.querySelector('box-2');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${3}`;
});

const box-3 = document.querySelector('box-3');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${10}`;
});

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

Math.floor(Math.random() *4)

var win =2;


// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

let boxclicked = true;
boxclicked ? console.log('You Win!') : console.log('YOu lose!');

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses

let boxclicked  = false;
boxclicked ? console.log(const losemsg);