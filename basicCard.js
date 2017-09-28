//requires

var basicCard = require('./library/basic.js');
var cardInfo = require('./basic.json');
var inquirer = require('inquirer');
var fs = require('fs');

//var question1 = new basicCard(cardInfo[0].front, cardInfo[0].back);

var questions = [];

//console.log(firstPresident.front);
//console.log(firstPresident.back);



//startgame();

function startGame(){
    //code
}

function endGame(){
    //codes
}

function round(){
    for (var i = 0; i <= 4; i++) {
        var first = cardInfo[i].front;
        var second = cardInfo[i].back;

        var question = new basicCard(first, second);
        questions.push(question);
    }
}

function prompts(){
    inquirer.prompt([
    {
        type: "input",
        message: question1.front,
        name: "answer1"
    },
    {
        type: "input",
        message: question2.front,
        name: "answer1"
    },
    {
        type: "input",
        message: question3.front,
        name: "answer1"
    },
    {
        type: "input",
        message: question4.front,
        name: "answer1"
    },
    {
        type: "input",
        message: question5.front,
        name: "answer1"
    },
    ]);
};


round();
console.log(questions);