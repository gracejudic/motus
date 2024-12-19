let answer = 'dictionnaire'

function isWellPlaced(arrayAnswer, arrayWordTried) {

    let myArray = [];

    for (let i = 0; i < arrayAnswer.length; i++) {
    	if (arrayAnswer[i] === arrayWordTried[i]) {
            myArray.push(arrayWordTried[i]);
        }
    }
    return myArray
}

function isMissplaced(arrayAnswer, arrayWordTried) {

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

export {isWellPlaced, isMissplaced, isNotInAnswer, tryPlayerWord}
