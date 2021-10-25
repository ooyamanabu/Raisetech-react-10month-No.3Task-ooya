//第3回reactコース課題

//〜変数宣言〜
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
let num0 = num; //letなら再代入できる
num0 = 99;
console.log(num); //結果10
console.log(num0); //結果99
//・オブジェクト型（値が格納された場所を示すものを持つ）
const nums = [10, 20];
const nums0 = nums;
nums[0] = 99;
console.log(nums); //[99, 20]
console.log(nums0); //[99, 20]

//〜配列・オブジェクトの変更〜
//配列の中身の変更
const num1 = [10, 20];
//↓変更
num1[0] = 100;
num1.push(30);
console.log(num1); //[100,20,30]と変更される
//オブジェクト型の中身の変更
const myProfile = {
  name: "大谷",
  age: 39
};
console.log(myProfile.name); //大谷
//↓変更
myProfile.name = "大谷丸";
myProfile.age = 70;
console.log(myProfile); //{name:"大谷丸",age:70}

//〜jsの関数〜（特定の処理をまとめて書いて、何度も呼び出せるようにしておく）
//関数の定義
function sayHello() {
  console.log("こんにちは！");
}
sayHello(); //関数が実行され、"こんにちは！"と返ってくる

function calcSum(num1, num2) {
  return num1 + num2;
}
const calclatedNum = calcSum(1, 3);
console.log(calclatedNum); //calacSumの引数1と３の合計を返してと記述されているため、４が返却される

/*〜HTMLにjsを読み込む方法〜
処理を<script></script>タグ内に書く方法と、別ファイルにリンクさせて書く方法がある。別ファイルに書く方が汎用性があると思われるので、自分はそうしていこう。
（詳細やり方はindex.htmlの方に記載）*/

//演算子　代入演算子（値を変えたい時)
let num3 = 10;
num3 = 20; //値を代入できる
let name = "白田";
name = "黒田"; //値を代入できる

/*演算子　計算
+ 足し算 - 引き算 * 掛け算 / 割り算 % 割った余りを出す ++ 1を足す -- 1を引く　*/
const num4 = 1 + 2;
console.log(num4); //3
const num5 = 3 - 1;
console.log(num5); //2
const num6 = 3 * 4;
console.log(num6); //12
const num7 = 12 / 2;
console.log(num7); //6
const num8 = 10 % 3;
console.log(num8); //1

let num9 = 10;
console.log(++num9); //11
console.log(num9++); //11
console.log(num9); //12
let num10 = 10;
console.log(--num10); //9
console.log(num10--); //9
console.log(num10); //8

const trueFlag = true;
const falseFlag = false;

trueFlag && console.log("A");
falseFlag && console.log("B");
trueFlag || console.log("C");
falseFlag || console.log("D");
