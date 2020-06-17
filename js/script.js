'Use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
};

const num = Math.floor(getRandomFloat(0, 100));

console.log(num);


function replyBot(n) {
    function question(){
        return +prompt('Угадай число от 1 до 100');
    }
    const reply_user = question();

    console.log(reply_user);

    if(n === reply_user) {
        alert('You Win');
    } else {
        replyBot(n);
    }
}

replyBot(num);
