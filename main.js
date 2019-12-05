const startButton =document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')


startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}
function setNextQuestion(){

}
function selectAnswer(){

}
const questions = [
    {
        question: 'Who is the first President of the U.S?',
        answer: [
            {text: 'George', correct: true },
            {text:'Franklin', correct: false},
            {text: 'Obama', correct: false},
            {text: 'Trump', correct: false}

        ]
    }
]