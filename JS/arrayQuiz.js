// Q1. make a string out of an array
{   
    const fruits = ['apple', 'banana', 'orange'];
    /**
     !! 하지만 문제 목적은 배열을 하나씩 출력하는게 아니고 값들을 하나의 string 으로 만드는게 목표였다 
    console.log("1번 방법")
    for(let i =0;i<fruits.length; i++){
        console.log(fruits[i]);
    }
    console.log("2번 방법")
    fruits.forEach((fruit)=>console.log(fruit))
     */
    // join [ 배열에 있는 모든걸 더해서 string 으로 return]
    const result = fruits.join(); // -> join 에 구분자를 매개로 주면 구분자를 넣어서 구분해준다
    console.log(result)

    
  }
  
  // Q2. make an array out of a string
  {
      // 주어진 ,콤마로 구분된 string 을 배열로 만들어라
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(","); // -> split 은 구분자를 매개로 주면 구분자를 기점으로 구분해서 배열로 만든다
    console.log(result);            // -> split 은 구분자를 전달 안해주면 다 넘기기때문에 구분자사용 필요
                        // -> 구분자 뒤에 갯수를 지정해주면 해당 갯수까지만 구분해서 배열화한다
    
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  { // 주어진 배열의 순서를 거꾸로 만들어라
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(); //-> reverse 는 배열 안에 있는 아이템을 거꾸로 정렬한다
    console.log(result);
    console.log(array); // - > 배열 자체도 reverse 하고 받는 값도 reverse 함
  }
  
  // Q4. make new array without the first two elements
  {
      //첫번째 두번째 인덱스를 제외한 새로운 배열을 만들어라
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    console.log(result); //-> slice 는 지정한 범위 내에 배열만 가지는 함수
    console.log(array); //-> 0번 인덱스 부터 5번 인덱스 까지 원하면 범위는 0~6임 

    
  }
  
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
  
  // Q5. find a student with the score 90
  {
      //90점인 학생을 찾아라
      /** 내가 생각했던 방법
    students.forEach((result) => {
        if(result.score==90){
            console.log(result.name);
        }
    })
     */
    const result = students.find((student) => student.score === 90);
        console.log(result); // 90점이 나와야 true 가 리턴되면서 그 값이 return 된다
    
    // funtion 축약형(화살표 함수 잘 모르겠어서 정리)
    // 축약하면 () => []   - > ()로 매개변수 받으면 => [] 이라는 놈으로 return 된다
  }
  
  // Q6. make an array of enrolled students
  // true 인 학생만 찾아서 배열 만들자
  {
      /** 처음 생각했던것 ; 틀렸음 
    const result = students.find((student) => student.enrolled == true);
        console.log(result);
     */
    // elli 방법
    const result = students.filter((student) => student.enrolled)
        console.log(result);
    // 그럼 아까 5번 문제처럼 find 를 하면 안되나 ?
    const result1 = students.find((student) => student.score === 90);
        console.log(result1);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // 점수만 뽑아서 점수 배열을 만들어라
  {
      // map 이란 한가지 한가지 요소를 다른것으로 변환한다 ? 
      // 배열안에 있는 모든 요소를 원하는 함수를 통해 다른 방식의 배열로 변환 하고 싶으면 map 사용
      const result = students.map((student) => student.score);
        console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {// 50점 보다 낮은 학생이 있는지 true false 리턴받아라
    console.clear();
    // some 은 배열의 요소중에 함수의 하나라도 충족하면 true 리턴한다
    const result = students.some((student) => student.score <=50);
        console.log(result); 
    // every 는 배열의 요소중에 함수에 모두 충족해야 true 리턴한다
    const result1 = students.every((student) => student.score >= 50);
        console.log(result1);

  }
  
  // Q9. compute students' average score
  {// 학생들의 점수를 평균을 구해라
    /**나였으면
    에러뜸 사실 어뜨케 해야 하는지 모르겠음
    const result = students.map((student) => student.score);
    const avg = 0;
    const result1 =  result.forEach((score) => avg+=score);
    console.log(avg%result.length);
    */

    //reduce 는 우리가 시작하는 지정한 배열의 인덱스부터 모든 배열을 돌면서 그 값을 누적시키는 녀석 
    // [ 잘 이해 안됨 추후 공부 요망]
    const result = students.reduce((prev,curr) => {
        console.log('------');
        console.log(prev);
        console.log(curr);
        return curr;
    })
    
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  // 학생들의 모든 점수를 string 으로 변환해라
  {
      // 함수형 프로그래밍 
      // map 을 이용해 students 를 student 로 하나하나 가져와서 score 만으로 mapping 해서 배열 만들고
      // 그걸 return 해주면 filter 가 받아서 50점 이상인 놈들로만 배열화 해서 return 해주고
      // 그럼 그걸 .join [ 배열을 string 화 해준다] 해주면 끝!
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students
      .map((student) => student.score)
      .sort();
      console.log(result);
  }
  