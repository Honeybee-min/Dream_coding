'user strict';

// 자바스크립트는 동기적인 놈이다 { 비동기적이란 :  언제 코드가 실행될지 알수 없는 놈들 }
// hoisting : 호이스팅이란 ? :  var , funtion 등 함수 선언들이 제일 위로 올라가는게 호이스팅 

// 즉 내가 이해해본 콜백함수는 :  https://satisfactoryplace.tistory.com/18 여기 예제가 대충 이해 가는데
// 어떤 funtion 의 매개변수가 또  funtion 인거다 즉 이 함수를 실행하면 다른 함수를 받아와서 그 함수에 대한 동작을
// 또 제어 할수 있는거다 


console.log('1');
setTimeout(() =>
    console.log('2'), 1000);
console.log('3');

// 콜백도 두 종류 
//Synchronous callback : 동기적 콜백 ======================================
function printImmediately(print) {
    print();
}
printImmediately(() => console.log("hello"))

// Asynchronous callback : 언제 실행될지 모르는 비동기적 콜백 ======================================
function printwithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printwithDelay(() => console.log("async callback"), 2000);

// Javascript 엔진이 구동하는 원리에 따르면 함수 선언은 가장 위로 올라간다 
// 즉 function printlmmediately 랑 printwithDelay 는 가장 위에서 선언되어 올라가고 
// 1 찍히고 2찍는 함수 실행, 3찍히고  printlmmediately 선언 ,
//  printlmmediately 함수 실행 , printwithDelay  선언 , printwithDelay 실행 순 이다 
// setTimeout 이 비동기를 이용할수 있는 대표적 함수 

//12 분 부터 다시 보기 
// 콜백 지옥 ? example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'min' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'min') {
                onSuccess({
                    name: 'min',
                    role: 'admin'
                });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);

    }
}

// 아래 코드의 문제점 : 콜백안에 콜백이 연계되어 있어서 가독성 , 효율 너무 안좋다 
// 
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            (userWithRole) => {
                alert(`hello ${userWithRole.name},you have a ${userWithRole.role}`)
            },
            (error) => {
                console.log(error);
            }
        )
    },
    error => {
        console.log(error)
    }
)