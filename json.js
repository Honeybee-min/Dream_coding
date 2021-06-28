// JSON


// 1. object to JSON
//stringfy(obj)
// 어떠한 obj 을 json 으로 변환 
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name:'min',
    color:'red',
    size:null,
    birthDate: new Date(),
    jump:() =>{
        console.log(`&{name} can jump!`)
    }
};
// jump 함수는 obj 에 있는 데이터타입이 아니기 때문에 json 에 안들어간다 출력 안됨 
json = JSON.stringify(rabbit);
console.log(json);

// 내가 원하는 propertie 만 정해서 정의 할수 있다
json = JSON.stringify(rabbit,['name']);
console.log(json);

// ====================14분 부터 이어서 보기 JSON 강의 =======================
// 2. JSON to object
//parse(json)