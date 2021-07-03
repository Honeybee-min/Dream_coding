// Objects

// object 는 {key : value}; 의 집합체 이다 

const name = 'min';
const age = 4;
print(name,age)
//이렇게 함수를 만들어서 사용하면 매번 만들거나 암튼 비효율적임 (사실 이유 잘 모름;)
function print(name,age) {
    console.log(name);
    console.log(age);
}

// 그래서 이렇게 오브젝트를 사용한다
const min = {name:'min',age:4};
print_object(min);
function print_object(person){
    console.log(person.name);
    console.log(person.age);
}


//1. Literals and properties 
// 오브젝트를 만드는 방법
const obj1 = {};  // 괄호를 이용해서 만드는걸 object literal 이라고 한다
const obj2 = new Object(); //object 키워드를 이용해서 만드는걸 object constructor 이라고 한다
// object 는 위에 만든 min 이라는 object 에 hasJob 이라는걸 걍 추가 해버릴수도 있다 아래처럼
min.hasJob = true;
console.log(min.hasJob);
// 삭제도 가능함 ;; 너무 동적이어서 이런건 자주 사용하는건 안좋음 
delete min.hasJob;
console.log(min.hasJob);


// 2. Computed properties [ 계산된 properties ]
// key 는 반드시 string 타입으로 가져와야 한다 [그 외 타입은 x ]
// object 는 접근 방법이 아래처럼 . 로 혹은 배열에서 string 타입에 받아오는거 가능
console.log(min.name);
console.log(min['name']);
// 아까 지웠던 hasJob 을 이런 방식으로 다시 true 만드는 방법도 있음
min['hasJob'] = true;
console.log(min.hasJob);
// 두가지 방법으로 object 를 받을수 있는 어떠한 상황에서 어떤걸 쓰는가 ? 
// [1 .[dot] 은 바로바로 코드에서 받아오고 싶을때 사용]
// [2. [''] string 타입으로 받아오는거는 정확하게 어떤 키가 필요한지 모를때 사용함]
// 보통 .[dot] 을 쓰는게 맞음


//3 . property value shorthand
const person1 = {neme:'kei',age:2};
const person2 = {neme:'sum',age:5};
const person3 = {neme:'hi',age:67};
const person4 = makePerson('vin',5);
console.log(person4);
// object 를 필요할때마다 일일이 만들면 동일한 key vlaue 의 object 는 노가다 생성을 해야 한다
// 그래서 함수로 값만 전달하면 만들어 주는 함수를 만든다
// return 하는 아래 방법으로 해도 되지만 그 아래 방법으로 하고 생성할때 net Person 으로 객체를 
// 새로 생성하는것처럼 하는게 더 좋다 
function makePerson(name,age){
    return {
        name,
        age
    };
}
// 4. Constructor functiion 
const person5 = new makePerson1('habin',12);
console.log(person5);
function makePerson1(name,age){
    // 여기서 생략된것들 - > this = {}; return this;
    this.name = name;
    this.age = age;
}


//5. in operator [ object 안에 key 가 있는지 없는지 확인하는것 ]
console.log('name' in min);
console.log('age' in min);
console.log('random' in min);

//6. for .. in vs for .. of [ 추후 프로젝트에 매우 유용히 사용함 ]
// for (key in obj)
for(key in min){
    console.log(key);
}

// for (value of interable)
//원래 였으면 아래 방법으로 출력 했겠지만 별로 안좋은 방법 
const array = [1, 2, 4, 5];
for(let i=0; i<array.length; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}

//7. Fun cloning
// 메모리적으로 봤을때 user1 이라는 놈을 그대로 ref 와 얘가 가르키는 object 를 완전 따라 했기
// 때문에 user2 에서 값을 바꾸면 똑같이 user1 도 바뀐다
const user1 = {name:'elli',age:22};
const user2 = user1;
user2.name = 'coder';
console.log(user1);
// 그럼 서로 변함이 없도록 하려면 ? 
//옛날 방법
const user3 = {};
for(key in user1){
    user3[key] = user1[key];
}
console.log(user3);

// 새로운 방법
const user4 = {};
Object.assign(user4,user1);
console.log(user4);
// 이렇게 하거나 
const user5 = Object.assign({},user1);
console.log('user5 : ',user5);

// another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue',size:'bie'};
const mixed = Object.assign({},fruit1,fruit2);
console.log('mixed : ' ,mixed);
