'Use strict';

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
        return +prompt('Угадай число от 1 до 100');
    }
    const reply_user = question();

    console.log(reply_user);

    if(n === reply_user) {
        alert('You Win');
    } else if(!isNumber(reply_user)) {
        alert('Введи число!');
        replyBot(n);
    } else if (n > reply_user){
        alert('Загаданное число больше');
        replyBot(n);
    } else if (n < reply_user){
        alert('Загаданное число меньше');
        replyBot(n);
    } else {
        replyBot(n);
    }
}
replyBot(num);

// Я не понял как сделать отмену, я перепробовал варианты типа (reply_user == null) {alert('Отмена игры')}
// Но не помогло, можете мне помочьи обьяснить как это сделать, а также помочь решить проблему с Es6 и Es7

