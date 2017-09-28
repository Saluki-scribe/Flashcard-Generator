//requires

var basicCard = require('./library/basic.js');
var cardInfo = require('./basic.json');
var inquirer = require('inquirer');
var fs = require('fs');

var count = 0;
var score = 0;

//Array that holds all questions and answers held in basic.json

var questions = [];

round();
console.log(questions);
startGame();


//startGame();

function startGame(){
    prompts();
}

function endGame(){
    if (response.answer == "Q" || response.answer == "quit") {
        console.log("Quitting");
    }
}

//Populate Questions Array with All questions and answers in basic.json

function round(){
    for (var i = 0; i < cardInfo.length; i++) {
        var first = cardInfo[i].front;
        var second = cardInfo[i].back;

        var question = new basicCard(first, second);
        questions.push(question);
    }
}

//Asks all available questions in basic.json

function prompts(){
    
if (count < cardInfo.length) {

    console.log(`\nQuestion ${count + 1}:\n`)

    inquirer.prompt([
        {
            type: "input",
            message: questions[count].front,
            name: "answer"
        }
    ]).then(function(response) {
        //console.log("Answer: " + response.answer);
        //console.log("Questions[count].back: " + questions[count].back);

        if(response.answer == questions[count].back) {
                count += 1;
                score += 1;
                console.log("\nYou're right!\n");
            } else {
                count += 1;
                console.log("\nYou're wrong.\n");
            }
    //Calls next question
        prompts();
            
        });
} else {
    console.log(`Those are all of the questions. You got ${score} out of ${count} questions right!`);
    count = 0;
    }
   
}; //End prompts function
