// console.log(typeof Math);
// let val = Object.getOwnPropertyDescriptor(Math,'PI');
// console.log(val);

// object
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

let obj = {
    name : "Karan Sharma",
    age : 22,
    gender : "male"
}
Object.defineProperty(obj,'age',{
    writable : false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(obj,'age'));
// obj.age = 23;
// console.log(obj);

for(let ele in obj){
    console.log(`${ele} : ${obj[ele]}`);
}
// name : Karan Sharma
// gender : male
// Only these two are iterable .. 

