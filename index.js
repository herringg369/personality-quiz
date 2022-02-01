let choiceOne = document.querySelector('#choice-div')
let answerHere = document.querySelector('#answer-div')
let clearChoices = document.querySelector('#clear-choices')
let buttonOne = document.querySelector('#choice-one')
let buttonTwo = document.querySelector('#choice-two')
let score = 0

// will be used to make the text of the answer appear

function createAnswer (answer) {
    const theAnswer = document.createElement('h2')
    theAnswer.innerText = answer
    answerHere.appendChild(theAnswer)
}

//clears the page of answer chocies

function removeAnswer () {
    answerHere.innerText = ''
}

clearChoices.addEventListener('click', function () {
    removeAnswer()
    let score = 0
})

// Score mechanic is not working, need to come up with another way to save choices

buttonOne.addEventListener('click', function () {
    // remove answer needed so the answers don't stack
    removeAnswer()
    createAnswer('pineapple')
    console.log('pineapple')
    let score = score + 1
})

buttonTwo.addEventListener('click', function () {
    removeAnswer()
    createAnswer('bananas')
    console.log('bananas')
    let score = score + 2
})

document.querySelector('#check-score').addEventListener('click', function () {
    console.log(score)
})

/*
const countWrite = document.createElement('h3')
countWrite.innerText = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(countWrite)
*/