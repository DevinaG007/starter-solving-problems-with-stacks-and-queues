const Stack = require("../lib/stack");

const match = (expression) => {
    const openP = new Stack();
    for (let i = 0; i < expression.length; i++){
        if (expression[i] === "("){
            openP.push(expression[i])
        }
        if (expression[i] === ")"){
            if (openP.top){
                openP.pop()
            } else {
                return false;
            }
        }
    }
    if (openP.top){
        return false;
    } else {
        return true;
    }
};

module.exports = match;
