'use strict';

const isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
};

const num = Math.floor(getRandomFloat(0, 100));

console.log('Загаданное число ' + num);


function replyBot(n) {
    function question(){
        return prompt('Угадай число от 1 до 100');
    }
    const reply_user = question();

    console.log(reply_user);

    if(reply_user === '' || typeof reply_user === "undefined" || reply_user === null || reply_user.match(/^[ ]+$/)) {
        console.log('Игра окончена');
    } else if(n === parseFloat(reply_user)) {
        alert('You Win');
    } else if(!isNumber(reply_user) && reply_user !== null) {
        alert('Введи число!');
        replyBot(n);
    } else if (n > parseFloat(reply_user) && parseFloat(reply_user) != ''){
        alert('Загаданное число больше');
        replyBot(n);
    } else if (n < parseFloat(reply_user) && parseFloat(reply_user) != ''){
        alert('Загаданное число меньше');
        replyBot(n);
    }
}
replyBot(num);


