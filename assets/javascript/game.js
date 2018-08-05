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
    ["v", "i", "n", "c", "e", "n", "n", "e", "s"]
]



//When the start button is hit, the game will work. After it is hit once the text will change to "Reset Game" and subseqently hitting that will... well... restart the game
function startFunction() {

    document.querySelector(".startButton").innerHTML = "Reset Game";
    //creates variable called "currentWord" and gives it a value of a random string from wordList
    var currentWord = wordList[Math.floor(Math.random() * wordList.length)];

    var wordAnswer = [];

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


    document.onkeyup = function (event) {


        var userGuess = event.key;

        nextGuess.push(userGuess);
        console.log(nextGuess);

        for (index1 = 0; index1 < currentWord.length; index1++) {

            if (currentWord[index1] === userGuess) {
                wordAnswer[index1] = userGuess;
                console.log(wordAnswer);
                targetDiv.innerHTML = wordAnswer.join(" ");
            }
            //  else if (remainingGuesses === 0) {
            //    alert("You Suck!")
            // }

            else {

                nestGuessList.innerHTML = nextGuess.join(" ");
                document.querySelector(".guessCount").innerHTML = remainingGuesses - nextGuess.length
            };


        }



    }

    //   if (remainingGuesses === 0) {
    //     alert("You Suck!")
    // };






    var nestGuessList = document.querySelector(".alreadyGuessed");
    nestGuessList.innerHTML = nextGuess;
    document.querySelector(".guessCount").innerHTML = remainingGuesses - nextGuess.length

    //creates the number of remaining guesses when the game is started
    var remainingGuesses = 9 + currentWord.length





};
