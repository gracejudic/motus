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

function IsMissPlaced(arrayAnswer, arrayWordTried) {

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


function tryWord(wordTried, answer) {

	if (wordTried === answer) {
		return true
    } else {

  	let arrayAnswer = answer.split('');
    let arrayWordTried = wordTried.split('');

    wellPlaced = isWellPlaced(arrayAnswer, arrayWordTried);
    missPlaced = IsMissPlaced(arrayAnswer, arrayWordTried);
    notInAnswer = isNotInAnswer(arrayAnswer, arrayWordTried);

    
    return { 
        wellPlaced: wellPlaced, 
        missPlaced: missPlaced, 
        notInAnswer: notInAnswer 
        }
    }
}

function guessWord() {

	let answer = 'dictionnaire';
	let wordTried = document.getElementById("try").value;
    allWordsTried.push(wordTried);
    console.log(allWordsTried)

	let result = tryWord(wordTried, answer);

    if (result == true) {
        document.getElementById("win").innerText = 'Vous avez gagné';
        ALL_WORDS_TRIED_ELEMENT.innerText = "";
        WELL_PLACED_ELEMENT.innerText = "";
        MISS_PLACED_ELEMENT.innerText = "";
        NOT_IN_WORD_ELEMENT.innerText = "";
    }

    displayMotus(wordTried, result, allWordsTried);
}  

function displayMotus(wordTried, result, allWordsTried) {

    TRY_ELEMENT.value = '';
    WORD_TRIED_ELEMENT.innerText = 'Mot essayé: '+wordTried;// `${}`
    ALL_WORDS_TRIED_ELEMENT.innerText = 'Mots essayés :'+allWordsTried;
    WELL_PLACED_ELEMENT.innerText = 'Bien placé: '+result.wellPlaced.join(', ');
    MISS_PLACED_ELEMENT.innerText = 'Mal placé: '+result.missPlaced.join(', ');
    NOT_IN_WORD_ELEMENT.innerText = 'Pas dans le mot: '+result.notInAnswer.join(', ');
}