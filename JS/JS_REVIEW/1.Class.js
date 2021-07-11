'use strict';

// 👩👩 Class

// 1 . Class 선언 ==================================================================
// [Constructor : class 가 선언되고 해당 class를 가진 Object 가 생성되면 반드시 실행되는 구간
// this.name 가 파라미터 name 이다]
class Person{
    constructor(name,age){
        console.log(`반드시 실행되는 constructor`);
        this.name = name;
        this.age = age;
    }

    //Methods
    speak(){
        console.log(`${this.name} : Hello ~ ! `);
    }
}

// New Object 생성
const min = new Person(`min`,22);
console.log(`Min : ${min}`);
console.log(`Min Name : ${min.name}`);
console.log(`Min age : ${min.age}`);
min.speak();

// 2 . Getter and Setter ==================================================================
// [ 우선 User class 내부에 body에 age 에 대한 getter,setter가 정확히 define 되어 있기 때문에
//   this.age = ? 이라는 부분에서 자동으로 Setter 를 호출 한다
//   Setter 내부에 또 this.age = ? 로 define 되어있으면 또 내부적으로 
//   Setter 를 호출한다 그럼 계속 반복해서 callstack overflow 가 발생한다
//   해결방법 : set 내부에서 age 를 _age 등으로 다른 변수로 define 한다
//   그럼 _age 에 대한 setter 가 define 된것은 body에 없기 때문에 그냥 메모리에 _age 는 value 로 저장한다
//   _age 가 value 인데 age 도 value 인 이유 : getter 도 자동 호출하기때문에 
//    getter 에서 this._age 를 return 해주기로 정의했기 때문에 user1.age 도 value를 return 하는것이다    
// ]
class User{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        this._age = value < 0 ? 0 : value;
    }

}

// 👩 위의 age 에 대한 getter setter 를 define 해주었기 때문에 아래와 같은 
// 사실상 오류인 값에 대해서 대처가 가능하다 [ 나이가 -인 경우] 
const user1 = new User(`jeong`,`min`,-2);
console.log(user1.age)

console.clear();



// 3 . Fields (public, private) ==================================================================
// [class 내부 #[hashtag]로 filed define 하면 class 내부에서만 이용가능]
class Experiment{
    publicFiled = 2;
    #privateFiled = 0
}

const experiment = new Experiment();
console.log(`publicFiled : ${experiment.publicField}`);
console.log(`privateField : ${experiment.privateFiled}`);


console.clear();

// 4. static ==================================================================
//[Static 은 class로 생성되는 object에 할당되는것이 아니라 class 자체에 정의된 값]
//[즉 생성한 object 를 이용해서 다룰 수 있는 값이 아니다]

class Article{
    static publisher = 'hello static!';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article('12');
console.log(article1.publisher); // undifinend
console.log(Article.publisher); // hello static
console.log(article1.printPublisher); // undifinend
Article.printPublisher(); // hello static 


console.clear();
// 5 . Inheritance (상속)
// [Class 의 모든것을 상속하여 재사용 가능하다 (필요한 부분만 overwriting 가능하다) ]
// [ 즉 유지보수 및 메모리적으로 효율적이다]
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing color : ${this.color}`)
    }

    getArea(){
        return this.width * this.height;
    }
}

// 상속
class copyShape1 extends Shape{}
const copyShape = new copyShape1(10,20,`red`);
console.log(copyShape);
// overwriting
class copyShape2 extends Shape{
    
    draw(){
        console.log(`Redefine draw : ${this.color}`);
    }

    getArea(){
        return (`Redefine getArea : ${(this.width*this.height)/2}`);
    }
     
}
const overwriting = new copyShape2(10,30,'blue');
console.log(`overwriting : ${overwriting}`);
overwriting.draw();
console.log(overwriting.getArea());

    

