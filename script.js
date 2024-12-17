// place de la honte constantes
const TRY_ELEMENT = document.getElementById("try");
const WORD_TRIED_ELEMENT = document.getElementById("wordTried");
const WELL_PLACED_ELEMENT = document.getElementById("well");
const MISS_PLACED_ELEMENT = document.getElementById("miss");
const NOT_IN_WORD_ELEMENT = document.getElementById("not");
const ALL_WORDS_TRIED_ELEMENT = document.getElementById("allWordsTried");

// place de la honte variables
let wellPlaced = [];
let notInAnswer = [];
let missPlaced = [];
let allWordsTried = [];


function isWellPlaced(arrayAnswer, arrayWordTried) {

    let myArray = [];
    for (let i = 0; i < arrayAnswer.length; i++) {
    	if (arrayAnswer[i] === arrayWordTried[i]) {
            myArray.push(arrayWordTried[i]);
        }
    }
    return myArray
}

function isMissPlaced(arrayAnswer, arrayWordTried) {

    let myArray = [];
    for (let i = 0; i < arrayAnswer.length; i++) {
        if (arrayAnswer[i] !== arrayWordTried[i] && arrayAnswer.includes(arrayWordTried[i])) {
            myArray.push(arrayWordTried[i])
        }
    }
    return myArray
}

function isNotInAnswer(arrayAnswer, arrayWordTried) {

    let myArray = [];
    for (const char of arrayWordTried) {
    	if (arrayAnswer.includes(char) == false) {
            myArray.push(char)
        }
    }
    return myArray
}


function tryPlayerWord(wordTried, answer) {

    if (wordTried === answer) {
		return true
    } else {
  	    let arrayAnswer = answer.split('');
        let arrayWordTried = wordTried.split('');

        wellPlaced = isWellPlaced(arrayAnswer, arrayWordTried);
        missPlaced = isMissPlaced(arrayAnswer, arrayWordTried);
        notInAnswer = isNotInAnswer(arrayAnswer, arrayWordTried);
        
        return {
            wellPlaced: wellPlaced, 
            missPlaced: missPlaced, 
            notInAnswer: notInAnswer
        }
    }
}

function playGame() {

    let answer = 'dictionnaire';
    let wordTried = document.getElementById("try").value;
    allWordsTried.push(wordTried);

    let gameResult = tryPlayerWord(wordTried, answer);

    if (gameResult == true) {
        document.getElementById("win").innerText = 'Vous avez gagné !';
        ALL_WORDS_TRIED_ELEMENT.innerText = "";
        WELL_PLACED_ELEMENT.innerText = "";
        MISS_PLACED_ELEMENT.innerText = "";
        NOT_IN_WORD_ELEMENT.innerText = "";
    }

    displayGameClues(wordTried, gameResult, allWordsTried);
}  

function displayGameClues(wordTried, gameResult, allWordsTried) {

    TRY_ELEMENT.value = '';
    WORD_TRIED_ELEMENT.innerText = `Dernier mot essayé : ${wordTried}`
    ALL_WORDS_TRIED_ELEMENT.innerText = `Tous les essais : ${allWordsTried}`;
    WELL_PLACED_ELEMENT.innerText = `Lettres bien placées : ${gameResult.wellPlaced.join(', ')}`;
    MISS_PLACED_ELEMENT.innerText = `Lettres mal placées : ${gameResult.missPlaced.join(', ')}`;
    NOT_IN_WORD_ELEMENT.innerText = `Pas dans le mot : ${gameResult.notInAnswer.join(', ')}`;
}