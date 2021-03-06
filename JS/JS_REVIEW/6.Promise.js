'use strict';

// π© Promise λ λΉλκΈ°μ μΈ κ²μ μνν λ callback ν¨μ λμ  μ μ©ν μ¬μ©ν  μ μλ Object


// 1. Producer π¨
/**
 Promise object κ° μμλλ©΄ μ°λ¦¬κ° μ λ¬ν  function μ΄ λ°λ‘ μλ μ€νλλ€.
 Promise λ₯Ό μμ±νλ©΄ resolve κ° λ¬Έμ κ° μλ€λ©΄ μλμΌλ‘ μ€ννλ€ 
 */
const promise = new Promise((resolve,reject)=>{
    resolve(`μ λ―Ό λμ΄κ°λ€ ~`);  // resolve λ₯Ό μ€νμν€λ©΄ μ μμ μΌλ‘ λμλ€ νλ¨νμ¬ λλλ€ μλ ν¨μ μ€ν μλλ€.
    setTimeout(()=>{
        reject(new Error('no network !')); // λ§μ½ κΈ°ν μ¬μ λ‘ μ€ν¨ν΄μ recjet λ₯Ό callback νλ©΄ λ³΄ν΅ Error κ°μ²΄ μμ±ν΄μ λκ²¨μ€λ€
    },2000);
});


// 2. Consumers π 
/**
 [ Then , catch , finally λ±μΌλ‘ κ°μ λ°μμ¬ μ μλ€ !]
 Then : λ¬Έμ  μμ΄ μ€νλμ΄ resolve μ λμ΄μ¨ κ°μ μ¬μ©νλ€
 catch : reject 
 finally : μ±κ³΅ & μ€ν¨νλ  λ§μ§λ§μ λ¬΄μ‘°κ±΄ μ€νλμ΄ μ§λ€.
 */

promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("λ§μ§λ§μ μ€νλλ finally !")
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



