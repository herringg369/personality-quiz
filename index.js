const choiceOne = document.querySelector('#choice-div')
const answerHere = document.querySelector('#answer-div')
const clearChoices = document.querySelector('#clear-choices')
const results = document.querySelector('#results-div')
const buttonOne = document.querySelector('#pineapples')
const buttonTwo = document.querySelector('#bannanas')
const buttonThree = document.querySelector('#blue')
const buttonFour = document.querySelector('#red')
const buttonFive = document.querySelector('#button5')
const buttonSix = document.querySelector('#button6')
const buttonSeven = document.querySelector('#button7')
const buttonEight = document.querySelector('#button8')

// do the same thing for the other sample buttons

let score = 0

// will be used to make the text of the answer appear

function createAnswer (answer) {
    const theAnswer = document.createElement('h2')
    theAnswer.innerText = answer
    answerHere.appendChild(theAnswer)
}

// Clears the page of answer chocies

function removeAnswer () {
    answerHere.innerText = 'Choice Made...'
}

// Reloads the page

clearChoices.addEventListener('click', function () {
    removeAnswer()
    score = 0
    location.reload()
})

// When a button is pressed: it is removed, the text is written in a seperate div, and the score is caculated

buttonOne.addEventListener('click', function () {
    // remove answer needed so the answers don't stack
    removeAnswer()
    createAnswer('pineapple')
    console.log('pineapple')
    score += 1
    choiceOne.removeChild(document.querySelector('#questionOne'))
})

buttonTwo.addEventListener('click', function () {
    removeAnswer()
    createAnswer('bananas')
    console.log('bananas')
    score += 2
    choiceOne.removeChild(document.querySelector('#questionOne'))
})

buttonThree.addEventListener('click', function () {
    removeAnswer()
    createAnswer('blue')
    console.log('blue')
    score += 1
    choiceOne.removeChild(document.querySelector('#questionTwo'))
})

buttonFour.addEventListener('click', function () {
    removeAnswer()
    createAnswer('red')
    console.log('red')
    score += 2
    choiceOne.removeChild(document.querySelector('#questionTwo'))
})

buttonFive.addEventListener('click', function () {
    removeAnswer()
    createAnswer('option A')
    console.log('option A')
    score += 1
    choiceOne.removeChild(document.querySelector('#questionThree'))
})

buttonSix.addEventListener('click', function () {
    removeAnswer()
    createAnswer('option B')
    console.log('option B')
    score += 2
    choiceOne.removeChild(document.querySelector('#questionThree'))
})

buttonSeven.addEventListener('click', function () {
    removeAnswer()
    createAnswer('option A')
    console.log('option A')
    score += 1
    choiceOne.removeChild(document.querySelector('#questionFour'))
})

buttonEight.addEventListener('click', function () {
    removeAnswer()
    createAnswer('option B')
    console.log('option B')
    score += 2
    choiceOne.removeChild(document.querySelector('#questionFour'))
})

document.querySelector('#check-score').addEventListener('click', function () {
    console.log(score)
    if (score == 0) {
        results.innerText='You have to play the game first'
    } else if (score == 1) {

    } else if (score == 2) {

    } else if (score == 3) {

    } else if (score == 4) {

    } else if (score == 5) {

    } else if (score == 6) {

    } else if (score == 7) {

    } else if (score == 8) {

    }
})

/*
const countWrite = document.createElement('h3')
countWrite.innerText = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(countWrite)
*/