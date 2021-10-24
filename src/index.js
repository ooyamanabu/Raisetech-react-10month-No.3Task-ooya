//挨拶
function sayHello() {
  console.log("こんにちは！");
}
sayHello();

function calcSum(num1, num2) {
  return num1 + num2;
}
const calclatedNum = calcSum(1, 3);
console.log(calclatedNum);

const trueFlag = true;
const falseFlag = false;

trueFlag && console.log("A");
falseFlag && console.log("B");
trueFlag || console.log("C");
falseFlag || console.log("D");
