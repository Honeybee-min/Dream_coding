'use strict';

// ๐ฉ๐ฉ Async & await
/**
 Promise๋ฅผ ๊ณ์ .then .then (chaining) ํ๋ค๋ณด๋ฉด ๋์กํด์ง ์ ์๋ค. 
 ๋ณด๋ค ๋ ์ง๊ด์ ์ด๊ณ  ๊น๋ํ๊ฒ ์ฌ์ฉํ  ์ ์๋ async&awiat 
 */
/***
 1 . Async ======================================================================
 ์ด์  Promise๋ฅผ ์ด์ฉํ fetchUser function  
function fetchUser(){
    return new Promise((resolve,reject) =>{
        resolve(`min`);
    })
}
 Async ์ ์ธ : function define ์์ async ์ ์ธํด์ฃผ๋ฉด ๋ฐ๋ก promise ํ์์ผ๋ก return ๋๋ค
*/

async function fetchUser() {
    return `min`;
}
const user = fetchUser();
user.then(console.log); // promise{`min`}
console.log(user); // min

/** 
 2 . await  ======================================================================
 asynce ๋ก ์ ์ธํ function ์ ๋ํ์ฌ ์ฌ์ฉ๊ฐ๋ฅํ๋ฉฐ await ์ด ์๋ ๋ผ์ธ์ ๋๊ธฐ์ ์ผ๋ก (๋๋?) ๋ง๋ค์ด์ค
*/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return `๐`;
}

async function getBanana() {
    await delay(1000);
    return `๐`;
}



/** ======================================================================
์ถ๋ ฅ ๊ฒฐ๊ณผ : ์ด 2์ด ํ apple + banana ๊ฐ ์ถ๋ ฅ๋๋ค
์๋ ์ฝ๋๋ฅผ ํตํด์ ๋๊ธฐ์ ์ผ๋ก apple,banana ๋ฅผ ๊ฐ์ ธ์ ์ถ๋ ฅํ์ง๋ง 
getApple ์ getBanana ๋ ์๋ฌด๋ฐ ์ฐ๊ด์ฑ์ด ์์ผ๋ฏ๋ก ๋ณ๋ ฌ์ ์ํ์ ํด๋ ๋๋ค
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
 */

/* ======================================================================
์ถ๋ ฅ ๊ฒฐ๊ณผ : 1์ด ํ ๋์์ apple + banana ๊ฐ ์ถ๋ ฅ๋๋ค
๊ทธ๋์ ๋ณ๋ ฌ์  ์ํํ๋ ์ฝ๋๊ฐ ์ด๊ฒ์ด๋ค
[ ๋จ, getApple ์ ํธ์ถํ๋๋ฐ , getBanana๋ฅผ ํธ์ถํ๋๋ฐ ์๋ก ์ฐ๊ด์ด ์์ด์ผํ๋ค]

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}
pickFruits().then(console.log);
 */

/* ======================================================================
๋ณ๋ ฌ์  ์ถ๋ ฅํ๋ ์ ์ฝ๋๋ ๋๋ฌด ๋ง์ ๋ณ์๋ฅผ ์ ์ธํ๊ณ  ์ฝ๋๊ฐ ์ด์์ง ๋ชปํ๋ค
๊ทธ๋์ ์๋๋ฅผ ์ฌ์ฉํ๋ค
3 . userful Promise APIs
all API : ์ ๋ถ ๋ฐฐ์ดํ์์ผ๋ก ๋ฐ์์จ๋ค. ๊ทธ ํ then์ ํตํด join(๋ฐฐ์ด์ stringํ) ํด์ return ํด์ค๋ค
 */
console.clear();
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

// race : all ๊ณผ ๋น์ทํ์ง๋ง ๊ฐ์ฅ ๋จผ์  return ํด์ฃผ๋ ํจ์๋ง ์ต์ข return ํ๋ค.
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);