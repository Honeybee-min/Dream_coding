'use strict';

// ๐ฉ๐ฉ CallBack 
/**
 ๋ช๊ฐ์ง ๊ฐ๋ {
    ๐ฉhoisting(ํธ์ด์คํ) : let, var, fuction ๋ฑ ์ ์ธํ ๋ชจ๋  ํจ์๋ค์ ์๋์ผ๋ก ์ฝ๋ ์ ์ผ ์์์ ์ ์ธ๋๋ค.

    ๐ฉJavascript๋ ๋๊ธฐ์ ์ธ ์ธ์ด์ด๋ค , ์ฆ ์ฐจ๋ก๋ก 1 - 2 - 3 ๋จ๊ณ์ค
    1๋จ๊ณ๊ฐ ๋์ด ๋์ง ์์ผ๋ฉด 2๋จ๊ณ๋ฅผ ์คํํ์ง ์๋๋ค 

    ๐ฉ์ฝ๋ฐฑํจ์์ ์ ์ : https://satisfactoryplace.tistory.com/18 [ ๋ด๊ฐ ์ดํดํ ์ ์๋ ์ฌ์ดํธ]
    ์ฆ function ์ parameter ๊ฐ ๋ ๋ค๋ฅธ function ์ธ๊ฑฐ๋ค 
    ๊ทธ function ์ ๋ฐ์์์ ์ ์ด ํ์ฌ ์ฌ์ฉํ๋ ์ด๋ฐ ์ผ๋ จ์ ๊ณผ์ ์ ์ฝ๋ฐฑํจ์์ด๋ค 
    [๋จ function1 ์ parameter ๊ฐ function2 ์ธ๋ฐ ์ด๊ฒ์ parameter ๊ฐ function3 ์ด๊ณ  ์ญ์ญ์ญ~~
    ๋๋ฉด ์ด๋ฐ๊ฒ์ ์ฝ๋ฐฑ์ง์ฅ ์ด๋ผ๊ณ  ํ๋ค (๋๋ฌด ํจ์์ ๊ผฌ๋ฆฌ๋ฅผ ๋ฌผ๊ณ  ๋ฌผ์ด์ ํจ์จ ๋ฐ ๊ฐ๋์ฑ ๋ฑ ์ ์ฒด์ ์ผ๋ก ์์ข๋ค)]

    ๐ฉ๋๊ธฐ&๋น๋๊ธฐ๋ฅผ ์ค์ตํ๋ ค๋ฉด ์๋ฒ์ ํด๋ผ์ด์ธํธ์ ํต์ ์ผ๋ก ์ธํ ๋๋ ์ด ๋ฑ์ผ๋ก ๋ฌธ์ ๊ฐ ๋ฐ์ํ๋ ๊ฒฝ์ฐ๊ฐ ์์ด์ผํ๋๋ฐ
       ๋น์ฅ์ ๋ถ๊ฐ๋ฅํ๋๊น setTimeout() ์ด๋ผ๋ ํจ์๋ก ๊ฐ์ ๋ก ์๊ฐ์ ๋๋ ์ด ์์ผ๋ณธ๋ค. 

 }
 */

// 1. ์ฝ๋ฐฑ์ ์ข๋ฅ ===================================================================
// Synchronous callback : ๋๊ธฐ์  ์ฝ๋ฐฑ ===============================================
/**
 [์ฒ์์ ํด๋น ํจ์ ๊ณผ์ ์ ์ดํด๋ฅผ ์ ๋ชปํ์ด์ ํผ์ ์ ์ด๋ณด๋ ํด๋น ํจ์ ์คํ ๊ณผ์ ]
 printImmediately ๋ผ๋ print๋ฅผ parameter ์ธ ํจ์ ์ง์  ๋ด๋ถ ๊ตฌ์กฐ๋ ์ ๋ฌ๋ฐ์ print๋ฅผ ์คํ์ํค๋ ๋ฌธ์ด๋ค
 [ ์ด๊ฑธ ๋ณด์ํ๋ print ๋ผ๋ ๋์ ๋ฌด์กฐ๊ฑด ํจ์๊ฐ ๋ค์ด์์ผ ํ๋๊ตฌ๋ !]
 */

function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));

// Asynchronous callback : ๋น๋๊ธฐ์  ์ฝ๋ฐฑ ==============================================
/**
 [์ฒ์์ ํด๋น ํจ์ ๊ณผ์ ์ ์ดํด๋ฅผ ์ ๋ชปํ์ด์ ํผ์ ์ ์ด๋ณด๋ ํด๋น ํจ์ ์คํ ๊ณผ์ ]
printwithDelay ๋ผ๋ print , timeOut ์ ๋ฐ๋ ํจ์ ์ง์  ๋ด๋ถ ๊ตฌ์กฐ๋ setTimeout ์ด๋ผ๋ ํจ์๋ฅผ ์คํ์ํค๋๋ฐ
setTimeout ์ ์คํํ  ํจ์ , ์๊ฐ์ parameter ๋ก ๋ฐ๋๋ค 
์ฆ ํจ์print ๋ฅผ ๋ฐ๊ณ  ์๊ฐtimeOut ์ ๋ฐ์์ ์ง์ ๋ ์๊ฐ ๋ค์ print ํจ์๋ฅผ ์คํํ๋ ๋ฌธ์ด๊ตฌ๋ !
 */
function printwithDelay(print,timeOut){
    setTimeout(print,timeOut);
}
printwithDelay(()=>console.log('async callback ! '), 2000);



// 2 . Callback ์ง์ฅ ์์ 
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






