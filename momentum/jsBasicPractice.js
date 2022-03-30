// 상수 선언
const a = 6;
const b = 2;

// 변수 선언
let myName = "madilyn";

// var도 가능... 근데 옛날에만 쓰고 이제는 const/let으로 분리하여 사용

// 콘솔 찍기
console.log(5423423);
console.log('냐냐냐');

// 연산, 변수 사용
console.log(a + b);
console.log(a * b);
console.log("hello " + myName);

myName = "jungbin"
console.log("hi " + myName);

// Boolean
const amIFat = false;
console.log(amIFat);

// Null
const mySchool = null; // defined
console.log("my school ", mySchool);

let something; // undifined
console.log("someting ", something);

// Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri"];
const nonsense = [1, "aa", undefined, null, false, "a"];

console.log(daysOfWeek[4]);
console.log(nonsense);

console.log(daysOfWeek);

daysOfWeek.push("sat");
console.log(daysOfWeek);

daysOfWeek.pop();
console.log(daysOfWeek);

// Object
const player = {
    name: "jungbin",
    points: 9999,
    isGood: true,
};

console.log(player);
console.log(player.name);
console.log(player["isGood"]);

player.secondName = "madilyn"; // 없던 프로퍼티도 추가 가능
console.log(player);

// 궁금한 점
// 왜 var는 안 쓰지?
// 왜 ; 세미콜론은 써도 안 써도 상관없지?

// Function
function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello(player.name, 23);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

plus(1, 4);

player.sayHalo = function(otherPersonsName) {
    console.log("halo! " + otherPersonsName)
}

player.sayHalo("친구야..");

console.log(player)