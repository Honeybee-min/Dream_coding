'use strict';

// 👩👩 Async & await
/**
 Promise를 계속 .then .then (chaining) 하다보면 난잡해질 수 있다. 
 보다 더 직관적이고 깔끔하게 사용할 수 있는 async&awiat 
 */
/***
 1 . Async ======================================================================
 이전 Promise를 이용한 fetchUser function  
function fetchUser(){
    return new Promise((resolve,reject) =>{
        resolve(`min`);
    })
}
 Async 선언 : function define 앞에 async 선언해주면 바로 promise 타입으로 return 된다
*/

async function fetchUser() {
    return `min`;
}
const user = fetchUser();
user.then(console.log); // promise{`min`}
console.log(user); // min

/** 
 2 . await  ======================================================================
 asynce 로 선언한 function 에 대하여 사용가능하며 await 이 있는 라인은 동기적으로 (느낌?) 만들어줌
*/
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return `🍎`;
}

async function getBanana() {
    await delay(1000);
    return `🍌`;
}



/** ======================================================================
출력 결과 : 총 2초 후 apple + banana 가 출력된다
아래 코드를 통해서 동기적으로 apple,banana 를 가져와 출력했지만 
getApple 와 getBanana 는 아무런 연관성이 없으므로 병렬적수행을 해도 된다
async function pickFruits(){
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
 */

/* ======================================================================
출력 결과 : 1초 후 동시에 apple + banana 가 출력된다
그래서 병렬적 수행하는 코드가 이것이다
[ 단, getApple 을 호출하는데 , getBanana를 호출하는데 서로 연관이 없어야한다]

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
병렬적 출력하는 위 코드는 너무 많은 변수를 선언하고 코드가 이쁘지 못하다
그래서 아래를 사용한다
3 . userful Promise APIs
all API : 전부 배열타입으로 받아온다. 그 후 then을 통해 join(배열을 string화) 해서 return 해준다
 */
console.clear();
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

// race : all 과 비슷하지만 가장 먼저 return 해주는 함수만 최종 return 한다.
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);