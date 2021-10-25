//第3回reactコース課題

//変数宣言
const myName = "ooya";
const yourName = "大谷";

myName = "ooya丸"; //constは定数の為再代入(変更)できない

let iName = "manabu";
iName = "manabu丸"; //再代入できる

let iName = "manabu君"; //再宣言できない

var mName = "学";
mName = "学丸"; //エラーなし
var mName = "学君"; //エラーなし
//使い勝手が良い反面セキュリティ部分に難有り(書き変わってしまったり、バグの温床)の為今後は使用していかない方が良いとされている

//Javascript基本

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
