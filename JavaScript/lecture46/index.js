
console.log(marks);
console.log("babbar");
console.log("Love");
const marks = 100; // these 2-5 lines of code is temporal dead zone since we r accessing marks in 2nd line code without declaring marks before
console.log(marks);

/* variable scoping:- 1)global, 2)inside Function, 3)inside Block
   1)Let,var,const - anyone of these used in global scoping gives the same output wherever they are decalared
   2)we can access let,var,const declared inside a func. but not accessible outside func.
   3)we can access let,var,const declared inside a block but only var is accessible outside block alo\so
 */

// {
//     const age = 100;
// }

// console.log(age);


// console.log(height);
// {
//     var height = 180;
// }

// console.log(height);


// console.log(fullName);
// function sayHello() {
//     const fullName = "Earth";
//     console.log("Hello Dunia ", name);
// }
// console.log(fullName);
// sayHello();





// //global scope
// const age = 15;

// console.log(age);

// {
//     console.log(age)
// }
// if(true ){
//     console.log(age)
// }
// for(let i=0; i<2; i++) {
//     console.log(age);
// }

// function sayHello() {
//     console.log("hi ", age);
// }
// sayHello();








