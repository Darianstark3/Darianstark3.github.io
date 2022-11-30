let done = false;
let final = false;
function findNextQuestion(answer) {
    if (final === true) {
        findFood(answer)
    }
    else {
        if (answer === 'sweet'){
            nextQuestion1 = 'chocolatey'
            nextQuestion2 = 'fruity'
        }
        if (answer === 'savory'){
            nextQuestion1 = 'meat'
            nextQuestion2 = 'no meat'
        }
        if (answer === 'chocolatey'){
            nextQuestion1 = 'warm'
            nextQuestion2 = 'cold'
            final = true;
        }
        if (answer === 'fruity'){
            nextQuestion1 = 'food'
            nextQuestion2 = 'beverage'
            final = true;
        }
        if (answer === 'meat'){
            nextQuestion1 = 'fancy'
            nextQuestion2 = 'casual'
            final = true;
        }
        if (answer === 'no meat'){
            nextQuestion1 = 'American'
            nextQuestion2 = 'Asian'
            final = true;
        }
        document.getElementById('answer1').innerHTML = nextQuestion1;
        document.getElementById('answer2').innerHTML = nextQuestion2;

    }
}
function findFood(lastChoice) {
    if (lastChoice === 'warm'){
        food = 'Try some warm brownies'  
    }
    if (lastChoice === 'cold'){
        food = 'How about some fudge!?'
    }
    if (lastChoice === 'food'){
        food = 'Make a delicious tart!'
    }
    if (lastChoice === 'beverage'){
        food = 'Make a nice smoothie!'
    }
    if (lastChoice === 'fancy'){
        food = 'Oh! Make a steak dinner!'
    }
    if (lastChoice === 'casual'){
        food = 'Beef Sandwich With Soup'
    }
    if (lastChoice === 'American'){
        food = 'Maybe Mac and Cheese?'
    }
    if (lastChoice === 'Asian'){
        food = "Maybe Vegetable Curry?"
    }
    done = true;
    let buttons = document.getElementById('buttons')
    buttons.classList.toggle('hidden');
    let eatText = document.getElementById('eatText');
    console.log(eatText.innerText);
    eatText.innerHTML = food;
    eatText.classList.toggle('finalFood');
}
function getTextofAnswer1(questionID){
    var elem1 = document.getElementById('answer1')
    var text1 = elem1.textContent || elem1.innerText
    return text1;
}
function getTextofAnswer2(){
    var elem2 = document.getElementById('answer2') 
    var text2 = elem2.textContent || elem2.innerText
    return text2;
}
let nextQuestion1 = 'sweet';
let nextQuestion2 = 'savory';
let food = 'filler';

document.getElementById("answer1").onclick = function(){findNextQuestion(getTextofAnswer1())};
document.getElementById("answer2").onclick = function(){findNextQuestion(getTextofAnswer2())};


