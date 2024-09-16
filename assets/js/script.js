// Quiz questions and answers (25 questions)
const questions = [

    // General football Questions
{
    question: "Who is known as the 'king of Football'?",
    answers: [
        { text: "Pele", correct: true},
        { text: "Maradona", correct: false},
        { text: "Lionel Messi", correct: false},
        { text: "Cristiano Ronaldo", correct: false},
    ]
},
{
    question: "Which country has won the most FIFA World Cups'?",
    answers: [
        { text: "Brazil", correct: true},
        { text: "Germany", correct: false},
        { text: "Argentina", correct: false},
        { text: "Italy", correct: false},
    ]
},
{
    question: "Who holds the record for most international goals in football'?",
    answers: [
        { text: "Cristiano Ronaldo", correct: true},
        { text: "Lionel Messi", correct: false},
        { text: "Pele", correct: false},
        { text: "Ali Daei", correct: false},
    ]
},

// Premier League Questions

{
    question: "Which player has the most Premier League goals in a single season?",
    answers: [
        { text: "Alan Shearer", correct: true},
        { text: "Mohamed Salah", correct: false},
        { text: "Thierry Henry", correct: false},
        { text: "Sergio Agüero", correct: false},
    ]
},

{
    question: "Which club has won the most Premier League titles?",
    answers: [
        { text: "Manchester United", correct: true},
        { text: "Liverpool", correct: false},
        { text: "Arsenal", correct: false},
        { text: "Chelsea", correct: false},
    ]
},

{
    question: "Who was the Premier League's top scorere in the 20/21 season?",
    answers: [
        { text: "Harry Kane", correct: true},
        { text: "Mohamed Salah", correct: false},
        { text: "Bruno Fernandes", correct: false},
        { text: "Raheem Sterling", correct: false},
    ]
},

{
    question: "Who won the Premier League title in 15/16 season?",
    answers: [
        { text: "Leicester City", correct: true},
        { text: "Chelsea", correct: false},
        { text: "Manchester City", correct: false},
        { text: "Arsenal", correct: false},
    ]
},

{
    question: "Which Premier League team holds the record for the longest unbeaten run?",
    answers: [
        { text: "Arsenal", correct: true},
        { text: "Chelsea", correct: false},
        { text: "Manchester United", correct: false},
        { text: "Liverpool", correct: false},
    ]
},

// Seria A Questions

{
    question: "Which team has won the most Serie A titles?",
    answers: [
        { text: "Juventus", correct: true},
        { text: "AC Milan", correct: false},
        { text: "Inter Milan", correct: false},
        { text: "Roma", correct: false},
    ]
},

{
    question: "Which player has scored the most goals in Serie A history?",
    answers: [
        { text: "Silvio Piola", correct: true},
        { text: "Alessandrio Del Piero", correct: false},
        { text: "Francesco Totti", correct: false},
        { text: "Robert Baggio", correct: false},
    ]
},

{
    question: "Who won the Seria A title in the 20/21 season?",
    answers: [
        { text: "Inter Milan", correct: true},
        { text: "Juventus", correct: false},
        { text: "AC Milan", correct: false},
        { text: "Napoli", correct: false},
    ]
},

{
    question: "Which Italian club has won the most UEFA Champions League titles?",
    answers: [
        { text: "AC Milan", correct: true},
        { text: "Juventus", correct: false},
        { text: "Inter Milan", correct: false},
        { text: "Roma", correct: false},
    ]
},

// La liga Questions

{
    question: "Which Spanish club has won the most La Liga titles?",
    answers: [
        { text: "Real Madrid", correct: true},
        { text: "Barcelona", correct: false},
        { text: "Atletico Madid", correct: false},
        { text: "Valencia", correct: false},
    ]
},

{
    question: "Which player has the most La Liga goals in history?",
    answers: [
        { text: "Lionel Messi", correct: true},
        { text: "Cristiano Ronaldo", correct: false},
        { text: "Raúl", correct: false},
        { text: "Alfredo Di Stéfano", correct: false},
    ]
},

{
    question: "Who won the La Liga title in the 18/19 season?",
    answers: [
        { text: "Barcelona", correct: true},
        { text: "Real Madrid", correct: false},
        { text: "Atletico Madrid", correct: false},
        { text: "Sevilla", correct: false},
    ]
},

{
    question: "Which La Liga club has the most UEFA Champions League titles?",
    answers: [
        { text: "Real Madrid", correct: true},
        { text: "Barcelona", correct: false},
        { text: "Atletico Madrid", correct: false},
        { text: "Sevilla", correct: false},
    ]
},

// World Cup Questions

{
    question: "Who won the FIFA World Cup in 2018?",
    answers: [
        { text: "France", correct: true},
        { text: "Brazil", correct: false},
        { text: "Germany", correct: false},
        { text: "Argentina", correct: false},
    ]
},

{
    question: "Which player won the most World Cups?",
    answers: [
        { text: "Pelé", correct: true},
        { text: "Diego Maradona", correct: false},
        { text: "Zinedine Zidane", correct: false},
        { text: "Lionel Messi", correct: false},
    ]
},

{
    question: "Which country hosted the 2010 FIFA World Cup?",
    answers: [
        { text: "South Africa", correct: true},
        { text: "Brazil", correct: false},
        { text: "Germany", correct: false},
        { text: "Russia", correct: false},
    ]
},

// Euro Champanship Questions

{
    question: "Which player score the most goals in the UEFA European Championship history?",
    answers: [
        { text: "Cristiano Ronaldo", correct: true},
        { text: "Michel Platini", correct: false},
        { text: "Zlatan Ibrahimovic", correct: false},
        { text: "Thierry Henry", correct: false},
    ]
},

{
    question: "Who won the UEFA European Championship in 2020 (played in 2021)",
    answers: [
        { text: "Cristiano Ronaldo", correct: true},
        { text: "Michel Platini", correct: false},
        { text: "Zlatan Ibrahimovic", correct: false},
        { text: "Thierry Henry", correct: false},
    ]
},

{
    question: "Whch country won the first UEFA European Championship in 1960 ",
    answers: [
        { text: "Soviet Union", correct: true},
        { text: "France", correct: false},
        { text: "Spain", correct: false},
        { text: "Germany", correct: false},
    ]
},

]

// Tracks the current question
let currentQuestionIndex = 0;
//  Tracks the user's score
let score = 0;


const startButton = document.querySelector(',start-btn');
const nextButton = document.querySelector('.next-btn');
const restartButton = document.querySelector('.restar-btn');
const usernameSection = document.querySelector('.username-section');
const quizSection = document.querySelector('.quiz-section');
const questionElement = document.querySelector('.question-text');
const answerButtonsElement = document.querySelector('.answer-buttons');
const feedbackElement = document.querySelector('.feedback-text');
const scoreElement = document.querySelector('.score');
const usernameInput = document.querySelector('.username-input');


startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () => {
    //Move to the next question
    currentQuestionIndex++;
    //display next question
    setNextQuestion();
}

restartButton.addEventListener('click', restartQuiz);


// function to start quiz

function startQuiz() {
    if (!validateUsername() return; 
    shuffleQuestions();
    //Hides the username input
    usernameSection.style.display = 'none';
    //Shows quiz section
    quizSection.style.display = 'block';
    setNextQuestion();
}

// Function to validate the username input
function validateUsername() {
    const username = usernameInput.value.trim();
    if (username === '') {
        //alter the user if the field is empty
        alert('Please enter your username.');
        return false;
    }
    // Proceeds if the username is valid
    return true;
}

// Function to display a question and answers
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        //set the answer text
        button.innerText = answer.text;
        // add styling to the button
        button.classList.add('btn');
        button.setAttribute('aria-label',`Answer: ${answer.text}`);
        if (answer.correct) {
            //Mark the corrrec answer
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });

}