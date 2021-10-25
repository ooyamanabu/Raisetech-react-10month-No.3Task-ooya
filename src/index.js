//第3回reactコース課題

//変数宣言
const myName = "ooya";
const yourName = "大谷";
//myName = "ooya丸"; constは定数の為再代入(変更)できない
console.log(myName);
console.log(yourName);

let iName = "manabu";
iName = "manabu丸"; //再代入できる
//let iName = "manabu君"; 再宣言できない
console.log(iName);

var mName = "学";
mName = "学丸"; //エラーなし
var mName = "学君"; //エラーなし
console.log(mName);
//使い勝手が良い反面セキュリティ部分に難有り(書き変わってしまったり、バグの温床)の為今後は使用していかない方が良いとされている

//Javascriptの変数には基本、プリミティブ型とオブジェクト型があり、値の持ち方に違いがある。
//・プリミティブ型(値自体を持つ)
const num = 10;
let num2 = num; //letなら再代入できる
num2 = 99;
console.log(num); //結果10
console.log(num2); //結果99
//・オブジェクト型（値が格納された場所を示すものを持つ）
const nums = [10, 20];
const nums2 = nums;
nums[0] = 99;
console.log(nums);
console.log(nums2);

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
