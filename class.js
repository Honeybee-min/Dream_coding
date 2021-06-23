'use strict';
// class: template
// object : instance of a class

// 1 . class 선언
class Person{
    //constructor 
    //[ constructor 은 어떤 class 를 선언하고 객체를 생성하면 무조건 실행되는 정해진 약속]
    constructor(name,age){
        console.log("무조건 Person 이라는 객체를 생성하면 constuctor 이 실행됨 ");
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}

// new object 생성
const min = new Person('min',22);
console.log(min.name);
console.log(min.age);
min.speak();



// 2. Getter and Setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // 값을 return 해준다
    get age(){
        return this._age;
    }
    // 값을 set 해준다 [ 값을 set 해줘야 하기 때문에 set 해줄 값을 받아와야한다 그게 value ]
    set age(value){
        //this._age = value;
        this._age = value < 0 ? 0 : value;
    }
}
// 말 안되는 값 (나이가 -1 이므로) 
// 이런걸 방지하게 도와주는게 Getter and Setter 이다
const user1 = new User('min','job',-1);
console.log(user1.age);


// 3 . Fields ( public , private)
// # 을 붙이면 class 내부에서만 볼수 있고 수정 가능하고 밖에서는 private 한 녀석이 됨
class Experiment{
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4 .Static

class Article{
    static publisher = "min!";
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublicher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
// 아래가 안되는게 static 으로 선언,지정시 클래스 자체에 붙어있어서 객체가 아니다 
// 즉 아래 주석처리 안된 것처럼 클래스 자체를 이용해야한다
//console.log(article1.printPublicher)
console.log(Article.publisher);
Article.printPublicher();

//5 . Inheritance ( 상속 )
class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing  ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}
// Shape 에 있던 모든것들이 rectangle 에 상속되어 똑같이 사용 가능하다
// 동일한것 재사용 가능 즉 유지보수 용이 재사용 불필요성 감소 
class Rectangle extends Shape{}
class Triangle extends Shape{
    // 필요한 함수만 재 정의 해서 가능 이걸 오버라이딩 overriding  유지보수 ㄹㅈㄷ
    draw(){
        super.draw(); // 이걸 쓰면 부모의 draw 함수도 사용하고 밑에 재 정의된 draw 도 사용하는 의미
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }

}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());



// 6. class checking: instanceOf
// True False return 해준다 왼쪽의 object 가 오른쪽의 class 의 object가 맞는지 boolean 타임으로 return
console.log(rectangle instanceof Rectangle); // True
console.log(triangle instanceof Rectangle); // False
console.log(triangle instanceof Triangle); // True
console.log(triangle instanceof Shape); // True
console.log(triangle instanceof Object); // True
