"use strict";
//boolean
let boolean;
//number
let number;
let integer = 6;
let float = 1.345;
//string
let string;
let firstName = 'Doe';
//array
//한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim'];
//여러 가지 타입을 가지는 배열
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
//여러 타입을 단언 할 수 없는 경우
let any1 = ['John', 123, [], {}];
//readonly 배열 생성
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
//tuple
let tuple1 = ['a', 1]; //순서 지켜야함
let tuple2 = [['a', 1], ['b', 2]];
let tuple3 = ['a', 1];
tuple3.push(3);
console.log(tuple3);
//any
let any = 2;
any = 'string';
any = [];
//unknown
let unknown = false;
//object(array, null 도 object 임)
let object = {};
let array = [];
const obj1 = {
    id: 1,
    title: 'a',
    description: 'abc'
};
//union
let uni;
uni = 1;
uni = 'love';
//function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
//null,undefined
//void
function greeting() {
    console.log('hi');
}
//never
function throwError() {
    throw new Error('newerror');
}
