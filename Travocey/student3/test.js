//questions Arra
var questionsArray = [
    [
        '01.Sri Lanka is famous because of this natural feature?', 'Glassiers',
        'Volcanoes',
        'Beaches',
        'Valleys',
        3
    ],
    [
        '02.When was Ceylon Tourist Board established?', "1948",
        "1966",
        "1972",
        "2004",
        2
    ],
    [
        '03.Tourism is major source of ___________ in Sri Lanka.', "Climate change",
        "Unemployment",
        "foreign exchange earnings",
        "lack of access to healthcare",
        3
    ],
    [
        "04. Which city is known as 'Little England'?", "25m",
        "Kandy",
        "Nuwara Eliya",
        "Galle",
        2
    ],
    [
        '05. What is the main attractive thing in Sri Lanka?', "Beach resorts",
        "Ancient cities",
        "Mountain region",
        "All above",
        4
    ],
    [
        "06. Which country can be considered as a 'closer competitor' for Sri Lanka's tourism sector?", "USA",
        "Norway",
        "Maldives",
        "Brazil",
        3
    ],
    [
        "07. What is the top tourist generating country to Sri Lanka?", "UK",
        "China",
        "Germany",
        "All above",
        4
    ],
    [
        "08. ._____________ has been declared by UNESCO as the 8th Wonder of the word.", "Sigiriya",
        "Arugambay beach",
        "Bandarawela town",
        "Kala Wewa",
        1
    ],
    [
        '09. What is not a destination in Ella?', "Lipton's Seat",
        "Demodara station",
        "Little Adams Peak",
        "Nine Arch Bridge",
        2
    ],
    [
        '10. What is the capital of Sri Lanka?', 'Kandy',
        'Jafna',
        'Sri Jayawardanapura Kotte',
        'Colombo',
        3
    ]
]

//user answers
var userAnswers = { 0: '', 1: '', 2: '', 3: '', 4: '', 5: '',6:'',7:'',8:'',9:'',10:''}


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
const answeBtns=document.getElementsByClassName('answer');


//control btns
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');

//score board
const scoreBoard = document.getElementById('score-board');
const summeryButton = document.getElementById('summery');

const para = document.getElementById('left');
const pic = document.getElementById('pic');
const container = document.getElementById('container');

// const summeryBoard = document.getElementById('summery-board');
var end=false;

//score
var score = 0


//clcik event on start-btn
startButton.addEventListener('click', startQuiz);

//sri lanka pic
const slPic = document.getElementById('sri-lanka');

//question index

var currentQuestionIndex = 0

//timer
const timerBlock = document.getElementById('timer');

//startQuiz function
function startQuiz() {
    para.style.display = 'none';
    pic.style.display = 'none';
    container.style.display = 'block';
    timerBlock.style.display = 'block';
    timer(end);
    setNextQuestion();
}



//adding event listner to next-btn
nextButton.addEventListener('click', setNextQuestion);

//adding event listner to submit-btn
submitButton.addEventListener('click', endTime);

function endTime() {
    end=true;
}




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

    if (currentQuestionIndex == 10) {
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

        score += 2
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
    answer01.style.backgroundColor = '#21618C ';
    answer02.style.backgroundColor = '#21618C ';
    answer03.style.backgroundColor = '#21618C ';
    answer04.style.backgroundColor = '#21618C ';


    answer01.disabled = false;
    answer02.disabled = false;
    answer03.disabled = false;
    answer04.disabled = false;

}

//presenting wrongly answerd questions and correctly answering qestions

const scoredisplay = document.getElementById('score-display');

//showing result
function showResult(min,sec) {
    
    nextButton.style.display = "none";
    quizGrid.style.display = 'none';
    submitButton.style.display = 'none';
    scoreBoard.style.display = 'grid';
    scoreBoard.style.gridTemplateRows="auto auto auto auto"
    summeryButton.style.display = 'block';
    if (score<=0) {
        scoreBoard.style.backgroundColor='#F0B27A';
        
    }else if (score>=0 && score<5) {
        scoreBoard.style.backgroundColor='#F5B041';
    }else if(score>=5){
        scoreBoard.style.backgroundColor='#82E0AA';
    }
    
    scoredisplay.innerHTML = "Your Score is " + score;

    document.getElementById("score-display").style.display='block';

    document.getElementById("time").style.display='block';

    document.getElementById("time").innerHTML="Minutes "+min+" seconds "+sec;

    document.getElementById("refresh").style.display='block';

    

    console.log(score)
    console.log(userAnswers)

}
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var summeryBoard = document.getElementById("board")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


summeryButton.onclick = function() {
    modal.style.display = "block";

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
                }
                if (j != questionsArray[i][5] && userAnswers[i] != j) {
                    var para = document.createElement('p');
                    para.innerHTML = questionsArray[i][j] + "<br>";
                    summeryBoard.appendChild(para);
                }
            }
        }

    }
    summeryButton.disabled=true;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function timer() {
    var startTime=new Date().getTime();
    var deadline = startTime + 1000 * 60;
    

    var x = setInterval(function() {

        var now = new Date().getTime();
        var t = deadline - now;

        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);

        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;

        var duration=now-startTime;
        var min = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.floor((duration % (1000 * 60)) / 1000);


        if (t < 0) {
            clearInterval(x);
            document.getElementById("minute").innerHTML = '0';
            document.getElementById("second").innerHTML = '0';
            showResult(min,sec);
        }else if(end){
            clearInterval(x);
            showResult(min,sec)
        }

    }, 1000);
}
