//requires

var basicCard = require('./library/basic.js');
var cardInfo = require('./basic.json');
var inquirer = require('inquirer');
var fs = require('fs');

var count = 0;

//var question1 = new basicCard(cardInfo[0].front, cardInfo[0].back);

var questions = [];

//console.log(firstPresident.front);
//console.log(firstPresident.back);



//startgame();

function startGame(){
    prompts();
}

function endGame(){
    //codes
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
        console.log("Answer: " + response.answer);
        console.log("Questions[count].back: " + questions[count].back);
        if(response.answer == questions[count].back) {
                count += 1;
                console.log("You're right!");
            } else {
                count += 1;
                console.log("You're wrong.");
            }
        
        prompts();
            
        });
} else {
    console.log("Those are all of the questions!");
}
   
/*,
    {
        type: "input",
        message: questions[1].front,
        name: "answer1"
    },
    {
        type: "input",
        message: questions[2].front,
        name: "answer2"
    },
    {
        type: "input",
        message: questions[3].front,
        name: "answer3"
    },
    {
        type: "input",
        message: questions[4].front,
        name: "answer4"
    },
    ]);
*/
};


round();
console.log(questions);
prompts();