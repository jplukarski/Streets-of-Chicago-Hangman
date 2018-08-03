var wordList = [
    "Orange",
    "Apple",
    "banana",
    "Mango",
    "Peach",
]





//when a key is pressed..
document.onkeyup = function (event) {

    //creates variable called "currentWord" and gives it a value of a random string from wordList
    var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
    //logs the random word to the console
    console.log(currentWord);
    var targetDiv = document.querySelector(".currentWordInGame");
    //assigns that element in the HTML doc the text of the randomized current word
    targetDiv.textContent = currentWord;
    //creates a variable based on which key was pressed and puts it in the HTML doc as a new div. Will need to assign these divs a class to format them.
    var userGuess = event.key;
    var secondTargetDiv = document.querySelector(".alreadyGuessed")
    var nextGuess = document.createElement("div")
    secondTargetDiv.appendChild(nextGuess)
    nextGuess.textContent = userGuess;

}