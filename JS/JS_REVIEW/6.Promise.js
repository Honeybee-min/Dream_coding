'use strict';

// 👩 Promise 는 비동기적인 것을 수행할때 callback 함수 대신 유용히 사용할 수 있는 Object


// 1. Producer 👨
/**
 Promise object 가 생상되면 우리가 전달할 function 이 바로 자동 실행된다.
 Promise 를 생성하면 resolve 가 문제가 없다면 자동으로 실행한다 
 */
const promise = new Promise((resolve,reject)=>{
    resolve(`정민 넘어간다 ~`);  // resolve 를 실행시키면 정상적으로 되었다 판단하여 끝난다 아래 함수 실행 안된다.
    setTimeout(()=>{
        reject(new Error('no network !')); // 만약 기타 사유로 실패해서 recjet 를 callback 하면 보통 Error 객체 생성해서 넘겨준다
    },2000);
});


// 2. Consumers 🎅 
/**
 [ Then , catch , finally 등으로 값을 받아올 수 있다 !]
 Then : 문제 없이 실행되어 resolve 에 넘어온 값을 사용한다
 catch : reject 
 finally : 성공 & 실패하든 마지막에 무조건 실행되어 진다.
 */

promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("마지막에 실행되는 finally !")
    });

// 3 . Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1);
    },1000);
});

fetchNumber
.then((num)=>num*2)
.then((num)=>num*3)
.then((num)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        resolve(num-1))
    },1000);
})
.then((num)=>console.log(num));



