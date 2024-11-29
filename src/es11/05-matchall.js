const expressionRegular = /\b(Apple)+\b/g;
const fruit = 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc apple.';
for(const match of fruit.matchAll(expressionRegular)){
    console.log(match);
}
