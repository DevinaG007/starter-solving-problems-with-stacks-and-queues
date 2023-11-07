const Stack = require("../lib/stack");

const postfix = (expression) => {
  const operators = new Stack();
  let result = [];
  let precedence = {
    "-": 0,
    "+": 0,
    "*": 1,
    "/": 1,
  };
  let ops = higher.concat(lower);
  for (let i = 0; i < expression.length; i++) {
    let cur = expression[i];
    if (cur !== " ") {
      let top = operators.top;
      if (cur === "(") operators.push(cur);
      else if (cur === ")") {
        if (top && top.value !== "(") {
          const popped = operators.pop();
          result.push(popped); //add code to check if next char is (
        } else {
          operators.pop();
        }
      } else if (ops.includes(cur)) {
        if (
          !top ||
          top.value === "(" ||
          precedence[cur] > precedence[top.value]
        ) {
          operators.push(cur);
        } else {
          while (top || top.value < cur) {
            const popped = operators.pop();
            result.push(popped);
          }
        }
      } else {
        result.push(cur);
      }
    }
  }
  while (operators.top) {
    const popped = operators.pop();
    result.push(popped);
  }
  result = result.join(" ");
  return result;
};

module.exports = postfix;
