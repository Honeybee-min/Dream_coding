'use stric';

//Array

//1 . 배열 선언
const arr1 = new Array();
const arr2 = []; // 더 자주 쓰는 방법

//2 . 인덱스 활용
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);// 배열의 맨 마지막 애


console.clear();
//3 . looping over an array
//a. for
for(let i=0; i<fruits.length; i++){
    console.log('for로 출력:' ,fruits[i]);
}
//b. for of
for(val of fruits){
    console.log('of로 출력:' ,val);
}

//c. forEach
fruits.forEach(function(){
    console.log("hi"); // 두번 출력됨 fruits 가 2칸 짜리 array 이기 떄문
})

//★ 잘 모르는것들이니 집중 
// forEach 는 해당 함수 생성문을 찾아보면 내용물과 index값 , array 전체를 받아온다 
// 즉 forEach(fruit,index,array) 하면 과일이름,  해당 과일의 indexnum , array 전체 다 받아온다
// 하지만 보통 array 는 사용하지 않음
// => 가 뭐냐면 forEach 를 사용하면 forEach(funtion(){} 형태인데 funtion 은 => 으로 그냥 줄여서 )
// 사용할수 있다 
fruits.forEach((fruit,index) => {
    console.log(fruit,index);
})
// 위에 부분에서 필요없는거 다 지우고 {} 까지 생략가능하기 때문에 깔끔하게 만들면
fruits.forEach((fruit) => console.log(fruit));

//4. Addtion , deletion , copy

//배열 제일 뒤 부터 추가  : push
fruits.push("peach","cherry");
console.log(fruits);
// 배열 제일 뒤 부터 삭제 : pop
fruits.pop();
fruits.pop();
console.log(fruits);

//배열 앞에서 부터 추가 : unshift
fruits.unshift("mango","lemon");
console.log(fruits);

//배열 앞에서 부터 삭제 : shift
fruits.shift();
console.log(fruits);

// 아이템을 지정된 포인트에서 삭제하기 
fruits.push("peach","mango");
console.log(fruits); // 일단 추가좀 하고 
fruits.splice(1,1); // 몇개를 지울지 지정 안해주면 지정해준 인덱스 부터 다 지움
console.log(fruits);
fruits.splice(1,1,'strawberry','watermelon'); // 이렇게 해당 자리를 지움과 동시에 그 자리에 추가시켜버릴수도 있음
console.log(fruits);

// 두 배열 이어버리기 
const fruits2 = ['orange','tomato'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);



//5 . searchin [ 검색 ]
console.clear();
console.log(fruits);
//indexOf
console.log(fruits.indexOf('apple')); // apple 이라는 놈의 인덱스가 뭔지 반환 [ 없으면 -1 ]
//includes
console.log(fruits.includes('apple')); // apple 이라는 놈이 들어있는지 bool 타입으로 반환
//lastIndexOf
console.clear();
fruits.push('lemon');
console.log(fruits);
console.log(fruits.indexOf('lemon')); // 그냥 indexOf 는 앞에서 부터 해서 중복되는 값 있으면 앞자리 부터 알려줌
console.log(fruits.lastIndexOf('lemon')); // lastindexOf 는 끝에서 부터 검색해서 오기때문에 뒷자리 부터 알려줌



