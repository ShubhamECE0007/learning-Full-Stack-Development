// let originalPrice =[456,899,153];
// let discountPrice =[];
// for(value of originalPrice){
//     discountPrice.push(value*0.9);

// }
// console.log(originalPrice);
// console.log(discountPrice);

// const discountedPrice2 = originalPrice.map((value)=>{
//  return value*0.8;
// })
// console.log(discountedPrice2);

let students = [
    {
        name:"shubham",
        age:19,
    },
    {
        name:"sachin",
        age:20,
    },
    {
        name:"Darshil",
        age:21
    },
    {
        name:"Rohit",
        age:22
    }
]

let nameArray = students.map((value)=>{
    return value.name;
})
console.log(nameArray);
let ageArray = students.map((value)=>{
   return value.age;
})
console.log(ageArray);

let bosstedMarks = students.map((students)=>{
   return {...students,age:students.age+10};
})

// console.log(bosstedMarks);
// // let failedStudents = students.filter((students)=>{
// //     return students.age<21;
// // })
// // console.log(failedStudents);
// const failedStudentNames = students.filter((student)=>{return student.age<20;}).map((student)=>{return student.name;});
// console.log(failedStudentNames);
const attendence = ["present","absent","present","absent","present","present","absent","Exempt"];
// let presentCount = 0;
// let absentCount = 0;
// for(value of attendence){
//     if(value == "present")  presentCount++;
//     else absentCount++
// ;
// }
// console.log("Present: " + presentCount + ", Absent: " + absentCount);

let obj = {

}
attendence.forEach((value)=>{
    if(obj[value]){
        obj[value]++;
    }
    else{
        obj[value] = 1;

    }
})

console.log(obj);