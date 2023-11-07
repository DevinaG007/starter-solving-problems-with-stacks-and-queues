const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let middle = Math.floor(sentence.length/2);
  const firstHalf = new Stack();
  for (let i = 0; i < middle; i++){
    firstHalf.push(sentence[i]);
  }
 if (sentence.length%2 !== 0){
  middle = middle + 1;
 }
  for (let i = middle; i < sentence.length; i++){
    let popped = firstHalf.pop();
    if (popped !== sentence[i]) return false;
  }
  return true;
};

module.exports = isPalindrome;
