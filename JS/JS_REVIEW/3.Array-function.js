// 'use stric';

// π©π© Array Function 

// 1 . Make a String out of an Array ==================================================================
// [ JOIN : Array(OBject) λ₯Ό String type μΌλ‘ ν΄μ€λ€]

{
    const Fruits = [`apple`,`mango`,`orange`];
    const result = Fruits.join();
    console.log(`Array : ${Fruits} , Fruits Type : ${typeof(Fruits)} `);
    console.log(`String  : ${result} , String Type : ${typeof(result)}`);

}

console.clear();
// 2 . Make an Array out of a String ==================================================================
// [ Split : νλΌλ―Έν° κ°μ κΈ°μ€μΌλ‘ λλμ΄ Array type μΌλ‘ ν΄μ€λ€ 
//  ( νλΌλ―Έν°λ₯Ό μ λ¬νμ§ μμ κ²½μ° ν΅μ§Έλ‘ λμ΄κ°λ€ )]
{
    const Fruits = 'apple, kiwi, banana, cherry';
    const result = Fruits.split(`:`);
    const result2 = Fruits.split();
    console.log(`result : ${result} , result Type : ${typeof(result)}`);
    console.log(`result2 : ${result2} , result2 Type : ${typeof(result2)}`);
}

console.clear();
// 3 . Make this Array look like This  : [5, 4, 3, 2, 1] ==================================================================
// [Reverse : Array value λ₯Ό μ­μ λ ¬ νλ€
// (λ¨ ! μλ μμμ κ°μ΄ revese νλ λμλ κ°μ΄ λλ€ 
// (μλ°μ€ν¬λ¦½νΈ λ©λͺ¨λ¦¬ κ³΅λΆλ₯Ό νλ©΄ μμ μλ€))]
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
// [Slice : μ§μ ν λ²μ λ΄μ λ°°μ΄λ§ κ°μ§λ μλ‘μ΄ Array λ₯Ό λ§λλ function]
{
    const Array = [1, 2, 3, 4, 5];
    const result = Array.slice(2,5);
    Array.slice(2,3);
    console.log(`Array : ${Array}`);
    console.log(`result : ${result}`);

}


console.clear();
// 5. find a student with the score 90 ==================================================================
// [find : findμ function μ true κ° return λ λ κ·Έ indexμ value λ₯Ό λ°ννλ€]
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
// [Filter : element , index , array 3κ° νλΌλ―Έν° μ΄μ© κ°λ₯ (function μ‘°κ±΄μ΄ λ§κ±°λ True μΌλλ§ return)]
{
    const result = students.filter((student)=>student.enrolled);
    console.log(result);
}

console.clear();
// 7 . make an Array containing only the students scores ==================================================================
// [Map : λ°°μ΄μμ μμλ€μ μνλ λ°©μμΌλ‘ κ°κ³΅ ν λ€λ₯Έ λ°°μ΄λ‘ λ³ν νκ³  μΆμΌλ©΄ map ]
{
    const score = students.map((value)=>value.score);
    console.log(score);

    const doublescore = students.map((score)=>score.score*2);
    console.log(doublescore);

}

console.clear();

// 8 . check if there is a student with the score lower than 50 ==================================================================
{
    //50μ  λ³΄λ€ λ?μ μ¬λμ κ°μ²΄λ₯Ό return νλ €λ©΄ filter λ₯Ό μ¬μ©νλ€
    const result = students.filter((value)=>value.score<=50);
    console.log(result);

    //50μ  λ³΄λ€ λ?μ μ¬λμ κ°μ²΄κ° μλμ§ True False return μ μν λλ some , every μ¬μ©
    //[some : νλλΌλ μΆ©μ‘±νλ©΄ return True]
    const resultsome = students.some((value)=>value.score <=50);
    console.log(resultsome);
    //[every : λͺ¨λ μΆ©μ‘±ν΄μΌ return True]
    const resultevery = students.every((value)=>value.score <=50);
    console.log(resultevery);

}

console.clear();

// 9 . compute students' average score ==================================================================
{
    // ν¨μ μμ΄ 1μ°¨μ μΌλ‘ μκ°ν λ°©λ² 
    const result = students.map((value)=>value.score);
    let num = 0;
    for(let i =0; i<result.length;i++){
        num += result[i];
    }
    let avg = num / result.length;
    console.log(`νκ·  : ${avg}`);

    // reduce λΌλ ν¨μ μ¬μ© 
    const result1 = students.reduce((a,b,c,d)=>{
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
    })


}


