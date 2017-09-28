//requires

var clozeCard = require('./library/cloze.js');
var cardInfo = require('./cloze.json');
var inquirer = require('inquirer');

var count = 0;
var score = 0;

//Array that holds all questions and answers held in basic.json

var questions = [];

var test = new clozeCard (cardInfo[count].partial, cardInfo[count].cloze);
console.log(test.fullText);


//Populate all cloze.json questions and answers into the questions array
round();
console.log(questions);


startGame();

function startGame(){
    prompts();
}

function endGame(){
    
    switch(response.argv[2]) {
        case 'q':
        case 'quit':
            console.log("Quitting. Have a good day!");  
    }
}

//Populate Questions Array with All questions and answers in basic.json

function round(){
    for (var i = 0; i < cardInfo.length; i++) {
        var first = cardInfo[i].partial;
        var second = cardInfo[i].cloze;

        var question = new clozeCard(first, second);
        questions.push(question);
    }
};


//Asks all available questions in basic.json

function prompts(){
    
if (count < cardInfo.length) {

    console.log(`\nQuestion ${count + 1}:\n`)

    inquirer.prompt([
        {
            type: "input",
            message: questions[count].partial,
            name: "answer"
        }
    ]).then(function(response) {
        //console.log("Answer: " + response.answer);
        //console.log("Questions[count].back: " + questions[count].back);

        if(response.answer == questions[count].cloze) {
                count += 1;
                score += 1;
                console.log(`
                You're right!
                ${questions[count - 1].fullText}`);
            } else {
                count += 1;
                console.log(`
                You're wrong.
                ${questions[count - 1].fullText}`);
            }
    //Calls next question
        prompts();
            
        });
} else {
    console.log(`Those are all of the questions. You got ${score} out of ${count} questions right!`);
    count = 0;
    };
   
}; //End prompts function
