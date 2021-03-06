'use stric';

// ๐ฉ๐ฉ Array 

// 1 . Array ์ ์ธ ==================================================================
const Array1 = new Array();
const Array2 = [];

// 2 . Array index ํ์ฉ ==================================================================
const Fruits = ['apple', 'banana', 'mango'];
console.log(Fruits);
console.log(Fruits[0]);
console.log(Fruits.length);
console.log(Fruits[Fruits.length - 1]);

console.clear();

// 3 lopping over an array ==================================================================
// A. For 
for (let i = 0; i < Fruits.length; i++) {
    console.log(`For : ${Fruits[i]}`);
}

// B. For of
for (val of Fruits) {
    console.log(`For of : ${val}`);
}

// C. ForEach
// [๐ฉโ๐ฆฑ For Each : ForEach ๋ index Value , index , All Array 3๊ฐ๋ฅผ ๋ชจ๋ ๋ฐ์์ฌ ์ ์๋ค]
Fruits.forEach((a, b, c) => console.log(`index Value : ${a} , index : ${b} , Array : ${c}`));

console.clear();

// 4. Addtion , Deletion , Copy ==================================================================
// A . ๋ฐฐ์ด ๋ง์ง๋ง ๋ถํฐ ์ถ๊ฐ : Push 
Fruits.push("pear", 'Strawberry');
console.log(Fruits);

// B . ๋ฐฐ์ด ๋ง์ง๋ง ๋ถํฐ ์ญ์  : Pop
for (var a = 0; a < 2; a++) {
    Fruits.pop();
}
console.log(Fruits);

// C . ๋ฐฐ์ด ์์์ ๋ถํฐ ์ถ๊ฐ : Unshift 
Fruits.unshift("pear", 'Strawberry');
console.log(Fruits);

// D . ๋ฐฐ์ด ์์์ ๋ถํฐ ์ญ์  : Shift 
for (var a = 0; a < 2; a++) {
    Fruits.shift();
}
console.log(Fruits);

// 5 . Searchin ==================================================================
console.clear();
console.log(`๊ธฐ์กด Array : ${Fruits}`);
//IndexOf
//[ IndexOf : Array ์์ 
//ํ๋ผ๋ฏธํฐ ์กด์ฌํ๋ค๋ฉด retrun index value , ์กด์ฌ ํ์ง ์๋๋ค๋ฉด return -1 ]
console.log(Fruits.indexOf(`mango`));
console.log(Fruits.indexOf('grepe'));

//LastIndexoOf
//[ IndexOf ์ ๊ฐ์ด ์กด์ฌํ๋ฉด index value ๋ฅผ ๋ฐํํด์ฃผ์ง๋ง ์ค๋ณต๋ ๊ฐ์ด ์์๊ฒฝ์ฐ 
// LastIndexOf ๋ ๋ค์์ ๋ถํฐ๋ฅผ ์ฐ์ ์์๋ก ์๋ ค์ค]

//includes
// [Includes : Array ์์ 
// ํ๋ผ๋ฏธํฐ ๊ฐ์ Bool type ์ผ๋ก return ํ๋ค ]
console.log(Fruits.includes(`mango`));
console.log(Fruits.includes(`grepe`));