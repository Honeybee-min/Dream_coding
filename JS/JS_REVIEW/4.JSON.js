'use strict';

// π©π© JSON 


// [ JSON  : λ°μ΄ν° ν¬λ§·νμμ μΌμ’μ΄λ€ , ]
// [ κ²½λμ λ°μ΄ν° κ΅ν λ°©μμ΄λ€ , Javascriptμμ κ°μ²΄λ₯Ό λ§λ€ λ μ¬μ©νλ ννμμ΄λ€]
// name-value νμμ μ μ΄λ€ { String key : String Value} 
/** [ μ΄λ° λλμ νμμ΄λ€]
 const Market = {
     "store" : "pizza market",
     "location" : "seoul",
     "owner" : {
         "owner_name" : "min",
         "ower_number" : "123-123"
     }
 }
 */

 // 1 . Object to JSON =========================================================================
 // [ Stringfy : μ΄λ ν Object λ₯Ό Json νμμΌλ‘ λ³ν]

 const rabbit = {
    name : "min",
    color : "red",
    size : null,
    birthDate : new Date(),
    jump:()=>{
        console.log(`${name} can jump~!`)
    }
}

 {
    let json = JSON.stringify(true);
    console.log(json);
    console.log(typeof(json));

    json = JSON.stringify([`apple`,`banana`]);
    console.log(json);
    console.log(typeof(json));


    
    // π€Ά[ rabbit Object λ΄λΆμ jump function μ λ°μ΄ν° νμμ΄ μλλ―λ‘ λ³νμ΄ μλλ€
    json = JSON.stringify(rabbit);
    console.log(json);
    console.log(typeof(json));
    // π€Ά [ νμν propertie λ§ μ νν΄μ define ν  μ μλ€.]
    json = JSON.stringify(rabbit,[`name`]);
    console.log(json);
    console.log(typeof(json));
 
}
console.clear();


 // 2 . JSON to Object =========================================================================
 // [parse : JSON νμμ Stringν νλ€.]
 // [ String ν νκΈ° λλ¬Έμ κΈ°μ‘΄ Obj - > Json - > obj(string) νλ€λ©΄ ν¨μλ₯Ό μ ν μ¬μ©ν μ μλ€]
 // [rabbit μμ μλ birthDateμ ν¨μ .getDate() λ μ¬μ©ν  μ μλ€]
 // [κ·Έλ¬λ―λ‘ keyκ° ]
 {
     let json = JSON.stringify(rabbit);
     const obj = JSON.parse(json);
     console.log(obj,(key,value)=>{
        console.log(`Key : ${key} , Value : ${value}`);
        if(key === 'birthDate'){
            new Date();
        }else{

        }
        return key === 'birthDate' ? new Date() : value;
     });
    
    console.log(rabbit.birthDate.getDate());
    console.log(typeof(obj.birthDate)); // string
    console.log(typeof(rabbit.birthDate)); // object
    //console.log(obj);


 }