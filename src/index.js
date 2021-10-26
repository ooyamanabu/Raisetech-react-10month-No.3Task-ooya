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

/*〜比較演算子〜
== 比較　=== 厳密比較 != 異なるかの比較 !== 異なるかの厳密比較 > 大なり　 >= 大なり（対象の数を含む） < 小なり <= 小なり（対象の数を含む） */
const num11 = 1;
const str = "1";
console.log(num11 == str); //true
console.log(num11 === str); //false 厳密比較だとfalseになる（基本こちらを使用）
console.log(num11 != str); //false
console.log(num11 !== str); //true
const num12 = 3;
console.log(num12 > 3); //false
console.log(num12 >= 3); //true
console.log(num12 < 3); //false
console.log(num12 <= 3); //true

/*〜論理演算子〜
if文に於いて、&& 左右どちらもtrueなら　 ||左右どちらかtrueなら　。　どちらも先ずは左側の判定を行い、そこがtrueなら結果を返す。falseなら右側を判定し、その結果を返す。左から右へ都度都度判定が行われる*/
const trueFlag = true;
const falseFlag = false;

if (trueFlag && falseFlag) {
  //左しかtrueではないので実行されない
}
if (trueFlag || falseFlag) {
  //どちらかが　（この場合左が）trueなので実行される
}
trueFlag && console.log("A");
falseFlag && console.log("B");
trueFlag || console.log("C");
falseFlag || console.log("D"); //この場合AとDが表示される
//　! 評価結果を反転する
if (!falseFlag) {
  //falseの逆でtrueなので実行される
}

//三項演算子　　　AがtrueならBを、falseならCを返却
const result1 = trueFlag ? "trueです" : "falseです";
console.log(result1); //trueです　が表示
const result2 = falseFlag ? "trueです" : "falseです";
console.log(result2); //falseです　が表示

/*true/falseの判定について色々値を入れて確かめてみよう
"ABC",0,10,undefind,null,false,NaN,"",[],{}; を値に入れてtrue(表示はtrushy)になるものはどれか見てみる。*/
const val0 = "ABC"; //true
if (val0) {
  console.log("trushyです");
}
console.log();
const val1 = 0;
if (val1) {
  console.log("trushyです");
}
console.log();
const val2 = 10; //true
if (val2) {
  console.log("trushyです");
}
console.log();
const val3 = undefined;
if (val3) {
  console.log("trushyです");
}
console.log();
const val4 = null;
if (val4) {
  console.log("trushyです");
}
console.log();
const val5 = false;
if (val5) {
  console.log("trushyです");
}
console.log();
const val6 = NaN;
if (val6) {
  console.log("trushyです");
}
console.log();
const val7 = "";
if (val7) {
  console.log("trushyです");
}
console.log();
const val8 = []; //true
if (val8) {
  console.log("trushyです");
}
console.log();
const val9 = {}; //true
if (val9) {
  console.log("trushyです");
}
console.log();
/*構文の書き方としては省略して書けるはずと思い、調べfilterというメソッドを見つけたが、'array.filter(callback [,that]);'
書き方が把握し切れずに使用断念（そもそもこのメソッドで良いのかという判断もつかなかった）今後の講義でも出るかもしれないのと、順を追った方がよいと判断し、
ひとつづつ書くことにする。*/

//for文,while文　(配列をループして処理を行う）
const numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
} //1
//2
//3 と表示され4になる前に終了
let num13 = 1;
while (num13 <= 3) {
  console.log(num13);
  num13++;
} //1
//2
//3 同じく
//React開発にはあまり使用しないらしいが、わからないのはよくないのと混乱を避けるため理解はするようにしよう。

//if else文
const str0 = "C";

if (str0 === "A") {
  console.log("Aです");
} else if (str0 === "B") {
  console.log("Bです");
} else {
  console.log("その他です");
}
//同一の変数に見合う処理を表示するのに使える

//switch文
const str1 = "C";
switch (str1) {
  case "A":
    console.log("A");
    break;
  case "B":
    console.log("B");
  default:
    console.log("その他です");
    break;
} //この場合上記のif else文と内容は同じだが、こちらの方が使い勝手が良さそう。breakを入れないと判定が続くので注意。

//try catch文
try {
  //処理
  throw new Error("例外発生");
} catch (error) {
  console.log(error.message);
} //tryの中で何かしらの例外が発生した場合、catchの方にとびそちらの処理が行われる。throwを使うと任意でエラー等の処理を発生させることができる。

//〜ES6以降のモダンな記法　　テンプレート文字列〜
//従来の型
const name0 = "ooya君"; //クォーテーションはシングルでもダブルでも良い。自分はダブル派。チームに合わせることが仕事では吉。
const age0 = 39;
const sentence = name0 + "は" + age0 + "歳です！";
console.log(sentence); //ooya君は39歳です!
//テンプレート文字列を用いた方法
const name1 = "ooya君";
const age1 = 39;
const sentence0 = `${name1}は${age1}歳です！`; // `` (バッククォートで囲むと${}の中がJavascriptになる)
console.log(sentence0); //同じくooya君は39歳です!

//アロー関数
/*従来
function(引数)　{
  処理内容
}
 アロー関数
 (引数)　=> {
   処理内容
 }　　
 =>(矢印のよう) を引数の後に書けばfunctionと記述しなくても動く*/
//従来
const func1 = function (name) {
  return `${name}です!`;
};
//アロー関数
const func2 = (name) => {
  return `${name}です!`;
};
console.log(func1("大谷")); //大谷です!
console.log(func2("大谷丸")); //大谷丸です!

//引数が１つの時はかっこ（）を省略できる
const func3 = (name) => {
  return `${name}です!`;
};
console.log(func3("オオヤ")); //オオヤです!

/*２つ以上引数を入れるとエラーになってしまう（この場合nameとageが入ってる　）

const func4 = name, age => {
  return `${name}です!`;
}
console.log(func4("オオヤ"));//オオヤです!　*/

//2つ以上引数がある時はかっこ()で囲む
const func5 = (name, age) => {
  return `${name}です!`;
};
console.log(func5("オオヤ")); //オオヤです!

//処理が１行（ひと塊）で終わる場合は{}とreturnを省略できる。覚えておくと激アツ。

/*const func6 = (name) => {
  return `${name}です!`;
}
console.log(func6("オオヤ"));* このひと塊の処理が ↓ */
const func6 = (name) => `${name}です!`;
console.log(func6("おおや")); //おおやです!
//よく覚えておくように

const func7 = () => ({
  name: "おおやくん",
  age: 39
});
console.log(func7()); //{name:おおやくん, age: 39}
//アロー関数はまだ把握できてないので今後も覚えよう
