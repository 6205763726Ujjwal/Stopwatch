// let  x = new Date(year,Month,Date,Hour,Minute,Sec,MilliSeconds);
// let x = new Date("February 27,2023 1:15:10");
// let y = new Date("February 27,2023 1:15:10");
// y.setDate(y.getDate()+10);
// console.log(x);
// console.log(y);
// let x = new Date();
// let y = new Date();

// if(x>y){
//     console.log("x is the past date");
// }
// else if(y>x){
//     console.log("X is the future date");

// }
// else{
//     console.log("x is equal to y");

// }// 31. Date Objects in JS

// 32. "NEW" Keywords

// let x = new Object();
//    x.name ="Ujjwal",
//     x.last ="Kumar",
//     x.age = 25,
//     console.log(x['age']);
// 33.Getter And Setter
// var x ={
//     Name:"ujjwal",
//     last:"Kumar",
//     Age:24,
//     // getname:function(){
//     //     return this.Name.toUpperCase();
//     // }
//     // get getname(){
//     //     return this.Name.toUpperCase();
//     // }
//     set setname(n){
//         this.Name= n.toUpperCase();
//     }
// } ;
// x.Name = "Ashok";
// console.log(x.getname);
//setter

// x.setname = "Ashish";
// console.log(x);
// 34. Object Construction Function 
// function Student(First,Last,Age,Cls){
//     this.FirstName =  First;
//     this.LastName = Last;
//     this.age = Age;
//     this.Class = Cls;
    
//     // student1.email = "121coolujjwal.gmail.com";
   
// };

// Student.prototype.name = function(){
//     return this. FirstName + " " +this.LastName;
// }
// // Student.prototype.email ="121coolujjwal@gmail.com";

// var student1 = new Student("ujjwal", "Kumar","24","5");
// var student2 = new Student("ujjwal", "Kumar","24","5");



// console.log(student1.name());
// Object Prototype
// Nested Objects
// var user={
//     id :"100",
//     email :"121coolujjwal@gmail.com",
//     personalInfo:{
//         name:"ujjwal",
//         address:{
//             street:"purranderpur",
//             city:"patna",
//             country:"India",
//                 }
//     }
// };
// console.log(user.personalInfo.address.city);
// 37 .Hoisting
// function hello(){
//     console.log("hello world");
// }
// hello();
// var x;
// "use strict"
// x=9;
// // x=9;
// // x = undefined;
// console.log(x);
// 38 .DOM
//39.Select the element byID
//40. select the element by class






