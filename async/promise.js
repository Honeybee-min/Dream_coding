'user strict';

// Promise 는 비동기적인 것을 수행할때 callback 함수 대신 유용히 사용하는 object
//포인트 1 . 상태 ( 수행중인지 , 수행 완료 후 성공 ? 실패인지 )
//포인트 2. producer(제공자)와 (consumer)소비자의 차이를 이해 ? ( 이해 안감 )

//1 . Producer
// 정상적이면 호출할 resolve 문제가 생기면 호출할 reject
// Promise obj 이 생성되면 우리가 전달한 함수가 바로 자동 실행됨 
const promise = new Promise((resolve, reject) => {
    // 조금 무거운 일을 하는 것들은 비동기적으로 promise 로 처리 하는것이 좋다
    // 아래 출력되는것이 바로 출력되는것을 보면 알다시피 promise 가 생성됨가 동시에 바로 resolve 를 수행한다
    // 원하지 않는데 동작을 할수도 있으니 아래것을 생각해아한다
    console.log("무언가를 하는중 ~");
    setTimeout(() => {
        // 성공적으로 생성되면 resolve 라는 callback 함수를 통해서 값을 넘겨준다
        //resolve('min');
        //만약 네트워크 통신중  ? 등등 사유로 실패를 해서 reject 라는 애를 callback한다 ? 
        // 이런건 보통 Error 라는 객체를 새로 생성해서 값을 넘겨준다
        reject(new Error('no network'));
    }, 2000);
});

//2. Consumers // then catch finally 등으로 값을 받아올수 있음
// then : 값이 정상적으로 잘 수행이 된다면 ? 그러면 값을 받아온다 어떠한 value 를 [ 여기서는 위에  resolve에서 준 min]
// catch  : recjet 
// finally : 성공하든 실패하든 무조건 마지막에 실행되어지는 놈
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error)
    })
    .finally(()=>{
        console.log('finally');
    });

// 3. promise chaining
 const fetchNumber = new Promise((resolve,reject)=>{
     setTimeout(() => {
         resolve(1);
     }, 1000);
 });

 fetchNumber
 .then(num => num * 2)
 .then(num => num * 3)
 .then(num=>{
     return new Promise((resolve,reject)=>{
         setTimeout(() => {
             resolve(num-1)
         }, 1000);
     })
 })
 .then(num=>console.log(num));

 // 4. Error Handling
 const getHen = () => {
     
 }