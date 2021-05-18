//questions Arra
var questionsArray = [
    [
        '01. What is the capital of Sri Lanka?', 'Kandy',
        'Jafna',
        'Sri Jayawardanapura Kotte',
        'Colombo',
        3
    ],
    [
        '02. What is not a destination in Ella?', "Lipton's Seat",
        "Demodara station",
        "Little Adams Peak",
        "Nine Arch Bridge",
        4
    ],
    [
        '03. How many tiers are there in Ravana falls ella?', "2 tires",
        "1 tire",
        "3 tiers",
        "5 tires",
        2
    ],
    [
        '04. How high is nine arched bridge? ', "25m",
        "10m",
        "31m",
        "40m",
        2
    ],
    [
        '05. The glorious Nine Arch Bridge is between Ella and which station?', "Kottawa station",
        "Fort raiway station",
        "Ragama station",
        "Demodara station",
        4
    ]
]

//user answers
var userAnswers = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' }


//starting button
const startButton = document.getElementById('start-btn');

//quiz area
const quizGrid = document.getElementById('quiz');

//control btns
const controls = document.getElementById('control-btn');

//question area
const question = document.getElementById('question');
//answer buttons
const answer01 = document.getElementById('answer01');
const answer02 = document.getElementById('answer02');
const answer03 = document.getElementById('answer03');
const answer04 = document.getElementById('answer04');


//control btns
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');

//score board
const scoreBoard = document.getElementById('score-board');
const summeryButton = document.getElementById('summery');

const para = document.getElementById('left');
const pic = document.getElementById('pic');
const container = document.getElementById('container');

const summeryBoard = document.getElementById('summery-board');


//score
var score = 0


//clcik event on start-btn
startButton.addEventListener('click', startQuiz);

//question index

var currentQuestionIndex = 0

//startQuiz function
function startQuiz() {
    // setTimeout(showResult, 3000);
    para.style.display = 'none';
    pic.style.display = 'none';
    container.style.display = 'block';
    container.style.display = 'block';

    setNextQuestion();
}



//adding event listner to next-btn
nextButton.addEventListener('click', setNextQuestion);

//adding event listner to submit-btn
submitButton.addEventListener('click', showResult);




//set next question function
function setNextQuestion() {
    reset();
    //setting question
    question.innerHTML = questionsArray[currentQuestionIndex][0];

    // userAnswers[currentQuestionIndex] = '';

    //setting answers
    answer01.innerHTML = questionsArray[currentQuestionIndex][1];
    answer02.innerHTML = questionsArray[currentQuestionIndex][2];
    answer03.innerHTML = questionsArray[currentQuestionIndex][3];
    answer04.innerHTML = questionsArray[currentQuestionIndex][4];

    //removing the hide
    quizGrid.style.display = 'block';
    controls.style.display = 'block';

    currentQuestionIndex += 1;

    if (currentQuestionIndex == 5) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';

    }

}

//checking answer 
function checkAnswer(answer) {
    currentQuestionIndex = currentQuestionIndex - 1;


    userAnswers[currentQuestionIndex] = answer;

    if (answer == questionsArray[currentQuestionIndex][5]) {
        if (answer == 1) {
            answer01.style.backgroundColor = 'green';
        } else if (answer == 2) {
            answer02.style.backgroundColor = 'green';
        } else if (answer == 3) {
            answer03.style.backgroundColor = 'green';
        } else if (answer == 4) {
            answer04.style.backgroundColor = 'green';
        }

        score += 1
    } else {
        if (answer == 1) {
            answer01.style.backgroundColor = 'red';
        } else if (answer == 2) {
            answer02.style.backgroundColor = 'red';
        } else if (answer == 3) {
            answer03.style.backgroundColor = 'red';
        } else if (answer == 4) {
            answer04.style.backgroundColor = 'red';
        }

        if (questionsArray[currentQuestionIndex][5] == 1) {
            answer01.style.backgroundColor = 'green';
        } else if (questionsArray[currentQuestionIndex][5] == 2) {
            answer02.style.backgroundColor = 'green';
        } else if (questionsArray[currentQuestionIndex][5] == 3) {
            answer03.style.backgroundColor = 'green';
        } else if (questionsArray[currentQuestionIndex][5] == 4) {
            answer04.style.backgroundColor = 'green';
        }


        score -= 1
    }

    answer01.disabled = true;
    answer02.disabled = true;
    answer03.disabled = true;
    answer04.disabled = true;

    currentQuestionIndex += 1;
}

//reset function
function reset() {
    answer01.style.backgroundColor = 'skyblue';
    answer02.style.backgroundColor = 'skyblue';
    answer03.style.backgroundColor = 'skyblue';
    answer04.style.backgroundColor = 'skyblue';

    answer01.disabled = false;
    answer02.disabled = false;
    answer03.disabled = false;
    answer04.disabled = false;

}

//presenting wrongly answerd questions and correctly answering qestions


//showing result
function showResult() {
    nextButton.style.display = "none";
    quizGrid.style.display = 'none';
    submitButton.style.display = 'none';
    scoreBoard.style.display = 'block';
    summeryButton.style.display = 'block';
    console.log(score)
    console.log(userAnswers)

}

function summery() {
    for (var i = 0; i < questionsArray.length; i++) {
        var para = document.createElement('p');
        para.innerHTML = questionsArray[i][0]
        summeryBoard.appendChild(para);
        if (userAnswers[i] == questionsArray[i][5]) {

            for (var j = 1; j < 5; j++) {
                if (j == questionsArray[i][5]) {
                    var para = document.createElement('p');
                    para.innerHTML = questionsArray[i][j] + "&#10004<br>";
                    summeryBoard.appendChild(para);
                } else {
                    var para = document.createElement('p');
                    para.innerHTML = questionsArray[i][j] + "<br>";
                    summeryBoard.appendChild(para);
                }
            }
        } else {
            console.log('wrong')
            for (var j = 1; j < 5; j++) {
                if (j == questionsArray[i][5]) {
                    var para = document.createElement('p');
                    para.innerHTML = questionsArray[i][j] + " &#10004<br>";
                    summeryBoard.appendChild(para);
                }
                if (userAnswers[i] == j) {
                    var para = document.createElement('p');
                    para.innerHTML = questionsArray[i][j] + " &#10008<br>";
                    summeryBoard.appendChild(para);
                } else {
                    var para = document.createElement('p');
                    para.innerHTML = questionsArray[i][j] + "<br>";
                    summeryBoard.appendChild(para);
                }
            }
        }

    }
    summeryButton.disabled = true;

}