// alert('Hello, Darl!');

// footer auto update copyright year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;


// random images
var cardsArray = [
    {    'name': 'One',    'img': 'img/one.png',  },
    {    'name': 'Two',    'img': 'img/two.png',  },
    {    'name': 'Three',    'img': 'img/three.png',  },
    {    'name': 'Four',    'img': 'img/four.png',  },
    {    'name': 'Five',    'img': 'img/five.png',  },
    {    'name': 'Six',    'img': 'img/six.png',  },
    {    'name': 'Seven',    'img': 'img/seven.png',  },
    {    'name': 'Eight',    'img': 'img/eight.png',  },
    {    'name': 'Nine',    'img': 'img/nine.png',  },
    {    'name': 'Ten',    'img': 'img/ten.png',  },
    {    'name': 'Eleven',    'img': 'img/eleven.png',  },
    {    'name': 'Twelve',    'img': 'img/twelve.png',  },
  ];

// this is for the 1st div created
// grab the div w/ an id and assign it to a variable game
var game = document.getElementById('game-cards');
// create a section element and assign it to a variable grid
var grid = document.createElement('div');

// give the section element a class of grid
grid.setAttribute('class', 'row');
// append the grid section to the game-board div
game.appendChild(grid);


// duplicating the images using concat() method
var gameGrid = cardsArray.concat(cardsArray);

// randomize images for every load of the page
gameGrid.sort(function() {
    return 0.5 - Math.random();
});



// loop through each item in the card 
for (var i = 0; i < gameGrid.length; i++) {
    // create a div element and assign to a variable card
    var card = document.createElement('div');
    // apply a card class on that div element
    // card.classList.add('card');
    card.setAttribute('class', 'card col-lg-4 col-md-4 col-sm-4 mx-auto');
    // set data-name attribute of the div to the cards array
    card.dataset.name = gameGrid[i].name;
    // this is the flip back of the card or the loading front card background
    var frontCard = document.createElement('div');
    frontCard.setAttribute('class', 'front alert-info col-lg-4 col-md-4 col-sm-4 mx-auto');
    // this is the flip front of the card or the loading back card images
    var backCard = document.createElement('div');
    backCard.classList.add('back');
    // applying the background image of the div to the cardsArray image
    backCard.style.backgroundImage = `url(${gameGrid[i].img})`;
    // append the div to the grid section
    grid.appendChild(card);
    card.appendChild(frontCard);
    card.appendChild(backCard);

  // Create back of card
};

// code for the match card
var firstClick = '';
var secondClick = '';
// setting counter, 2 clicks per card
var count = 0;
// for the card the 2x clicked
var previousClick = null;
// delaying the click Animation
var delay = 800;


// add match for css
var match = function() {
    var selected = document.querySelectorAll('.selected');
    // loop for array containing the css .selected class
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
};

// reset the click after 2 clicks
var resetClick = function() {
    firstClick = '';
    secondClick= '';
    count = 0;
    previousClick = null;
    // declaring a variable for the selected class
    var selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++) {
        // 2 clicks will be reset either match or not match
        selected[i].classList.remove('selected');
    }
};

// add event listener whenever the card has been selected
grid.addEventListener('click', function(event) {
    // creating a variable to target every clicks
    var clicked = event.target;
    // avoiding the row to be clicked
    // only the selected div cards will be clicked and 2x clicked
    if (clicked.classList == 'row' || clicked == previousClick || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')) {
        return;
    }
    // this is the 2 clicks per card syntax
    if (count < 2) {
        count++;
        // assigning a value to the firstClick var
        if (count == 1) {
            firstClick = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else { // this is for the secondClick
            secondClick = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }
        // if both guesses are not empty
        if (firstClick != '' && secondClick != '') {
            // adding first firstClick matches the secondClick
            if(firstClick == secondClick) {
                // running the match function, and also callback
                setTimeout(match, delay);
                // this is for the reset 2 clicks for the cards
                setTimeout(resetClick, delay);
            } else { // also for removing the class style
                setTimeout(resetClick, delay);
            }
        }
        // // adding selected class
        // clicked.classList.add('selected');
        previousClick = clicked;
    }
});




