const startButton =document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let currentQuestionNumber = -1; 

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}
function setNextQuestion(){
    currentQuestionNumber++; 
    document.querySelector('#question').innerText = questions[currentQuestionNumber].question; 
    document.querySelectorAll('#question-container button').forEach( (button, index) => {
        button.innerText = questions[currentQuestionNumber].answer[index].text; 
        button.addEventListener('click', event => selectAnswer(questions[currentQuestionNumber].answer[index].correct)); 
    });
}
function selectAnswer(isCorrect){
    console.log(isCorrect); 
    document.querySelector('.feedback').innerHTML += `<div class="feedback">That answer was ${isCorrect}</div>`; 
    if(isCorrect) setNextQuestion(); 
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
    }, 
    {
        question: 'Who invented the World Wide Web?', 
        answer: [
            {text: 'Johann Sebastian Bach', correct: false},
            {text: 'Ludwig van Beethoven', correct: false},
            {text: 'Tim Berners-Lee', correct: true},
            {text: 'Claude Debussy', correct: false},
        ]
    }, 
]