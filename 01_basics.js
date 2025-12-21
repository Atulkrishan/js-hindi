// Type Conversion

// let num = Number(undefined);
// console.log(typeof num, num); Number Nan
// let val = Number("");
// console.log(val); ->>0

// about array as a reference datatype

// let arr = [ 1, 2, 3, 4, 5];
// let arr2 = arr;
// arr.pop();
// console.log(arr); [ 1, 2, 3, 4 ]
// console.log(arr2); [ 1, 2, 3, 4 ]

// Strings

let str1 = new String("Rahul Kumar");
// console.log(str1.toUpperCase()); -->RAMESH KUMAR
// console.log(eval("2+3")); ->>5
// let newString = new String("hello");
// console.log(typeof newString, typeof newString.valueOf()); object string
// console.log(typeof str1.toString(), typeof str1); string object

// let concatedString = str1.concat(">>>", newString);
// console.log(concatedString); Rahul Kumar>>>hello
// console.log(str1.replace("Kumar", "Singh")); ->> Not inplace editing Rahul Singh
// console.log(str1); ->> Rahul Kumar
// console.log(str1.substr(3, 6)); ->> starts from 3rd index and go 6 characters ahead
// console.log(str1.substring(3, 5)); ->> starts from 3rd index and goes to 5th index
// console.log(typeof str1.toString()); >> convert string object to primitive string
// console.log(str1.length); >>11

// Number

let num1 = 100.121;
// let stringNum = num1.toString();
// console.table([
//   num1.toFixed(2), 100.12
//   [num1.toPrecision(2)], 1.0e+2
//   [num1.toLocaleString()], '100.121'
//   [num1], 100.121
//   [typeof num1.toFixed(2)], string
// ]);

// Math
// a number between min and Max
// let min = 1;
// let max = 5;
// let randomNumber = Math.random() * (max - min + 1) + min;
// console.log(typeof randomNumber, randomNumber, Math.floor(randomNumber));

// Dates In Js

let myDate = new Date();
// console.log(myDate); 2025-06-20T12:03:20.861Z
// console.log(myDate.toLocaleTimeString()); 4:25:12 pm
// console.log(myDate.toString()); Fri Jun 20 2025 18:09:29 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString()); 20/6/2025, 6:11:14 pm
// console.log(myDate.toDateString()); Fri Jun 20 2025

// TimeStamps

// let Date1 = new Date("2023-11-11");
// console.log(Date1.toDateString());Sat Nov 11 2023
// console.log(myDate.getTime()); 1750423509490 seconds from 1 jan 1970

// Arrays

// const arr = ["hello", "my", "is", "name", "rahul", "walia"];
// console.log(arr.join("->>-"));
// ["hello", "my", "is", "rahul", "walia"]
// console.log(arr.slice()); return a shallow copy of arr
// console.log(arr.splice(2, 3), arr); [("is", "rahul", "walia")][  ("hello", "my")// ];
// let arr2 = [...arr, ...arr]; spread operator
// console.log(arr2); combines arr two times
// let arr2 = [1, 2, [3, 4, [5], [4], [6, 7, 8]]]; [1, 2, 3, 4, [5], [4], [6, 7, 8]];
// console.log(arr2.flat(1));
// console.log(Array.isArray(arr));  true

// Objects in Js

const Obj1 = {
  username: "Rahul Singh",
  mobileno: 9199445341,
  salary: 126567.3509,
  info: function () {
    console.log(
      `Hello Everyone My Name is ${Obj1.username} and my salary is $${Obj1.salary} as a Software Developer in Meta since  May 2012`
    );
  },
};
// Obj1.info();
//  Hello Everyone My Name is Rahul Singh and my salary is $126567.3509 as a Software Developer in Meta since  May 2012

// console.log(Object.keys(Obj1), Object.values(Obj1), Object.entries(Obj1));
// Obj1.family = {
//   father: "kamalkanth Singh",
//   mother: "Renna devi",
//   brother: "Sumit Singh",
// };
// console.log(Obj1);
// let education = {  name: "Kamal kanth Verma",  age: 21,  fatherName: "Kishan kanth Verma",
//   Degree: "B.Tech(Mechanical Engineering)",
// };
// let financialStatus = {
//   accBal: 2300000,
//   monthlySalary: 70000,
//   wokingAt: "Maruti Suzuki",
//   Post: "Manager",
// };

// let family1 = {...person1,...person2,...person3 };merging two objects
// let family1 = Object.assign({}, person1, person2, person3); merging two objects
// console.log({ ...education, ...financialStatus });

// const { Degree: Instructor } = education; De-Structing Object
// console.log(Instructor); >>> B.Tech(Mechanical Engineering)

// Functions and Arrow functions in Js

function myFun(...val) {
  return val; //return an array
}

// console.log(myFun({ name: "hello", class: 12 })); [{ name: "hello", class: 12 }];
// const fun = () => `Hello`;
// console.log(fun());

// Higher Order Function >>>a function that takes a function as a parameter

// function maketea(item) {
//   return `Your ${item} is ready`;
// }
// function processTeaOrder(makeTea) {
//   return makeTea("earl gray");
// }
// console.log(processTeaOrder(maketea));

// function createTeaMaker() {
//   return function (teatype) {
//     return `Making a ${teatype}`;
//   };
// }
// let returnedFun = createTeaMaker();
// console.log(returnedFun("greentea"));

// Loops In Js

const newArr = [
  "Javascript",
  "Python",
  "C++",
  "Java",
  "Rust",
  "Golang",
  "Swift",
];
// for (const ele of newArr) {
//   console.log(ele);
// }
// newArr.forEach((item) => {
//   console.log(`${item} =>> ${item.length}`);
// });
// for (const values in Obj1) {
//   console.log(values);
// }

// const filteredArr = newArr.filter((item) => item.length <= 4); // returns modified array
// donot modify implicitly
// console.log(filteredArr, newArr);
// const updatedMap = newArr.map((item) => item + 10);
// console.log(updatedMap);
// let valArr = [1, 2, 3, 4, 5];
// let reduceArr = valArr.reduce((acc, curr) => acc * curr, 1);
// console.log(reduceArr);
// intially acc = 1
// curr belongs to elements of valArr and at last acc get returned

// checking is NaN or not
// function stringToNumber(input) {
//   let num = Number(input);
//   if (Number.isNaN(num)) {
//     return "Not a number";
//   } else {
//     return num;
//   }
// }
// console.log(stringToNumber("12d"));

function whatAmI(input) {
  let val = typeof input;
  console.log(val);

  // if (val === "string") {
  //   return "I'm a string!";
  // }
  //   if (val === "number") {
  //     return "I'm a number!";
  //   }
}
// console.log(whatAmI(2));
