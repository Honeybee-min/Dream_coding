// 'use stric';

// 👩👩 Array Function 

// 1 . Make a String out of an Array ==================================================================
// [ JOIN : Array(OBject) 를 String type 으로 해준다]

{
    const Fruits = [`apple`,`mango`,`orange`];
    const result = Fruits.join();
    console.log(`Array : ${Fruits} , Fruits Type : ${typeof(Fruits)} `);
    console.log(`String  : ${result} , String Type : ${typeof(result)}`);

}

console.clear();
// 2 . Make an Array out of a String ==================================================================
// [ Split : 파라미터 값을 기준으로 나누어 Array type 으로 해준다 
//  ( 파라미터를 전달하지 않을 경우 통째로 넘어간다 )]
{
    const Fruits = 'apple, kiwi, banana, cherry';
    const result = Fruits.split(`:`);
    const result2 = Fruits.split();
    console.log(`result : ${result} , result Type : ${typeof(result)}`);
    console.log(`result2 : ${result2} , result2 Type : ${typeof(result2)}`);
}

console.clear();
// 3 . Make this Array look like This  : [5, 4, 3, 2, 1] ==================================================================
// [Reverse : Array value 를 역정렬 한다
// (단 ! 아래 예시와 같이 revese 하는 대상도 같이 된다 
// (자바스크립트 메모리 공부를 하면 알수 있다))]
{
    const Array = [1, 2, 3, 4, 5];
    const result1 = Array.reverse();
    const Array2 = [5, 4, 3, 2, 1];
    Array2.reverse();

    console.log(`Array : ${Array}`);
    console.log(`result1: ${result1}`);
    console.log(`Array2 : ${Array2}`);

}

console.clear();

// 4. Make new Array without the first two elements ==================================================================
// [Slice : 지정한 범위 내의 배열만 가지는 새로운 Array 를 만드는 function]
{
    const Array = [1, 2, 3, 4, 5];
    const result = Array.slice(2,5);
    Array.slice(2,3);
    console.log(`Array : ${Array}`);
    console.log(`result : ${result}`);

}


console.clear();
// 5. find a student with the score 90 ==================================================================
// [find : find의 function 에 true 가 return 될때 그 index의 value 를 반환한다]
class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
{
  const result = students.find((student)=>student.score === 90);
    console.log(result);
  

console.clear();
}


// 6 . make an array of enrolled students ==================================================================
// [Filter : element , index , array 3개 파라미터 이용 가능 (function 조건이 맞거나 True 일때만 return)]
{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}

console.clear();
// 7 . make an Array containing only the students scores ==================================================================
// [Map : 배열안의 요소들을 원하는 방식으로 가공 후 다른 배열로 변환 하고 싶으면 map ]
{
    const score = students.map((value)=>value.score);
    console.log(score);

    const doublescore = students.map((score)=>score.score*2);
    console.log(doublescore);

}

console.clear();

// 8 . check if there is a student with the score lower than 50 ==================================================================
{
    //50점 보다 낮은 사람의 객체를 return 하려면 filter 를 사용한다
    const result = students.filter((value)=>value.score<=50);
    console.log(result);

    //50점 보다 낮은 사람의 객체가 있는지 True False return 을 원할대는 some , every 사용
    //[some : 하나라도 충족하면 return True]
    const resultsome = students.some((value)=>value.score <=50);
    console.log(resultsome);
    //[every : 모두 충족해야 return True]
    const resultevery = students.every((value)=>value.score <=50);
    console.log(resultevery);

}

console.clear();

// 9 . compute students' average score ==================================================================
{
    // 함수 없이 1차적으로 생각한 방법 
    const result = students.map((value)=>value.score);
    let num = 0;
    for(let i =0; i<result.length;i++){
        num += result[i];
    }
    let avg = num / result.length;
    console.log(`평균 : ${avg}`);

    // reduce 라는 함수 사용 
    const result1 = students.reduce((a,b,c,d)=>{
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    })


}


