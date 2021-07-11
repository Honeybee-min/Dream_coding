'use strict';

// 👩👩 JSON 


// [ JSON  : 데이터 포맷타입의 일종이다 , ]
// [ 경량의 데이터 교환 방식이다 , Javascript에서 객체를 만들 때 사용하는 표현식이다]
// name-value 형식의 쌍 이다 { String key : String Value} 
/** [ 이런 느낌의 형식이다]
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
 // [ Stringfy : 어떠한 Object 를 Json 타입으로 변환]

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


    
    // 🤶[ rabbit Object 내부에 jump function 은 데이터 타입이 아니므로 변환이 안된다
    json = JSON.stringify(rabbit);
    console.log(json);
    console.log(typeof(json));
    // 🤶 [ 필요한 propertie 만 선택해서 define 할 수 있다.]
    json = JSON.stringify(rabbit,[`name`]);
    console.log(json);
    console.log(typeof(json));
 
}
console.clear();


 // 2 . JSON to Object =========================================================================
 // [parse : JSON 타입을 String화 한다.]
 // [ String 화 했기 때문에 기존 Obj - > Json - > obj(string) 했다면 함수를 전혀 사용할수 없다]
 // [rabbit 안에 있던 birthDate의 함수 .getDate() 도 사용할 수 없다]
 // [그러므로 key가 ]
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