const choiceOne = document.querySelector('#choice-div')
const answerHere = document.querySelector('#answer-div')
const clearChoices = document.querySelector('#clear-choices')
const results = document.querySelector('#results-div')
const buttonOne = document.querySelector('#pineapples')
const buttonTwo = document.querySelector('#bannanas')
const buttonThree = document.querySelector('#blue')
const buttonFour = document.querySelector('#red')

// do the same thing for the other sample buttons

let score = 0

// will be used to make the text of the answer appear

function createAnswer (answer) {
    const theAnswer = document.createElement('h2')
    theAnswer.innerText = answer
    answerHere.appendChild(theAnswer)
}

//clears the page of answer chocies

function removeAnswer () {
    answerHere.innerText = 'Choice Made...'
}

clearChoices.addEventListener('click', function () {
    removeAnswer()
    score = 0
    location.reload()
})

// Score mechanic is not working, need to come up with another way to save choices

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

document.querySelector('#check-score').addEventListener('click', function () {
    console.log(score)
    if (score == 0) {
        results.innerText='You have to play the game first'
    }
})

/*
const countWrite = document.createElement('h3')
countWrite.innerText = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(countWrite)
*/