// JSON

// JSON 개념 
/**
우선 나 혼자 이해한 개념으로는  JSON 은 데이터 포맷타입중 하나이다 
XML JSON YARN 등이 있다 
이게 뭐냐 ? 서버와 클라이언트 (? 등등) 간에 서로 데이터를 주고 받기 위해서는 
서로간에 약속된 형식의 포맷타입이 있으면 좋다  구조화된 데이터 
(ex ) 가게 이름 , 주소 , 주인(주인 안에는 또 주인 이름 번호 계좌 등등), 구매자(구매자 안에는 또 구매자 이름 번호 계좌 등등))
이 이제 그냥 전달하면 너무 손해 혹은 안좋기 때문에 XML 은 여러 태그들을 이용해서 (Ex) store , location , owner(owner_name,) 등등 으로 전달하지만
이건 너무 태그가 장황해지고 몇가지 단점이 존재하므로 json 을 주로 이용한다 json 은 아래 처럼
const market = {
    "store" : "pizza market",
    "location" : "seoul",
    "owner" : {
        "owner_name" : "min",
        "owner_number" : "123-123"
    }
}
이런 느낌 ? 의 형식이다
 */


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
    jump: function(){
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
console.clear();
json = JSON.stringify(rabbit);
// 자 ~ 아래 obj 뒤에 이해 안가는거 많은데 한번 알아보자 
// json 을 parse(string 화 )한다 그리고 json 안에 key , value 들을 검증했는데 만약 key가 birthDate 이다 ? 
//근데 참이면 net Date 새로운 Date 객체 생성 flase 면 그냥 기존 value 값을 그대로 사용 대충 요런 의미임
const obj = JSON.parse(json,(key,value) =>{
    console.log(`key:${key},value:${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//json 이라는 놈이 rabbit 을 JSON 으로 변환한건데 그러면 위에 설명처럼 데이터타입이 아니라 함수이기 때문에
//obj 로 만들어도 그때 함수가 포함되지 않은 상태로 object화 된다 그래서 obj에 jump 라는 함수는 없다
//obj.jump();
console.log(rabbit.birthDate.getDate());
//마찬가지로 아래 녀석도 안된다 
//왜냐햐면 json 을 object 화 하면 그냥 단순히 string 으로 넘어오는거지 그 함수값을 가지고 오지는 않는다
//console.log(obj.birthDate.getDate()); 
// 단 위에 obj 생성할때(json 을 object화 할때 한 몇가지 명령어 때문에 아래가 다시 동작이 정상적으로 된다)
console.log(obj.birthDate.getDate());
