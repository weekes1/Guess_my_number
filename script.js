'use strict';

// ****** simple reassignments
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 
'Correct Number!'

document.querySelector('.number').textContent = 
'23'
document.querySelector('.score').textContent = 
'20!'

document.querySelector('.guess').value = 23
console.log( document.querySelector('.guess').value)
*/

// *************** Handling clicks 

let secretNumber = Math.trunc(Math.random() * 20) +1
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber
let score = 20
let highScore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = 
message
}




document.querySelector(".check").addEventListener
('click',function(){
    const guess = Number(document.querySelector('.guess').value)
    
    if(!guess){//no input

    displayMessage('Nothing guessed')
    }else if(guess===secretNumber){//win
        document.querySelector('.number').textContent = secretNumber;
 
        displayMessage(`Correct Number!`)
        document.querySelector('body').style.backgroundColor =
        '#60b347'
        document.querySelector('.number').style.width =
        '30rem'
        if(score>highScore){
            highScore = score
            document.querySelector('.highscore').textContent = 
            score
        }
        
    }else if(guess!==secretNumber){
        if(score>0){
            score --
            document.querySelector('.score').textContent = 
            guess>secretNumber ? displayMessage(`Too high!`):
            displayMessage(`Too low!`)
            document.querySelector('.score').textContent= score
        }else{
             
            displayMessage(`You lose!`)
            document.querySelector('body').style.backgroundColor =
        'red'
        }
    ``
//     }else if(guess> secretNumber){//too high
        
        
//     }else{//too low
//         if(score>0){
            
//             displayMessage(`Too low!`)
//             score --
//             document.querySelector('.score').textContent = 
//             score
//         }else{
            
//             displayMessage(`You lose!`)
//             document.querySelector('body').style.backgroundColor =
//         'red'

//         }
    
// }}
}}) 



document.querySelector(".again").addEventListener
('click',function(){
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) +1 
    console.log(secretNumber);
    displayMessage('Start guessing...')
    document.querySelector('body').style.backgroundColor =
        '#222'
    document.querySelector('.number').style.width =
    '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score
    
})