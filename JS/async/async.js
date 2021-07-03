'use strict';
// async & await

// 1. async
// promise 사용법
/** 
function fetchUser() {
    return new Promise((resolve,reject) =>{
        resolve('min');
    })
}
*/
// async 사용법  async 붙여주면 바로  promise 처럼
async function fetchUser(){
    return `min`;
}
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// await 의 뜻 : async 를 쓰는 함수에서 사용가능한데 awit 이있는 라인이 모두 작업을 완료 하면 ! 그 다음 동작을 수행해라
// 동기적인 느낌으로 만들어줌 
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    //throw 'Error'
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

// promise 로 위에 함수들을 사용하려면 
// getApple 함수를 실행해서 잘 받아와졌으면(resolve) apple 으로 받고 그 다음 getBanana 를 해서 잘 받아지면 
// banana 까지 받는다 그 후 apple + banana 를 최종 리턴한다
// 아래 코드의 문제 : promise 도 결국 너무 많이 chaining 하면 콜백지옥을 다시 불러일으킨다 
/**
function pickFruits(){
    return getApple()
    .then(apple=>{
        return getBanana()
        .then(banana => `${apple} + ${banana}`);
    })
}
 */
/**
 async & awit 으로 아래를 구현하면 동기적으로 사용하는것처럼 간단하게 코드를 구현할수 있따
 에러 처리도 try catch 를 통해서 간단히 할수 있따 
 그러나 ! 문제가 하나 있다 병렬적 실행이 불가능 
( 무슨뜻이냐 ? : apple 변수 만들때 getApple 의 1초 기다려 , 그리고 1초 후 banana 도 똑같이 반복 해서 총 2초 소요
 효율이 떨어진다 그래서 promise 는 생성하면 바로 실행되는 특성 (생성시 resolve 바로 실행)
 을 이용해서 병렬적으로(동시에) apple 이랑 banana 를 생성하고 그리고 변수에 할당을 해주면 ? 
 1초 후에 동시에 생성 후 변수에 할당된다  (맞나 ? )
 */
async function pickFruits(){
    try{
        const applePromise = getApple(); //사과  promise 만들기
        const bananaPromise = getBanana(); // 바나나 promise 만들기   // 조건 : 
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    }catch{
        console.log('error');
    }
}
/*위 코드의 조건도 있다 (바로 promise 를 병렬적으로 만들어서 할당해주는것)
getApple() 이랑 getBanana() 가 서로 연계되지 않을떄 (getApple 하는데 getBanana가 필요없고 반대도 필요 없기때문)
 */

/*
!! 하지만 위에 코드는 딱봐도 여러 변수를 선언해야 하고 조금 더럽지 않는가 ? 그래서 해결법이 아래 있따
 */
  
// 3. userful Promise APIs\
/**얘는 뭐냐면 promise 의 all 이라는 함수를 사용하는거다 
    all 은 전부 배열형태로 받아온다 아래 처럼 getApple geBanana 를 배열로 받아와서 정상적이라면(then)
    받은 배열들을 fruits 라 지정하고 이걸 join(배열을 string화) 한 값을 return 해준다
 */
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);

/*얘는 또 뭐냐 ? race 
  race 는 All 과 비슷하지만 배열로 전부 받아서 가장 먼저 return 하는 함수만 return 해준다 
  만약 위에 getApple을 딜레이를 2초 주고 Banana 를 1초 줬으면 Banana 가 먼저 리턴이 왔을테니
  Apple 은 버리고 banana 만 값이  return 된다 
 */
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}
pickOnlyOne().then(console.log);
//pickFruits().then(console.log);