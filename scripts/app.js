function playNow(){
    removeClasslist('home');
    removeClasslist('result');
    addClasslistById('playGround');

    // reset life and score
    setTextElementValue('life', 5)
    setTextElementValue('score', 0)


    continueGame();
}


// game continue function
function continueGame(){
    const alphabets  = randomNumberGenerate();

    // set alphabets
    const setAlphabet = document.getElementById('screenAlphabet');
    setAlphabet.innerText = alphabets;

    // set alphabet bg color
    setBackgroundColorById(alphabets);



}

function handleKeyEventByKeyboard(e){
    console.log(e);
    const playerPressed = e.key;
    const currentAlphabet = document.getElementById('screenAlphabet');
    const screenAlphabet = currentAlphabet.innerText;
    const uppercaseAlphabet = screenAlphabet.toLowerCase()

    if(playerPressed === "Escape"){
        exitGame();
    }

    if(playerPressed === uppercaseAlphabet){
        continueGame()
        removeBackgroundColor(uppercaseAlphabet)
        updatedScoreValue('score');


    }
    else{
        updatedLifeValue('life');
        const currentLife = parseInt(getElementByValue('life'));
        if(currentLife === 0){
            gameOver()
        }
    }

    
}

// get key value by event 
document.addEventListener('keyup', handleKeyEventByKeyboard )

// random number and alphabets generate 
function randomNumberGenerate(){
    const alphaString = "abcdefghijklmnopqrstuvwxyz";
    const alphaArray = alphaString.split('');
    
// number generate
    const number  = Math.round(Math.random()* 25);
    const alphabets = alphaArray[number] ;
    return alphabets

}

// updated score value;
function updatedScoreValue(elementId){
    const currentScore = document.getElementById(elementId);
    const currentLifeValue = currentScore.innerText;
    const lifeValue = parseInt(currentLifeValue);
    document.getElementById(elementId).innerText = lifeValue + 1
}

// updated life value
function updatedLifeValue(elementId){
    const currentLife = document.getElementById(elementId);
    const currentLifeValue = currentLife.innerText;
    const lifeValue = parseInt(currentLifeValue);
    document.getElementById(elementId).innerText = lifeValue - 1;
}

// add classlist 
function removeClasslist(id){
    const addClass = document.getElementById(id);
    addClass.classList.add('hidden')
    
}

// remove Classlist 
function addClasslistById(id){
    const removeClass = document.getElementById(id);
    removeClass.classList.remove('hidden')
}
// set background color
function setBackgroundColorById(elementId){
    const elementColor = document.getElementById(elementId);
    elementColor.classList.add('bg-yellow-300');
    elementColor.classList.add('text-black');
}

// remove background color
function removeBackgroundColor(elementId){
    const elementRemove = document.getElementById(elementId);
    elementRemove.classList.remove("bg-yellow-300");
    elementRemove.classList.remove("text-black");
}
function getElementByValue(id){
    const elementName = document.getElementById(id);
    const elementText = elementName.innerText;
    return elementText;
}

function gameOver(){
    addClasslistById('result');
    removeClasslist('playGround');

    // set final score
    const score = document.getElementById('score').innerText;
    const finalScore = document.getElementById('final_score');
    finalScore.innerText = score

    const currentAlphabet = getElementByValue('screenAlphabet');
    removeBackgroundColor(currentAlphabet)

}

// game exit
function exitGame(){
    addClasslistById('home');
    removeClasslist('playGround');
    location.reload();
}
function setTextElementValue(elementId, value){
    const currentLife = document.getElementById(elementId);
    currentLife.innerText = value

}