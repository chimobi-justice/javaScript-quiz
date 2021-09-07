let questionPosition = 0,
    test,
    test_status,
    question,
    choice,
    choices,
    choiceA,
    choiceB,
    choiceC,
    correct = 0,
    refresh;

let questions = [
    ["What is 20 - 9?", "11", "7", "27", "A"],
    ["What is 10 + 4?", "54", "18", "14", "C"],
    ["What is 10 x 24?", "240", "10", "197", "A"],
    ["What is 8 / 2?", "5", "4", "33", "B"],
    ["What is the capital of Nigeria", "abuja", "ebonyi", "lagos", "A"],
    ["What is 64 + 64", "44", "128", "883", "B"],
    ["What is the full meaning of HTML", "Hype markup langauge", "Hypertext markup langauge", "javaScript and css", "B"],
    ["What is 6 / 6", "6", "1", "8", "B"],
    ["What is the full meaning of CSS", "Cascading Style Sheets", "Cast Style Sheet", "javaScript and css", "A"],
    ["What is PHP", "PHP is a quering language", "PHP is a server scripting language", "PHP is a styling language", "B"],
];

const getEl = (x) => {
    return document.getElementById(x);
}

const renderQuestions = () => {
    test = getEl('test');

    if (questionPosition >= questions.length) {
        test.innerHTML = `You got ${correct} of ${questions.length} questions corrent`;
        getEl('test_status').innerHTML = `Test Completed <br>`;
        getEl('test_status').innerHTML += `<button onclick="refreshTest();">Click to restart test</button>`;
        questionPosition = 0;
        correct = 0;
        return false;
    }

    getEl('test_status').innerHTML = `Question ${(questionPosition + 1)} 0f ${questions.length}`;  
    question = questions[questionPosition][0];
    choiceA = questions[questionPosition][1];
    choiceB = questions[questionPosition][2];
    choiceC = questions[questionPosition][3];
    test.innerHTML = `<h3>${question}</h3>`;
    test.innerHTML += `<input type="radio" name="choices" value="A">${choiceA} <br> <br>`;
    test.innerHTML += `<input type="radio" name="choices" value="B">${choiceB} <br> <br>`;
    test.innerHTML += `<input type="radio" name="choices" value="C">${choiceC} <br> <br>`;
    test.innerHTML += `<button id="checkButton" onclick="checkAnswer();">Submit Answer</button>`;
}


function checkAnswer() {
    choices = document.getElementsByName('choices');

    for(let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }

    if (choice == questions[questionPosition][4]) {
        correct++;
    } 
    questionPosition++;
    renderQuestions();
}

const refreshTest = () => renderQuestions();

window.addEventListener('load', renderQuestions);