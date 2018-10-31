//Word bank for Hangman
var wordList = [

    ["w", "e", "s", "t", "e", "r", "n"],
    ["f", "u", "l", "l", "e", "r", "t", "o", "n"],
    ["a", "s", "h", "l", "a", "n", "d"],
    ["o", "g", "d", "e", "n"],
    ["a", "r", "c", "h", "e", "r"],
    ["s", "h", "i", "e", "l", "d", "s"],
    ["m", "a", "d", "i", "s", "o", "n"],
    ["c", "e", "r", "m", "a", "k"],
    ["v", "i", "n", "c", "e", "n", "n", "e", "s"],
    ["d", "i", "v", "e", "r", "s", "e", "y"],
    ["p", "u", "l", "a", "s", "k", "i"],
    ["e", "l", "s", "t", "o", "n"],
    ["s", "t", "a", "t", "e"],
    ["c", "h", "i", "c", "a", "g", "o"],
    ["k", "e", "d", "z", "i", "e"],
    ["t", "a", "y", "l", "o", "r"],

];











//When the start button is hit, the game will work. After it is hit once the text will change to "Reset Game" and subseqently hitting that will... well... restart the game
function startFunction() {

    var winTally = 0;
    document.querySelector(".totalWins").textContent = winTally

    //Turns the start button into the reset button on the HTML page:
    document.querySelector(".startButton").innerHTML = "Reset Game";
    //creates variable called "currentWord" and gives it a value of a random string from wordList:
    var currentWord = wordList[Math.floor(Math.random() * wordList.length)];

    //Creates an varieble with an empty array
    var wordAnswer = [];

    //Indexes blank spaces in the array wordAnswer depending on which random word is selected
    for (var index = 0; index < currentWord.length; index++) {
        wordAnswer[index] = "_";
    }
    //logs the random word to the console
    console.log(currentWord);

    var targetDiv = document.querySelector(".currentWordInGame");
    //assigns that element in the HTML doc the text of the randomized current word
    targetDiv.textContent = wordAnswer.join(" ");
    //creates a variable based on which key was pressed and puts it in the HTML doc as a new div. Will need to assign these divs a class to format them.
    //when a key is pressed..

    //First, put each letter keyed into an array called "nextGuess"
    var nextGuess = [];

    var remainingLetters = currentWord.length;
    console.log(remainingLetters);


    //When a key is pressed: 

    //creates the number of remaining guesses when the game i≈s started

    var remainingGuesses = 12

    document.onkeyup = function (event) {
        //The pressed key is "captured" into this variable
        var userGuess = event.key;

        //Console logs and pushes the guessed key into the array "Next Guess"
        nextGuess.push(userGuess);
        console.log(nextGuess);

        document.querySelector(".guessCount").innerHTML = remainingGuesses--
        if (remainingGuesses === -1) {
            alert("Hey! Don't put ketchup on your dog!");
            startFunction();

        }
        if (remainingLetters === 0) {
            alert("You Won!");
            startFunction();
            this.winTally++;

        };


        for (index1 = 0; index1 < currentWord.length; index1++) {

            if (currentWord[index1] !== userGuess) {
                var nestGuessList = document.querySelector(".alreadyGuessed");
                nestGuessList.innerHTML = nextGuess;
                nestGuessList.innerHTML = nextGuess.join(" ");
            }
            else {
                wordAnswer[index1] = userGuess;
                console.log(wordAnswer);
                targetDiv.innerHTML = wordAnswer.join(" ");
                remainingGuesses++;
                remainingLetters--;
                console.log(remainingLetters);
            };


        }
    }
};
