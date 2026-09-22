// let student = {
//     Name: "shubham",
//     Age: 19,
//     Branch: "Electronics and Communication",                                                    
//     Subjects:["Electronics Devices","Digital Electronics","VLSI","Advance Data Structure","Microcontroller"]
// }

// console.log(student);
// let {Name:Preference,...Variable}=student;
// console.log(Preference);
// console.log(Variable);
// let{Subject:New,...Variable2}=student;


// let obj1={
//     Name:"shubham", 
//     phone:7838255307    
// }

// let obj2={
//     address:"india",
// }
// // let obj3={...obj1,...obj2};
// // console.log(obj3);
// obj1={
//     address:"india"
// }

// obj1["address"]="America";
// console.log(obj1);

// let arr1=[1,2,3,4,5];

// console.log(arr1);
// let trimArr = arr1.slice(1,3);
// console.log(trimArr);
// let res = arr1.find((value)=>{
//     return value==="3";
// });
// console.log(res);

// // flat() is used to nullify the nested array and make it a single array
// let arr2=[1,2,[3,[4,5]],6,7];
// console.log(arr2.flat(Infinity));

let arr4=[4,5,6,7,89,90];
let arrCopy = arr4;
let arrCopy2 = [...arr4];

arrCopy2.pop();
console.log("arr4:",    arr4);
console.log("arrcopy2:", arrCopy2);

