const TRY_ELEMENT = document.getElementById("try");
const WORD_TRIED_ELEMENT = document.getElementById("wordTried");
const WELL_PLACED_ELEMENT = document.getElementById("well");
const MISSPLACED_ELEMENT = document.getElementById("miss");
const NOT_IN_WORD_ELEMENT = document.getElementById("not");
const ALL_WORDS_TRIED_ELEMENT = document.getElementById("allWordsTried");

let wellPlaced = [];
let notInAnswer = [];
let missplaced = [];
let allWordsTried = [];

// prend en argument 2 tableaux : bonne réponse + mot essayé
// return un tableau vide ou contenant les lettres bien placées
function isWellPlaced(arrayAnswer, arrayWordTried) {

    let myArray = [];
    for (let i = 0; i < arrayAnswer.length; i++) {
    	if (arrayAnswer[i] === arrayWordTried[i]) {
            myArray.push(arrayWordTried[i]);
        }
    }
    return myArray
}

// prend en argument 2 tableaux : bonne réponse + mot essayé
// return un tableau vide ou contenant les lettres mal placées
function isMissplaced(arrayAnswer, arrayWordTried) {

    let myArray = [];
    for (let i = 0; i < arrayAnswer.length; i++) {
        if (arrayAnswer[i] !== arrayWordTried[i] && arrayAnswer.includes(arrayWordTried[i])) {
            myArray.push(arrayWordTried[i])
        }
    }
    return myArray
}

// prend en argument 2 tableaux : bonne réponse + mot essayé
// return un tableau vide ou contenant les lettres absentes
function isNotInAnswer(arrayAnswer, arrayWordTried) {

    let myArray = [];
    for (const char of arrayWordTried) {
    	if (arrayAnswer.includes(char) == false) {
            myArray.push(char)
        }
    }
    return myArray
}

// prend en argument 2 strings (mot essayé + bonne réponse)

// return true si == sinon return objet contenant lettres mal placées, bien placées, 
// inexistantes
function tryPlayerWord(wordTried, answer) {

    if (wordTried === answer) {
		return true
    } else {
  	    let arrayAnswer = answer.split('');
        let arrayWordTried = wordTried.split('');
        
        let wellPlaced = isWellPlaced(arrayAnswer, arrayWordTried);
        let missplaced = isMissplaced(arrayAnswer, arrayWordTried);
        let notInAnswer = isNotInAnswer(arrayAnswer, arrayWordTried);
 
        return {
            wellPlaced: wellPlaced, 
            missplaced: missplaced, 
            notInAnswer: notInAnswer
        }
    }
}

// pas d'argument
// gère les appels de fonctions (check mots essayés, affichage si partie gagnée)
function playGame() {

    let answer = 'dictionnaire';
    let wordTried = document.getElementById("try").value;
    allWordsTried.push(wordTried);

    let gameResult = tryPlayerWord(wordTried, answer);

    if (gameResult == true) {
        document.getElementById("win").innerText = 'Vous avez gagné !';
        ALL_WORDS_TRIED_ELEMENT.innerText = "";
        WELL_PLACED_ELEMENT.innerText = "";
        MISSPLACED_ELEMENT.innerText = "";
        NOT_IN_WORD_ELEMENT.innerText = "";
    }

    displayGameClues(wordTried, gameResult, allWordsTried);
}  

// prend en argument une string (mot essayé) un objet (3 tableaux avec lettres existantes, 
// mal placées, bien placées), tableau de strings (mots essayés par joueur.euse)

// injecte dans HTML les résultats de joueur.euse
function displayGameClues(wordTried, gameResult, allWordsTried) {

    TRY_ELEMENT.value = '';
    WORD_TRIED_ELEMENT.innerText = `Dernier mot essayé : ${wordTried}`
    ALL_WORDS_TRIED_ELEMENT.innerText = `Tous les essais : ${allWordsTried}`;
    WELL_PLACED_ELEMENT.innerText = `Lettres bien placées : ${gameResult.wellPlaced.join(', ')}`;
    MISSPLACED_ELEMENT.innerText = `Lettres mal placées : ${gameResult.missplaced.join(', ')}`;
    NOT_IN_WORD_ELEMENT.innerText = `Pas dans le mot : ${gameResult.notInAnswer.join(', ')}`;
}