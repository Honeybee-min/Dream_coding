'use stric';

// 👩👩 Array 

// 1 . Array 선언 ==================================================================
const Array1 = new Array();
const Array2 = [];

// 2 . Array index 활용 ==================================================================
const Fruits = ['apple', 'banana', 'mango'];
console.log(Fruits);
console.log(Fruits[0]);
console.log(Fruits.length);
console.log(Fruits[Fruits.length - 1]);

console.clear();

// 3 lopping over an array ==================================================================
// A. For 
for (let i = 0; i < Fruits.length; i++) {
    console.log(`For : ${Fruits[i]}`);
}

// B. For of
for (val of Fruits) {
    console.log(`For of : ${val}`);
}

// C. ForEach
// [👩‍🦱 For Each : ForEach 는 index Value , index , All Array 3개를 모두 받아올 수 있다]
Fruits.forEach((a, b, c) => console.log(`index Value : ${a} , index : ${b} , Array : ${c}`));

console.clear();

// 4. Addtion , Deletion , Copy ==================================================================
// A . 배열 마지막 부터 추가 : Push 
Fruits.push("pear", 'Strawberry');
console.log(Fruits);

// B . 배열 마지막 부터 삭제 : Pop
for (var a = 0; a < 2; a++) {
    Fruits.pop();
}
console.log(Fruits);

// C . 배열 앞에서 부터 추가 : Unshift 
Fruits.unshift("pear", 'Strawberry');
console.log(Fruits);

// D . 배열 앞에서 부터 삭제 : Shift 
for (var a = 0; a < 2; a++) {
    Fruits.shift();
}
console.log(Fruits);

// 5 . Searchin ==================================================================
console.clear();
console.log(`기존 Array : ${Fruits}`);
//IndexOf
//[ IndexOf : Array 안에 
//파라미터 존재한다면 retrun index value , 존재 하지 않는다면 return -1 ]
console.log(Fruits.indexOf(`mango`));
console.log(Fruits.indexOf('grepe'));

//LastIndexoOf
//[ IndexOf 와 같이 존재하면 index value 를 반환해주지만 중복된 값이 있을경우 
// LastIndexOf 는 뒤에서 부터를 우선순위로 알려줌]

//includes
// [Includes : Array 안에 
// 파라미터 값을 Bool type 으로 return 한다 ]
console.log(Fruits.includes(`mango`));
console.log(Fruits.includes(`grepe`));