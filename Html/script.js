// console.log("hello"); 
// substr()
// let  str = 'javascript is a Scripting language which is define in acmascript by john';
//  let substring = str.substr (16,18);
//  console.log(substring);

 //substring
 //IndexOf
//  let str2 = str.lastIndexOf('javascript');
//  console.log(str2);
//trim function
// let sen = str.substring(11,18);
// console.log(sen); -----String Manipulation----------------
// let book = ["Math", "Physics" , "Chemistry", "Biology","c-s"];
// let book1 = "manoj";
// console.log(Array.isArray(book));// return true / false
// let text = 'this is a array Function';
// let wordarray = text.split('');
// let bookwithfetch = [["Math","100"],["Physics","200"],["Chemistry","300"],["C-s","400"]];
// console.log(book.length);
// console.log(bookwithfetch[3][1]);
// let booklength = book.length;
// for ( i=0 ; i<booklength;i++){
//     console.log(`Element is ${i} : ${book[i]}`);
// }
//Part-18 Function
// To print table 2.
// for(i=1;i<=10;i++)
// {
//     document.write(`2* ${i} = ${2*i}`);
//     document.write('<br>');
// }

// function MulTable(){// Function Define
//     for(i=1;i<=10;i++)
//     {
//     document.write(`2* ${i} = ${2*i}`);
//     document.write('<br>');
//     }
// }
// MulTable();// Function Call
// document.write("<br>");
// document.write("hello <br>");
// document.write("<br>");
// MulTable();
//19. Parameters and arguments

//  function add(num1, num2){ // function define
//      document.write(num1+num2);
//  }
//  add(3,7); // function call
// The Arguments object
// function add() {
    // console.log(arguments.length);
    // console.log(arguments);
    // console.log(arguments[5]);
//     if(arguments.length == 0){
//         console.log("plz passed the arguments");
//     }
//     else{
//         sum = 0 ;//10
//         for(i=0;i<arguments.length;i++){
//             sum = sum+arguments[i];
//         }
//         console.log(sum);
//     }
// }
// add();
// let addition = add;
// addition(5,70);
// 21. Return in Function 
// function compare(a,b){
//     if(a>b){
//         return 1;
//     }
//     else if(b>a){
//         return -1;

//     }
//     else{
//         return 0;

//     }
//     // console.log(a+b);
//     // return 0;
//     // let d = [2,3,4];
//     // return d;
// }
// let d= compare(5,3)
// document.write(d);
// 22. Local and Global variable

    // const car ="audi";// global variable
    //  car="BMW";
    // function add(){
    //     let x = 2;// local variable 
    //     console.log(x);
    // }
    // function sub(){
    //     let x =5;
    //     console.log(x); 
    // }
    // add();
    // sub();
    // 23. Anonymous Function 

    //  function show (){
    //     console.log("hello world");
    // };
    // setTimeout(show , 2000);
    // setTimeout(show, 5000);
    // setTimeout(function(){
    //     console.log("hello");
    // },5000);
    // setTimeout(function(){
    //     console.log('Amit');
    // },2000);
    // 24. Immediate Invoked Function
    // let put = "hello";
    // (function(){
    //     let string = "hello";
    //     alert(put);  
    // })();
    // console.log(string);
    // 26.properties in objects
    // let x = {
    //     FirstName :"ujjwal",
    //     LastName :"Yadav", 
    //     Age: 24, 
    //     sayHello(){
    //         console.log("hello! I have a "+ B.Girl1 +" Girlfriend and my age is "+this.Age+" ");
    //     }
    // };
    // let B = {
    //     Girl1 : "Beauty",
    //     Girl2: "Mansi"
    // };
    // x.FirstName = "Beauty";
    // x.Age=25;
    // console.log(x.FirstName);
    // console.log(x.LastName); 
    // console.log(x.Age);
    // console.log(x.Address);
    // console.log(x.Mob);
    // console.log(x);
    // delete x.Mob;
    // delete x.Address
    // console.log('female' in x);
    // console.log(key);
    // for(let key in x){
    //     console.log(key+ ":" +x[key]);
    // } 
    // 27. Methods in objects
    //1.sayHello
    // x.sayHello = function(){
    //     console.log("hello");
    // }
    // x.sayHello();
    // 2.Normal Function

    // function add(){
    //     console.log("hello");
    // }
    // x.sayHello = add;
    // x.sayHello();
    // 3.Define inside Object 
    // 4.Define inside object only sayhello 
// x.sayHello();

// 28 . 'This' In Object

// 29. Math object
// console.log(Math.PI);
// console.log(Math.E);
// 1.Round-Off
// 2. ceil
// 3. Floor
// 4.Trunc-Integer part
// 5.Pow
//6. Sqrt
// 7. Min
// var x = Math.max(4,3,5,8,0,-2);
// console.log(x);
// 30. Random Number
// var x = Math.random()*10;
// console.log(x);
// function getRandom(min, max){
//     let  x = Math.floor(Math.random()*(max-min+1))+min;
//     return x;
// }
// console.log(getRandom(10,20));
// btn.style.cssText = "color:green;background-color:orange; padding:30px; border:2px solid blue;"
    



        


   
























