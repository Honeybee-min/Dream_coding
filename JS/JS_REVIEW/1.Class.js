'use strict';

// ๐ฉ๐ฉ Class

// 1 . Class ์ ์ธ ==================================================================
// [Constructor : class ๊ฐ ์ ์ธ๋๊ณ  ํด๋น class๋ฅผ ๊ฐ์ง Object ๊ฐ ์์ฑ๋๋ฉด ๋ฐ๋์ ์คํ๋๋ ๊ตฌ๊ฐ
// this.name ๊ฐ ํ๋ผ๋ฏธํฐ name ์ด๋ค]
class Person{
    constructor(name,age){
        console.log(`๋ฐ๋์ ์คํ๋๋ constructor`);
        this.name = name;
        this.age = age;
    }

    //Methods
    speak(){
        console.log(`${this.name} : Hello ~ ! `);
    }
}

// New Object ์์ฑ
const min = new Person(`min`,22);
console.log(`Min : ${min}`);
console.log(`Min Name : ${min.name}`);
console.log(`Min age : ${min.age}`);
min.speak();

// 2 . Getter and Setter ==================================================================
// [ ์ฐ์  User class ๋ด๋ถ์ body์ age ์ ๋ํ getter,setter๊ฐ ์ ํํ define ๋์ด ์๊ธฐ ๋๋ฌธ์
//   this.age = ? ์ด๋ผ๋ ๋ถ๋ถ์์ ์๋์ผ๋ก Setter ๋ฅผ ํธ์ถ ํ๋ค
//   Setter ๋ด๋ถ์ ๋ this.age = ? ๋ก define ๋์ด์์ผ๋ฉด ๋ ๋ด๋ถ์ ์ผ๋ก 
//   Setter ๋ฅผ ํธ์ถํ๋ค ๊ทธ๋ผ ๊ณ์ ๋ฐ๋ณตํด์ callstack overflow ๊ฐ ๋ฐ์ํ๋ค
//   ํด๊ฒฐ๋ฐฉ๋ฒ : set ๋ด๋ถ์์ age ๋ฅผ _age ๋ฑ์ผ๋ก ๋ค๋ฅธ ๋ณ์๋ก define ํ๋ค
//   ๊ทธ๋ผ _age ์ ๋ํ setter ๊ฐ define ๋๊ฒ์ body์ ์๊ธฐ ๋๋ฌธ์ ๊ทธ๋ฅ ๋ฉ๋ชจ๋ฆฌ์ _age ๋ value ๋ก ์ ์ฅํ๋ค
//   _age ๊ฐ value ์ธ๋ฐ age ๋ value ์ธ ์ด์  : getter ๋ ์๋ ํธ์ถํ๊ธฐ๋๋ฌธ์ 
//    getter ์์ this._age ๋ฅผ return ํด์ฃผ๊ธฐ๋ก ์ ์ํ๊ธฐ ๋๋ฌธ์ user1.age ๋ value๋ฅผ return ํ๋๊ฒ์ด๋ค    
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

// ๐ฉ ์์ age ์ ๋ํ getter setter ๋ฅผ define ํด์ฃผ์๊ธฐ ๋๋ฌธ์ ์๋์ ๊ฐ์ 
// ์ฌ์ค์ ์ค๋ฅ์ธ ๊ฐ์ ๋ํด์ ๋์ฒ๊ฐ ๊ฐ๋ฅํ๋ค [ ๋์ด๊ฐ -์ธ ๊ฒฝ์ฐ] 
const user1 = new User(`jeong`,`min`,-2);
console.log(user1.age)

console.clear();



// 3 . Fields (public, private) ==================================================================
// [class ๋ด๋ถ #[hashtag]๋ก filed define ํ๋ฉด class ๋ด๋ถ์์๋ง ์ด์ฉ๊ฐ๋ฅ]
class Experiment{
    publicFiled = 2;
    #privateFiled = 0
}

const experiment = new Experiment();
console.log(`publicFiled : ${experiment.publicField}`);
console.log(`privateField : ${experiment.privateFiled}`);


console.clear();

// 4. static ==================================================================
//[Static ์ class๋ก ์์ฑ๋๋ object์ ํ ๋น๋๋๊ฒ์ด ์๋๋ผ class ์์ฒด์ ์ ์๋ ๊ฐ]
//[์ฆ ์์ฑํ object ๋ฅผ ์ด์ฉํด์ ๋ค๋ฃฐ ์ ์๋ ๊ฐ์ด ์๋๋ค]

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
// 5 . Inheritance (์์)
// [Class ์ ๋ชจ๋ ๊ฒ์ ์์ํ์ฌ ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ๋ค (ํ์ํ ๋ถ๋ถ๋ง overwriting ๊ฐ๋ฅํ๋ค) ]
// [ ์ฆ ์ ์ง๋ณด์ ๋ฐ ๋ฉ๋ชจ๋ฆฌ์ ์ผ๋ก ํจ์จ์ ์ด๋ค]
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

// ์์
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

    

