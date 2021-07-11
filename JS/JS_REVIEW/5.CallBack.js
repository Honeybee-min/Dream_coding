'use strict';

// 👩👩 CallBack 
/**
 몇가지 개념 {
    👩hoisting(호이스팅) : let, var, fuction 등 선언한 모든 함수들은 자동으로 코드 제일 위에서 선언된다.

    👩Javascript는 동기적인 언어이다 , 즉 차례로 1 - 2 - 3 단계중
    1단계가 끝이 나지 않으면 2단계를 실행하지 않는다 

    👩콜백함수의 정의 : https://satisfactoryplace.tistory.com/18 [ 내가 이해할수 있는 사이트]
    즉 function 의 parameter 가 또 다른 function 인거다 
    그 function 을 받아와서 제어 하여 사용하는 이런 일련의 과정을 콜백함수이다 
    [단 function1 의 parameter 가 function2 인데 이것의 parameter 가 function3 이고 쭊쭊쭊~~
    되면 이런것을 콜백지옥 이라고 한다 (너무 함수에 꼬리를 물고 물어서 효율 및 가독성 등 전체적으로 안좋다)]

    👩동기&비동기를 실습하려면 서버와 클라이언트의 통신으로 인한 딜레이 등으로 문제가 발생하는 경우가 있어야하는데
       당장은 불가능하니까 setTimeout() 이라는 함수로 강제로 시간을 딜레이 시켜본다. 

 }
 */

// 1. 콜백의 종류 ===================================================================
// Synchronous callback : 동기적 콜백 ===============================================
/**
 [처음에 해당 함수 과정을 이해를 잘 못했어서 혼자 적어보는 해당 함수 실행 과정]
 printImmediately 라는 print를 parameter 인 함수 지정 내부 구조는 전달받은 print를 실행시키는 문이다
 [ 이걸 보아하니 print 라는 놈은 무조건 함수가 들어와야 하는구나 !]
 */

function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback : 비동기적 콜백 ==============================================
/**
 [처음에 해당 함수 과정을 이해를 잘 못했어서 혼자 적어보는 해당 함수 실행 과정]
printwithDelay 라는 print , timeOut 을 받는 함수 지정 내부 구조는 setTimeout 이라는 함수를 실행시키는데
setTimeout 은 실행할 함수 , 시간을 parameter 로 받는다 
즉 함수print 를 받고 시간timeOut 을 받아서 지정된 시간 뒤에 print 함수를 실행하는 문이구나 !
 */
function printwithDelay(print,timeOut){
    setTimeout(print,timeOut);
}
printwithDelay(()=>console.log('async callback ! '), 2000);



// 2 . Callback 지옥 예시 
class UserStorage{
    constructor(id,password,onSucess,onError){
        this.id = id,
        this.password = password,
        this.onSucess = onSucess,
        this.onError = onError;
    }

    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id === 'min' && password === 'min')||
                (id === 'test' && password === 'test')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found ! '));
            }
        },2000);
    }

    getRoles(user,onSuccess,onError){
        setTimeout(()=>{
            if(user==='min'){
                onSuccess({
                    name:'min',
                    role:'admin'
                });
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('id : ');
const password = prompt('password : ');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            id,
            (userWithRole)=>{
                alert(`hello ${userWithRole.name} , you Have a ${userWithRole.role}`)
            },
            (error)=>{
                alert('error');
            }
        )
    },
    error =>{
        console.log(error);
    }
)






