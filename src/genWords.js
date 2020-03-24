// Generates random word of specified language

var es = require('random-spanish-words');
var en = require('random-words');

const fs = require('fs');
const eus_words = fs.readFileSync("./hitzak.txt").toString().split("\n");


// generate 3 random words for the player to choose from:
var genWords = function(lang){
    let words;

    switch (lang) {
        case 'Español':
            words = [];
            for (var i = 0; i < 3; i++) {
              let index = Math.floor(Math.random() * eus_words.length);
              while(eus_words[index].length < 4 && eus_words[index].split(" ").length !== 1) {
                index = Math.floor(Math.random() * eus_words.length);
              }
              words.push(eus_words[index]);
            }
            break;
        case 'English':
            words = en({ exactly: 3 });
            break;
    }

    console.log(words);
    return words;
}
module.exports = genWords;
