// Quiz questions and answers (25 questions)
const questions = [

    // General football Questions

{
    question: "Which country hosted the first FIFA World Cup?",
    answers: [
        { text: "Brazil", correct: false},
        { text: "Italy", correct: false},
        { text: "Uruguay", correct: true},
        { text: "Argentina", correct: false},
        ]
},


{
    question: "Which footballer has won the most Ballon d'Or awards?",
    answers: [
        { text: "Cristiano Ronaldo", correct: false},
        { text: "Zinedine Zidane", correct: false},
        { text: "John Cruyff", correct: false},
        { text: "Lionel Messi", correct: true},
        ]
},

{
    question: "Which country has won the most FIFA Confederations Cup?",
    answers: [
        { text: "Argentina", correct: false},
        { text: "France", correct: false},
        { text: "Germany", correct: false},
        { text: "Brazil", correct: true},
        ]
},


{
    question: "Who is known as the 'king of Football'?",
    answers: [
        { text: "Pelé", correct: true},
        { text: "Maradona", correct: false},
        { text: "Lionel Messi", correct: false},
        { text: "Cristiano Ronaldo", correct: false},
    ]
},
{
    question: "Which country has won the most FIFA World Cups?",
    answers: [
        { text: "Germany", correct: false},
        { text: "Brazil", correct: true},
        { text: "Argentina", correct: false},
        { text: "Italy", correct: false},
    ]
},
{
    question: "Who holds the record for most international goals in football?",
    answers: [
        { text: "Pelé", correct: false},
        { text: "Lionel Messi", correct: false},
        { text: "Cristiano Ronaldo", correct: true},
        { text: "Ali Daei", correct: false},
    ]
},

// Premier League Questions

{
    question: "Which player has the most Premier League goals in a single season?",
    answers: [
        { text: "Alan Shearer", correct: false},
        { text: "Mohamed Salah", correct: false},
        { text: "Thierry Henry", correct: false},
        { text: "Erik Haaland", correct: true},
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
    question: "Who was the Premier League's top scorer in the 20/21 season?",
    answers: [
        { text: "Mohamed Salah", correct: false},
        { text: "Harry Kane", correct: true},
        { text: "Bruno Fernandes", correct: false},
        { text: "Raheem Sterling", correct: false},
    ]
},

{
    question: "Who won the Premier League title in the 15/16 season?",
    answers: [
        { text: "Chelsea", correct: false},
        { text: "Leicester city", correct: true},
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

// Serie A Questions

{
    question: "Which team has won the most Serie A titles?",
    answers: [
        { text: "Inter Milan", correct: false},
        { text: "AC Milan", correct: false},
        { text: "Juventus", correct: true},
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
    question: "Who won the Serie A title in the 20/21 season?",
    answers: [
        { text: "AC Milan", correct: false},
        { text: "Juventus", correct: false},
        { text: "Inter Milan", correct: true},
        { text: "Napoli", correct: false},
    ]
},

{
    question: "Which Italian club has won the most UEFA Champions League titles?",
    answers: [
        { text: "Roma", correct: false},
        { text: "Inter Milan", correct: false},
        { text: "Juventus", correct: false},
        { text: "AC Milan", correct: true},
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
    question: "Which player has scored the most La Liga goals in history?",
    answers: [
        { text: "Cristiano Ronaldo", correct: false},
        { text: "Lionel Messi", correct: true},
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
    question: "Which country won the FIFA World Cup in 2018?",
    answers: [
        { text: "Brazil", correct: false},
        { text: "France", correct: true},
        { text: "Germany", correct: false},
        { text: "Argentina", correct: false},
    ]
},

{
    question: "Which player has won the most World Cups?",
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
        { text: "France", correct: false},
        { text: "Italy", correct: true},
        { text: "Germany", correct: false},
        { text: "England", correct: false},
    ]
},

{
    question: "Which country won the first UEFA European Championship in 1960 ",
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


const startButton = document.querySelector('.start-btn');
const nextButton = document.querySelector('.next-btn');
const restartButton = document.querySelector('.restart-btn');
const usernameSection = document.querySelector('.username-section');
const quizSection = document.querySelector('.quiz-section');
const questionElement = document.querySelector('.question-text');
const answerButtonsElement = document.querySelector('.answer-buttons');
const feedbackElement = document.querySelector('.feedback-text');
const scoreElement = document.querySelector('.score');
const usernameInput = document.querySelector('.username-input');
const quitButton = document.querySelector('.quit-btn');

const validationMessage = document.querySelector('.validation-message');
/* Added new constants below to track question progress */
const currentQuestionDisplay = document.querySelector('.current-question');
const totalQuestionsDisplay = document.querySelector('.total-questions');

// Timer Variables 
let timeRemaining = 300; // 5 minutes in seconds
let timerInterval; // Holds the timer interval
const timeRemainingDisplay = document.querySelector('.time-remaining');

/* Set the total number of questions at the beginning */
totalQuestionsDisplay.innerText = questions.length;



startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () => {
    //Move to the next question
    currentQuestionIndex++;
    //display next question
    setNextQuestion();
});

restartButton.addEventListener('click', restartQuiz);

quitButton.addEventListener('click', quitQuiz);

// function to start quiz

function startQuiz() {
    if (!validateUsername()) return; 
    shuffleQuestions();
    //Hides the username input
    usernameSection.style.display = 'none';
    //Shows quiz section
    quizSection.style.display = 'block';
    quitButton.style.display = 'block';

    // Start the timer when the quiz begins
    startTimer();
    setNextQuestion();
}

// Function to start the timer 
function startTimer() {
    timeRemaining = 300; // Reset time for each quiz session
    timerInterval = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        
        // Display the time in "MM:SS" format
        timeRemainingDisplay.innerText = `${minutes.toString().padStart(1, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Decrement the timer
        timeRemaining--;

        // If time runs out, stop the timer and end the quiz
        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            endQuizDueToTimeout();
        }
    }, 1000); // Update every second
}

// Function to handle quiz timeout
function endQuizDueToTimeout() {
    feedbackElement.innerText = "Time's up! Your final score is " + score + ".";
    feedbackElement.style.color = 'red';

    // Disable all answer buttons
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
    });
    
    // Hide navigation buttons and show restart button
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';

    // Hide the timer display
    document.querySelector('.timer').style.display = 'none';
}

// Function to handle quitting the quiz
function quitQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    quizSection.style.display = 'none';
    quitButton.style.display = 'none';
    usernameSection.style.display = 'block';
}

// Function to validate the username input
function validateUsername() {
    const validationMessage = document.querySelector('.validation-message');
    const username = usernameInput.value.trim();
    if (username === '') {
        validationMessage.innerText = 'Please enter your username.';
        return false;
    }
    validationMessage.innerText = '';
    return true;
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

/* Updated setNextQuestion to update the question tracker */
function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
    // Update the question tracker display
    currentQuestionDisplay.innerText = currentQuestionIndex + 1;
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

//Function to reset between questions
function resetState() {
    nextButton.style.display = 'none';
    feedbackElement.innerText = '';
    while (answerButtonsElement.firstChild) {
        // Removes old answer buttons
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function to handle when answer is selected

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
        //show postive feedback
        feedbackElement.innerText = 'Correct!';
        // Feedback color to green
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.innerText = 'Wrong!';
        // Set feedback color to red
        feedbackElement.style.color = 'red';
    }
    //Update the score display
    scoreElement.innerText = score;
    Array.from(answerButtonsElement.children).forEach(button => {
        //disables all buttons after selection
        button.disabled = true;
    });
    if (currentQuestionIndex < questions.length - 1) {
        //Shows the "next" button id more questons remain
        nextButton.style.display = 'block';
    } else {

        // Stop the timer when quiz finishes
        clearInterval(timerInterval);
        
        // Quiz completion
        feedbackElement.innerText += " Quiz Finished!";
        // Shows restart button
        restartButton.style.display = 'block';
    }
}

// Function to restart the quiz 
function restartQuiz() {
    //Reset the score
    score = 0;
    //Reset the question index
    currentQuestionIndex = 0;
    scoreElement.innerText = score;
    //Hide the restart button
    restartButton.style.display = 'none';
    shuffleQuestions();
    setNextQuestion();
}